/** ******************************************************
    mysqlFonctions
*********************************************************
plusieurs fonctions prédéfinies pour faire des enquêtes SQL,
SELECT, UPDATE; INSERT, ect ..
il n'est pas nécessaire de les utiliser, mais peuvent simplifier la lecture du code :)
La structure de chacun des fonctions est très similaire, donc aucun commentaire.


exemple d'usabilité SELECT
    let results = await mysql.bd.select({
        select:'*',
        from:'table_name',
        where:`params_value = '${value}'`,
    })

exemple d'usabilité UPDATE
    let results = await mysql.bd.update({
        key:'key_params'
        id:'Key_value',
        table:'table_name',
        params:'params_value',
        value: 'value',
    })

example d'usabilité INSERT
    let results = await mysql.bd.insert({
        table:'table_name',
        params:'params_name1, params_name2, etc...',
        value:[
            'value1',
            'value2',
            etc...
        ]
    })
*/

const request = require('./request');

module.exports = Object.freeze({
  api: {
    test: (data) => new Promise(async (resolve) => {
      const query = request.TEST(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQuery(query);
      resolve(queryResults);
    }),
    select: (data) => new Promise(async (resolve) => {
      const queryResults = await asyncQuery(request.select(data));
      resolve(queryResults);
    }),
    insert: (data) => new Promise(async (resolve) => {
      const query = request.INSERT_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQuery(query);
      resolve(queryResults);
    }),
    update: (data) => new Promise(async (resolve) => {
      const query = request.UPDATE_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQuery(query);
      resolve(queryResults);
    }),
    delete: (data) => new Promise(async (resolve) => {
      const query = request.DELETE_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQuery(query);
      resolve(queryResults);
    }),
  },
  paiement: {
    test: (data) => new Promise(async (resolve) => {
      const query = request.TEST(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQueryPaiment(query);
      resolve(queryResults);
    }),
    select: (data) => new Promise(async (resolve) => {
      const queryResults = await asyncQueryPaiment(request.select(data));
      resolve(queryResults);
    }),
    insert: (data) => new Promise(async (resolve) => {
      const query = request.INSERT_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQueryPaiment(query);
      resolve(queryResults);
    }),
    update: (data) => new Promise(async (resolve) => {
      const query = request.UPDATE_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQueryPaiment(query);
      resolve(queryResults);
    }),
    delete: (data) => new Promise(async (resolve) => {
      const query = request.DELETE_ASYNC(data);
      if (query.err) resolve(query);
      const queryResults = await asyncQueryPaiment(query);
      resolve(queryResults);
    }),
  }
});
