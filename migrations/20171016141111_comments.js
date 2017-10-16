
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table){
        table.increments('id').primary();
        table.string('title');
        table.string('body');
        table.integer('users_id').references('uid').inTable('users');
        table.integer('post_id').references('id').inTable('posts');
        table.dateTime('postDate');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
  
};
