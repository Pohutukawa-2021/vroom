exports.up = (knex) => {
  return knex.schema.createTable('rides', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id') // joins to table user.id
    table.string('start_location')
    table.string('destination')
    table.date('date')
    table.time('leaving_time')
    table.time('estimated_arrival_time')
    table.integer('seats_available')
    table.integer('cost')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('rides')
}
