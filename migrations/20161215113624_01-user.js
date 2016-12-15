
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(user){
    user.increments();
    user.text('email').unique().notNullable();
    user.text('password').notNullable();
    user.datetime('date').notNullable();
    user.boolean('is_active').notNullable();
  });


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');

};
