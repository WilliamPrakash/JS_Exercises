import mssql from 'mssql';

export default async function Connect(sqlConnStr) {
    try {
        const connection = await mssql.connect(sqlConnStr); // sqlConnStr, config
        const result = await connection.query('select * from master.dbo.Employees');
        console.log(result);
        return result
    } catch (err) {
        console.log(err);
        return "";
    }
}

