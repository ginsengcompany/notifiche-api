/**
 *
 * @author antoniobiondillo
 * @class
 */
var BaseVO = require('./BaseVo');

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var UtenteVO = (function (_super) {
    __extends(UtenteVO, _super);
    function UtenteVO() {
        var _this = _super.call(this) || this;
        _this.image = null;
        _this.firstname = null;
        _this.permessi = null;
        _this.scadenzaUtenza = null;
        _this.lastname = null;
        _this.password = null;
        _this.id = null;
        _this.profilo = null;
        _this.email = null;
        _this.username = null;
        return _this;
    }
    UtenteVO.prototype.getImage = function () {
        return this.image;
    };
    UtenteVO.prototype.setImage = function (image) {
        this.image = image;
    };
    UtenteVO.prototype.getFirstname = function () {
        return this.firstname;
    };
    UtenteVO.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    UtenteVO.prototype.getPermessi = function () {
        return this.permessi;
    };
    UtenteVO.prototype.setPermessi = function (permessi) {
        this.permessi = permessi;
    };
    UtenteVO.prototype.getScadenzaUtenza = function () {
        return this.scadenzaUtenza;
    };
    UtenteVO.prototype.setScadenzaUtenza = function (scadenzaUtenza) {
        this.scadenzaUtenza = scadenzaUtenza;
    };
    UtenteVO.prototype.getLastname = function () {
        return this.lastname;
    };
    UtenteVO.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    UtenteVO.prototype.getPassword = function () {
        return this.password;
    };
    UtenteVO.prototype.setPassword = function (password) {
        this.password = password;
    };
    UtenteVO.prototype.getId = function () {
        return this.id;
    };
    return UtenteVO;
}(BaseVO));
UtenteVO["__class"] = "UtenteVO";


