const winston = require('winston');
require('express-async-errors');

module.exports = function () {
  // Logging errors in a log file
  winston.add(new winston.transports.File({ filename: 'logfile.log' }));

  // handle uncaught exception
  winston.exceptions.handle(
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'uncaughtException.log' })
  );

  // handle unhandled promise rejections
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
};
