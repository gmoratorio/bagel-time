const knex = require("./connections");


module.exports = {
    getSingleUserById: function(id) {
        return knex('user')
            .select()
            .where('id', id)
            .first();
    },
    getAllUsers: function() {
        return knex('user')
            .select()
    },
    updateUserById: function(id, body) {
        return knex('user')
            .update(body, '*')
            .where('id', id)
            .then(result => {
                return result;
            })
            .catch((err) => {
                return err;
            });
    },
    makeUserInActive: function(id) {
        return knex('user')
        .update({is_active:false}, '*')
         .where('id', id)

        .then(result => {
          return result;
        })
        .catch((err) => {
            return err;
        });
    }

}
