const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const dashboardRouter = require('./components/dashboard/dashboardRouter')
const billingRouter = require('./components/billing/billingRouter')
const tablesRouter = require('./components/tables/tablesRouter')
const profileRouter = require('./components/profile/profileRouter')
const signInRouter = require('./components/sign-in/sign-inRouter')
const vaccineInformationRouter = require('./components/vaccine/vaccineRouter')
const ordersInformationRouter = require('./components/orders/ordersRouter');
const customersInformationRouter = require('./components/customer/customersRouter')
const scheduleRouter = require('./components/schedule/scheduleRouter')
// const loggedInGuard = require('./middlewares/LoggedInGuard')

const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, "components")]);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Authentication middleware
app.use('/', signInRouter);

// Secure middlewares
//app.all('/*', loggedInGuard);

// Store account
app.use(function (req, res, next) {
  res.locals.admin = req.user;
  next();
})

// Router middlewares
app.use('/dashboard', dashboardRouter);
app.use('/billing', billingRouter);
app.use('/tables', tablesRouter);
app.use('/profile', profileRouter);
app.use('/vaccine', vaccineInformationRouter);
app.use('/orders', ordersInformationRouter);
app.use('/customers', customersInformationRouter);
app.use('/schedule', scheduleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
