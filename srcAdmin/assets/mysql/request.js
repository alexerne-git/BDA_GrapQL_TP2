/** *******************************************************
ce module contiens des fonctions generatrices des requetes SQL, ceci a fin de
simplifier la lecture du code.
******************************************************** */

const utilmy = require('../utilmy/utilmy');

module.exports = Object.freeze({

  /** *QUERYS** */
  TEST_VAR: 'SELECT 1 as n1',
  select: (data) => {
    const select = data.select || '*';
    const from = data.from || null;

    if (from == null) return { err: 'ERROR: Table unspecified' };

    const results = `SELECT ${select}
            FROM ${from}
            ${data.where ? `WHERE ${data.where}` : ''}
            ${data.order ? `ORDER BY ${data.order}` : ''}
            ${data.limit ? `LIMIT ${data.limit}` : ''}
            `;
    return results.replace(/([\ \n]+[\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '');
  },
  INSERT_ASYNC: (data) => {
    const table = data.table ? data.table : null;
    const params = data.params ? data.params : null;
    const valueClean = data.value ? cleanArray(data.value).toString() : null;
    if (table == null) return { err: 'ERROR: Table unspecified' };
    if (valueClean == null) return { err: 'ERROR: value[] not found' };
    if (params == null) return { err: 'ERROR: params unspecified' };
    const results = `
            INSERT INTO ${table} (${params}) 
            VALUES (${valueClean})`;
    // console.log(results)
    return results;
  },
  UPDATE_ASYNC: (data) => {
    const table = data.table ? data.table : null;
    const params = data.params ? data.params : null;
    const id = data.id ? cleen(data.id) : null;
    const value = data.value ? cleen(data.value) : null;
    const key = data.key ? data.key : null;

    if (table == null) return { err: 'ERROR: Table unspecified' };
    if (params == null) return { err: 'ERROR: params unspecified' };
    if (id == null) return { err: 'UPDATE ERROR: id unspecified' };
    if (value == null) return { err: 'UPDATE ERROR: value unspecified' };
    if (key == null) return { err: 'ERROR: key unspecified' };

    // console.log(table, parametre, id, value, key)
    const results = `
            UPDATE ${table} 
            SET ${table}.${params} = '${value}' 
            WHERE ${table}.${key} = '${id}' ${data.where ? `AND ${data.where}` : ''} `;
    // console.log(results)
    return results;
  },
  DELETE_ASYNC: (data) => {
    const table = data.table ? data.table : null;
    const id = data.id ? cleen(data.id) : null;
    const key = data.key ? data.key : null;

    if (table == null) return { err: 'ERROR: Table unspecified' };
    if (id == null) return { err: 'UPDATE ERROR: id unspecified' };
    if (key == null) return { err: 'ERROR: key unspecified' };


    // console.log(table, parametre, id, value, key)
    const results = `
        DELETE FROM ${table} 
        WHERE ${table}.${key} = '${id}' ${data.where ? `AND ${data.where}` : ''} `;
    // console.log(results)
    return results;
  }
});
