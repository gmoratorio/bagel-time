exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM bagel; ALTER SEQUENCE bagel_id_seq restart with 5;')
        .then(() => {
            return knex('bagel').del()
                .then(() => {
                    return Promise.all([
                        knex('bagel').insert({
                            id: 1,
                            flavor: 'onion',
                            date_made: new Date(),
                            price: 100,
                            user_id: 1
                        }),
                        knex('bagel').insert({
                            id: 2,
                            flavor: 'poppy seed',
                            date_made: new Date(),
                            price: 200,
                            user_id: 1
                        }),
                        knex('bagel').insert({
                            id: 3,
                            flavor: 'onion',
                            date_made: new Date(),
                            price: 150,
                            user_id: 2
                        }),
                        knex('bagel').insert({
                            id: 4,
                            flavor: 'everything',
                            date_made: new Date(),
                            price: 300,
                            user_id: 2
                        })
                    ]);
                });
        });

};
