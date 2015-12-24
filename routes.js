// API
var character = require('./routes/character');
var skill = require('./routes/skill');
var cl = require('./routes/class');
var pairing = require('./routes/pairing');
var routes = require('./routes/index');

exports = module.exports = function(app) {
    // API routes
    app.use('/', routes);
    app.use('/api/character', character);
    app.use('/api/pairing', pairing);
    app.use('/api/skill', skill);
    app.use('/api/class', cl);
    // Set routes
};