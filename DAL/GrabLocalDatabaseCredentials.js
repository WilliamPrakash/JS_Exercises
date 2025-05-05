import fs from 'node:fs'

export default function GrabCredentials() {
    // Change credentials.json filepath based on OS
    let path = ''
    if (process.platform == 'darwin') { // Mac
        path = '/Users/williamprakash/Desktop/credentials.json';
    } else if (process.platform == 'win32') { // Windows
        path = 'C:/Users/willi/Desktop/credentials.json';
    }

    let creds = JSON.parse(fs.readFileSync(path, 'utf8'));

    /* Add user to SQL connection string */
    var sqlServerAuthenticationString = 'User Id=<user>;Password=<password>;';
    sqlServerAuthenticationString = sqlServerAuthenticationString.replace('<user>', creds['SQLServer_User']);
    sqlServerAuthenticationString = sqlServerAuthenticationString.replace('<password>', creds['SQLServer_Password']);
    creds['SQLServer'] = sqlServerAuthenticationString + creds['SQLServer'];
    return creds;

};
