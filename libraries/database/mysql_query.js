const { UNDEFINED_TABLE, UNDEFINED_DB_COLUMN, UNDEFINED_DATA } = require("../../constants/response");
const { db, query:makeQry } = require("../../config/database/mysql/database");

// create insert query
const insert = (table = '', fields = [], data = '', type_name = 'FILLABLE', type_data = []) => {
    if (table == '') {
        return UNDEFINED_TABLE; // {status : VALIDATION_CODE, msg : 'Table Name is required.'};
    } 
    
    data = filterData(fields, data, type_name, type_data);

    let columns_name = Object.keys(data).join(',');
    let values = Object.values(data).join(',');
    
    let query = 'INSERT INTO ' + table + '(' + columns_name + ') VALUES(' + values + ')';
    return query;
}

// create select query
const select = async (table = '', column = [], whr = '', order_by_data = [], group_by_data = '', limit_data = '') => {
    if (table == '') {
        return UNDEFINED_TABLE; // {status : VALIDATION_CODE, msg : 'Table Name is required.'};
    } else if (column.length == 0) {
        return UNDEFINED_DB_COLUMN; // {status : VALIDATION_CODE, msg : 'Column name must be required.'};
    } 

    let columns = '';
    if (column.length > 0) {
        columns = column.join(",");
    } 

    // make where clause
    let whereData = { wKey : '', wVal : [] };
    if ( (typeof whr === "object" || typeof whr === 'function') && (whr !== null) ) {
        whereData = where(whr);
    }

    // make order by clause
    let order_by = '';
    if (Array.isArray(order_by_data) && order_by_data.length > 0) {
        order_by = order_by(order_by_data);
    }

    // make group by clause
    let group_by = '';
    if (group_by_data.trim() != '') {
        group_by = group_by(group_by_data);
    }

    // make limit clause
    let limit = '';
    if (limit_data.trim() != '') {
        limit = limit(limit_data);
    }

    let query = 'SELECT ' + columns + ' FROM ' + table + whereData.wKey;
    let connection = await db();
    return await makeQry(connection, query, whereData.wVal);    
}

// create update query
const update = (table = '', data = [], whr = '') => {
    if (table == '') {
        return UNDEFINED_TABLE; // {status : VALIDATION_CODE, msg : 'Table Name is required.'};
    } else if (data.length == 0) {
        return UNDEFINED_DATA;  // {status : VALIDATION_CODE, msg : 'Data must be required.'};
    } 

    // create set data
    let setData = '';
    if (data.length > 0) {
        for (const key in data) {
            setData += key + ' = ' + data[key] + ', ';
        }

        setData = setData.slice(0, -1);
    }
    
    // make where clause
    let where = '';
    if ( (typeof whr === "object" || typeof whr === 'function') && (whr !== null) ) {
        where = where(whr);
    }

    let query = 'UPDATE ' + table + ' SET ' + setData + where;
    return query;
}

// create delete query
const deleted = (table = '', whr = '') => {
    // make where clause
    let where = '';
    if ( (typeof whr === "object" || typeof whr === 'function') && (whr !== null) ) {
        where = where(whr);
    }

    let query = 'DELETE FROM ' + table + where;
    return query;
}

// manage data 
const filterData = (db_fields_name = [], data = '', type_name = 'FILLABLE', type_data = []) => {
    if (db_fields_name.length == 0) {
        return UNDEFINED_FIELDS_NAME; // {status : VALIDATION_CODE, msg : 'Database fields name is required.'};
    } else if (data == '') {
        return UNDEFINED_DATA; // {status : VALIDATION_CODE, msg : 'Data is required.'};
    } else if (type_name == '' || ['FILLABLE', 'GUARDED'].indexOf(type_name) == -1) {
        return ATLEAST_FILLABLE_OR_GUARDED; // {status : VALIDATION_CODE, msg : 'Please select atleast one Fillable OR Guarded property.'};
    } else if (type_data.length == 0) {
        return FILLABLE_OR_GUARDED_REQUIRED; //{status : VALIDATION_CODE, msg : 'Fillable Or Guarded fields are required.'};
    }  

    for (const key in data) {
        if (db_fields_name.indexOf(key) == -1) {
            delete data[key];
        }

        if (type_name == 'FILLABLE' && type_data.indexOf(key) == -1) { // for fillable 
            delete data[key];
        } else if (type_name == 'GUARDED' && type_data.indexOf(key)) { // for guarded
            delete data[key];
        }    
    }

    return data;
}

// create where clause
const where = (whr = '') => {
    let whereQry = ' WHERE ';
    let whereVal = [];
    for (const key in whr) {
        whereQry += key + ' = ? AND ';
        whereVal.push(whr[key]);
    }

    whereQry = whereQry.slice(0, -4);
    return { wKey : whereQry, wVal : whereVal };
}

// create limit clause
const limit = (limit = '') => {
    if (limit) {
        return ' LIMIT ' + limit;
    }
}

// order by clause 
const order_by = (order_by = []) => {
    if (Array.isArray(order_by) && order_by.length > 0) {
        return ' ORDER BY ' + order_by[0] + ' ' + order_by[1]; 
    }
}

// group by clause 
const group_by = (group_by = '') => {
    if (group_by.trim() != '') {
        return ' GROUP BY ' + group_by;
    }   
}

module.exports = {
    insert,
    select,
    update,
    deleted
}