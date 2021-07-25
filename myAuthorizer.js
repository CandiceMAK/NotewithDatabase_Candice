const fs = require('fs')
const path = require('path')

module.exports = myAuthorizer = function(knex){
return function (username, password, cb) {
    let query = knex
    .select("username")
    .from("users")
    .where("username",username)
    .where("password",password);
    query.then((rows)=>{
        console.log(rows)
        if(rows.length===1){
            cb(null,true);
        }else{
            cb(null,false);
        }
    })
    .catch((error)=>{
        console.log(error);
    });
  };
};
