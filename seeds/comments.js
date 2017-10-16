
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, title: 'comment1', body: 'this sucks', users_id: 1, post_id: 1},
        {id: 2, title: 'comment2', body: 'this sucks too', users_id: 2, post_id: 2},
        {id: 3, title: 'comment3', body: 'baller', users_id: 3, post_id: 3}
      ]);
    });
};
