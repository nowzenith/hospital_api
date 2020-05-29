
module.exports = {
  doLogin(db, username, password) {
    return db('h_employee')
      .select('username', 'userpasswordx')
      .where('username', username)
      .where('userpasswordx', password)
      .limit(1);
  },

  getList(db) {
    return db('h_employee').orderBy('userid');
  },

  save(db, data) {
    return db('h_employee').insert(data, 'userid');
  },

  update(db, id, data) {
    return db('h_employee')
      .where('userid', id)
      .update(data);
  },

  remove(db, id) {
    return db('h_employee')
      .where('userid', id)
      .del();
  },

  getInfo(db, id) {
    return db('h_employee')
      .where('userid', id);
  }

};