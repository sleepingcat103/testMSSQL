// MSSQL
const { Sequelize } = require("sequelize");
const _REQRES_LOGS = require("./reqResLogs");

class MSSQL {
  constructor(dbInfo) {
    this.haveIbit = false;
    this.mssql = new Sequelize(dbInfo.database, dbInfo.account, dbInfo.pwd, {
      host: dbInfo.host,
      port: dbInfo.port,
      dialect: "mssql",
      dialectOptions: {
        options: {
          encrypt: dbInfo.encrypt,
        },
      },
    });
    this.REQRES_LOGS = new _REQRES_LOGS(this.mssql);
    // this.REQRES_LOGS = new _REQRES_LOGS(this.mssql);
    // this.REQRES_LOGS = new _REQRES_LOGS(this.mssql);
    // this.REQRES_LOGS = new _REQRES_LOGS(this.mssql);
    // this.REQRES_LOGS = new _REQRES_LOGS(this.mssql);
  }

  init() {
    const _this = this;
    return this.mssql.sync()
      .then(res => {
        _this.haveInit = true
      })
  }

}

module.exports = MSSQL;
