const knex = require("./connections");

module.exports = {
  getBagelByUser: function(id){
    return knex('bagel')
             .select()
             .where('user_id', id)


  },
  getSingleBagelById: function(id){
      return knex('bagel')
          .select()
          .where('id', id)
          .first()
  }


}
