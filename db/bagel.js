const knex = require("./connections");

module.exports = {
  getAllBagels: function(id){
    return knex('bagel')
             .select()

  },
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
  },
  createNewBagel: function(body) {
      return knex('bagel')
          .insert(body, 'id')
          .then((id) => {
              return id[0];
          })
          .catch((err) => {
              return err;
          });
  },  updateBagelById: function(id, body) {
        return knex('bagel')
            .update(body, '*')
            .where('id', id)
            .then(result => {
                return result[0];
            })
            .catch((err) => {
                return err;
            });
    },
    deleteBagel: function(id) {
        return knex('bagel')
        .del()
         .where('id', id)

        .then(result => {
          return{message: "success"} ;
        })
        .catch((err) => {
            return err;
        });
    }




}
