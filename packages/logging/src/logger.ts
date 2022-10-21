const logger = require('pino')(
    {
        level: process.env.LOG_LEVEL || 'warn',
        // Disables inclusion of 'hostname' and 'pid' in log lines, which interfere with 
        // datadog's hostname
        base: undefined
    }
)

module.exports = logger;