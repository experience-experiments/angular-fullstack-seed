'use strict';

module.exports = {
	session: function(name) {
		return function(req, res, next) {
			req.session = req.signedCookies[name] || {};

			res.on('header', function(){
				res.cookie(name, req.session, {signed: true});
			});

			next();
		};
	}
}
