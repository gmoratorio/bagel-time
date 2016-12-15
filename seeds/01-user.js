exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq restart with 3;')
        .then(() => {
            return knex("user").del()
                .then(() => {
                    return Promise.all([
                        knex("user").insert({
                            id: 1,
                            email: 'a-a-RON@gmail.com',
                            password: 'a-a-RON',
                            date: new Date(),
                            is_active: true
                        }),
                        knex("user").insert({
                            id: 2,
                            email: 'geronimo@someemail.place',
                            password: 'guillermoHasAPW',
                            date: new Date(),
                            is_active: true
                        })
                    ]);
                });
        })

};
