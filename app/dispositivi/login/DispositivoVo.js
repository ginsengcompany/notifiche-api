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

var DispositivoVO = (function (_super) {
    __extends(DispositivoVO, _super);
    function DispositivoVO() {
        var _this = _super.call(this) || this;
        _this.id = null;
        _this.codiceUtente = null;
        _this.tipoDispositivo = null;
        _this.clientId = null;
        _this.descrizione = null;
        _this.impronta = null;
        _this.tipo = null;
        _this.attivo = false;
        _this.applicazione = null;
        return _this;
    }
    DispositivoVO.prototype.getId = function () {
        return this.id;
    };
    DispositivoVO.prototype.setId = function (id) {
        this.id = id;
    };
    DispositivoVO.prototype.getCodiceUtente = function () {
        return this.codiceUtente;
    };
    DispositivoVO.prototype.setCodiceUtente = function (codiceAzienda) {
        this.codiceUtente = codiceAzienda;
    };
    DispositivoVO.prototype.getTipoDispositivo = function () {
        return this.tipoDispositivo;
    };
    DispositivoVO.prototype.setTipoDispositivo = function (tipoDispositivo) {
        this.tipoDispositivo = tipoDispositivo;
    };
    DispositivoVO.prototype.getClientId = function () {
        return this.clientId;
    };
    DispositivoVO.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
    };
    DispositivoVO.prototype.getDescrizione = function () {
        return this.descrizione;
    };
    DispositivoVO.prototype.setDescrizione = function (descrizione) {
        this.descrizione = descrizione;
    };
    DispositivoVO.prototype.getImpronta = function () {
        return this.impronta;
    };
    DispositivoVO.prototype.setImpronta = function (impronta) {
        this.impronta = impronta;
    };
    DispositivoVO.prototype.getTipo = function () {
        return this.tipo;
    };
    DispositivoVO.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    DispositivoVO.prototype.isAttivo = function () {
        return this.attivo;
    };
    DispositivoVO.prototype.setAttivo = function (attivo) {
        this.attivo = attivo;
    };
    DispositivoVO.prototype.getApplicazione = function () {
        return this.applicazione;
    };
    DispositivoVO.prototype.setApplicazione = function (applicazione) {
        this.applicazione = applicazione;
    };
    return DispositivoVO;
}(BaseVO));
DispositivoVO["__class"] = "DispositivoVO";

