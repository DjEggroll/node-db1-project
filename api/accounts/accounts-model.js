const db = require('../../data/db-config');

const getAll = () => {
  // SELECT * from accounts;
  return db('accounts')
}

const getById = (id) => {
  // SELECT * from accounts WHERE id = chosen id;
  return db('accounts').where('id', id).first()
}

const create = async (account) => {
  // INSERT into accounts (name, budget) values ('foo', 1000);
  const [id] = await db('accounts').insert(account);
  return getById(id);
}

const updateById = async (id, account) => {
  // UPDATE accounts set name='foo', budget=1000 WHERE id = chosen id;
  await db('accounts').where('id', id).update(account);
  return getById(id)
}

const deleteById = id => {
  // DELETE from accounts WHERE id = chosen id
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
