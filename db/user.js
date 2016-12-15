const knex = require("./connections");


module.exports = {
  getOne: function(id){
    return knex('user')
            .select()
            .where('id', id)
            .first();
  }
}
