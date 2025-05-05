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

    // Set main SQL connection string
    if (process.platform == 'darwin') { // Mac
        creds['SQLServer'] = creds['SQLServer_Mac'];
    } else if (process.platform == 'win32') { // Windows
        // Add user to main SQL connection string
        let sqlServerAuthenticationString = ';User Id=<user>;Password=<password>';
        sqlServerAuthenticationString = sqlServerAuthenticationString.replace('<user>', creds['SQLServer_User']);
        sqlServerAuthenticationString = sqlServerAuthenticationString.replace('<password>', creds['SQLServer_Password']);
        creds['SQLServer'] =  creds['SQLServer_Win'] + sqlServerAuthenticationString;
    }
    
    return creds;
};
