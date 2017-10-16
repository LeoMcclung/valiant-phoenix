
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bobsd69', password: 'abc123', name: 'bob', email: 'bobwars@hooo.com'},
        {id: 2, username: 'maryjane420', password: 'dankassshit', name: 'steve', email: 'sirsmokesalot@mail.net'},
        {id: 3, username: 'thedude', password: 'epicpass', name: 'moe', email: 'moe@moe.com'}
      ]);
    });
};
