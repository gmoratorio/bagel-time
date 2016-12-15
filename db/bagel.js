const knex = require("./connections");

module.exports = {
 getBagelByUser: function(id){
   return knex('bagel')
            .select()
            .where('user_id', id)
            

 }



}
