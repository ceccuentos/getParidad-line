const winston = require('winston')

// define the custom settings for each transport (file, console)
var options = {
    file: {
        level: 'error',
        filename: `${__dirname}/../logs/error.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new(winston.transports.Console)(options.console),
        new(winston.transports.File)(options.file)
    ],
    exitOnError: false, // do not exit on handled exceptions
});


module.exports = logger;