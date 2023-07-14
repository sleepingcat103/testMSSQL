
const dbInfo = {
  database: 'TEST_HFC',
  account: 'SA',
  pwd: 'nks^=Dr^38w^i38',
  // host: '127.0.0.1',
  host: 'LAPTOP-SC',
  port: 1433,
  encrypt: true
}
const _MSSQL = require('./mssql')
MSSQL = new _MSSQL(dbInfo)

MSSQL.init().then(() => {

  
  MSSQL.REQRES_LOGS.insertLog({
    TIME: '123',
    FROM_IP: '123',
    METHOD: '123',
    ORIGINAL_URI: '123',
    URI: '123',
    USER: '123',
    REQUEST_DATA: '123',
    STATUS_CODE: 111,
    RESPONSE_DATA: '123',
    REFERER: '123',
    USER_AGENT: '123',
    START_TIME: 111,
    END_TIME: 111
  })
})


module.exports = {
  MSSQL
}