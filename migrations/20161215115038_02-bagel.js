
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bagel', function(bagel){
    bagel.increments();
    bagel.text('flavor').notNullable();
    bagel.datetime('date_made').notNullable();
    bagel.decimal('price').notNullable();
    bagel.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
  });


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bagel');
};
