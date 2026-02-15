const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');

let sequelize;

// If DATABASE_URL is provided (for example, an RDS connection on EB), use it.
// Otherwise fall back to the bundled SQLite file.
if (process.env.DATABASE_URL) {
  // DATABASE_URL example: postgres://user:pass@host:port/dbname
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false
  });
} else {
  const dataDir = path.join(__dirname, '../../data');
  const sqlitePath = path.join(dataDir, 'database.sqlite');

  // ensure data directory exists and is writable at runtime
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('Created data directory:', dataDir);
    }
    fs.accessSync(dataDir, fs.constants.W_OK);
  } catch (err) {
    console.warn('Data directory not writable or could not be created:', dataDir, err.message || err);
    try {
      fs.chmodSync(dataDir, 0o777);
      console.log('Adjusted permissions for data directory:', dataDir);
    } catch (chmodErr) {
      console.warn('Failed to adjust permissions for data directory:', chmodErr.message || chmodErr);
    }
  }

  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: sqlitePath,
    logging: false
  });
  // expose the sqlite path for runtime logging/diagnostics
  sequelize.sqliteStorage = sqlitePath;
}

module.exports = sequelize;