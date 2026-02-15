const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const db = require('./models');
const indexRouter = require('./routes/index');
const bookingsRouter = require('./routes/bookings');
const adminRouter = require('./routes/admin');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// sessions + flash
app.use(session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 }
}));
app.use(flash());

// expose flash messages to all views
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/booking', bookingsRouter);
app.use('/admin', adminRouter);

// sync DB and start with an explicit connectivity check
const PORT = process.env.PORT || 3000;

async function start() {
  try {
    // If the sequelize instance has an authenticate method, use it to verify connection.
    if (db.sequelize && typeof db.sequelize.authenticate === 'function') {
      await db.sequelize.authenticate();
      if (db.sequelize.sqliteStorage) {
        console.log('Using SQLite database at:', db.sequelize.sqliteStorage);
      } else if (process.env.DATABASE_URL) {
        console.log('Using database from DATABASE_URL');
      } else {
        console.log('Database connection established');
      }
    }

    await db.sequelize.sync();

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start application - DB connectivity or sync error:', err);
    process.exit(1);
  }
}

start();