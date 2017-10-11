/**
 *
 * @author antoniobiondillo
 * @class
 */
var express = require('express');
var objectMapper = require('object-mapper');
var io = require('socket.io').listen(3000);
var oauthserver = require('oauth2-server');
var oauthclient = require('client-oauth2');
var md5 = require('md5');
var router = express.Router();
var AuthorizationCredentials = require('../app/dispositivi/login/AuthorizationCredentials');
var DispositivoVO = require('../app/dispositivi/login/DispositivoVO');
var UtenteVO = require('../app/dispositivi/login/UtenteVO');

var TokenEndpoint = (function () {
    function TokenEndpoint() {
        /*private*/ this.tipoDispositivo = null;
        /*private*/ this.sessionType = "N";
        /*private*/ this.clientId = null;
        /*private*/ this.mapper = new objectMapper;
        /*private*/ this.jsonUtente = new JSON;
        this.jsonUtente = null;

        router.post('/', function (req, res, next) {
            this.sessionExpireIn = 3600000;
            this.userAgent = navigator.userAgent;

            io.sockets.on('connection', function (socket) {
                this.clientId= socket.id; //client ID
            });

            this.clientSecret = md5(this.clientId);

            this.username = "";

            if (!TokenEndpoint.prototype.checkClientId(this.clientId)) {
                return buildInvalidClientIdResponse(); /--------status 401----------
            }
            if (!TokenEndpoint.prototype.checkClientSecret(this.clientSecret)) {
                return buildInvalidClientSecretResponse();  /--------status 401----------
            }

        });

        /*private*/ TokenEndpoint.prototype.checkClientId = function (clientId) {
            return true;
        };
        /*private*/ TokenEndpoint.prototype.checkClientSecret = function (clientSecret) {
            return true;
        };
        /*private*/ TokenEndpoint.prototype.checkAuthCode = function (param) {
            return true;
        };


    }
    return TokenEndpoint;
}());
TokenEndpoint["__class"] = "TokenEndpoint";


module.exports = router;
