const logger = require('pino')({
    level: process.env.LOG_LEVEL || 'warn',
    base: undefined
});
module.exports = logger;
//# sourceMappingURL=logger.js.map