
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'apost', body: 'stuff', users_id: 1},
        {id: 2, title: 'anotherpost', body: 'stuff', users_id: 2},
        {id: 3, title: 'moreposts', body: 'stuff', users_id: 3}
      ]);
    });
};
