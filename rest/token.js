/**
 *
 * @author antoniobiondillo
 * @class
 */
var express = require('express');
var objectMapper = require('object-mapper');
var router = express.Router();
var AuthorizationCredentials = require('../app/dispositivi/login/AuthorizationCredentials');
var DispositivoVO = require('../app/dispositivi/login/DispositivoVO');
var UtenteVO = require('../app/dispositivi/login/UtenteVO');



router.post('/', function (req, res, next) {

});

module.exports = router;
