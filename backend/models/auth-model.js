const db = require('../database/db-config.js');

function find() {
  return db('users').select('id', 'username', 'password');
}

async function add(user) {
  const [id] = await db('users').insert(user).returning('id');

  return findById(id);
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users').where({ id }).first();
}

module.exports = {
  find,
  add,
  findBy,
  findById,
};
