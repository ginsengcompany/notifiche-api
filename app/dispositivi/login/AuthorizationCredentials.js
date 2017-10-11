/**
 *
 * @author antoniobiondillo
 * @class
 */
var AuthorizationCredentials = (function () {
    function AuthorizationCredentials(username, password) {
        this.username = null;
        this.password = null;
        this.username = username;
        this.password = password;
    }
    AuthorizationCredentials.prototype.getUsername = function () {
        return this.username;
    };
    AuthorizationCredentials.prototype.setUsername = function (username) {
        this.username = username;
    };
    AuthorizationCredentials.prototype.getPassword = function () {
        return this.password;
    };
    AuthorizationCredentials.prototype.setPassword = function (password) {
        this.password = password;
    };
    return AuthorizationCredentials;
}());
AuthorizationCredentials["__class"] = "AuthorizationCredentials";
