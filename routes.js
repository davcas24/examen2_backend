var trabajosController = require('./controllers/trabajosController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, trabajos')}}},
	{method: 'GET', path: '/v1/trabajos', config: trabajosController.gettrabajos},
  {method: 'POST', path: '/v1/trabajo', config: trabajosController.createtrabajo},
	{method: 'PUT', path: '/v1/trabajo/{id}', config: trabajosController.updatetrabajo},
	{method: 'DELETE', path: '/v1/trabajo/{id}', config: trabajosController.archivetrabajo},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
