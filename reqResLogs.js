const { DataTypes } = require("sequelize");

class REQRES_LOGS {
  constructor(MSSQL) {
    const TABLE = MSSQL.define(
      'REQRES_LOGS',
      {
        ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        TIME: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        FROM_IP: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        METHOD: {
          type: DataTypes.STRING(4),
          allowNull: false,
        },
        ORIGINAL_URI: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        URI: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        USER: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        REQUEST_DATA: {
          type: DataTypes.STRING('MAX'),
          allowNull: false,
        },
        STATUS_CODE: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        RESPONSE_DATA: {
          type: DataTypes.STRING('MAX'),
          allowNull: true,
        },
        REFERER: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        USER_AGENT: {
          type: DataTypes.STRING(500),
          allowNull: true,
        },
        START_TIME: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        END_TIME: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        CREATE_TIME: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        }
      },
      {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'CREATE_TIME',
        updatedAt: false,
      }
    );
    this.TABLE = TABLE;
  }

  // 新增資料範例
  insertLog(logData) {
    return this.TABLE.create(logData)
      .then((res) => {
        console.error('[insert log]', 'success');
        return res
      })
      .catch((error) => {
        console.error('[insert log fail]', error);
        return Promise.reject(error);
      });
  }
}

module.exports = REQRES_LOGS;