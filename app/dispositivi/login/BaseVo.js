/**
 *
 * @author antoniobiondillo
 * @class
 */
var BaseVO = (function () {
    function BaseVO() {
        this.primaryKey = null;
        this.createUser = null;
        this.createDate = null;
        this.updateUser = null;
        this.updateDate = null;
    }
    BaseVO.prototype.getPrimaryKey = function () {
        return this.primaryKey;
    };
    BaseVO.prototype.setPrimaryKey = function (primaryKey) {
        this.primaryKey = primaryKey;
    };
    BaseVO.prototype.getCreateUser = function () {
        return this.createUser;
    };
    BaseVO.prototype.setCreateUser = function (createUser) {
        this.createUser = createUser;
    };
    BaseVO.prototype.getCreateDate = function () {
        return this.createDate;
    };
    BaseVO.prototype.setCreateDate = function (createDate) {
        this.createDate = createDate;
    };
    BaseVO.prototype.getUpdateUser = function () {
        return this.updateUser;
    };
    BaseVO.prototype.setUpdateUser = function (lastupdateUser) {
        this.updateUser = lastupdateUser;
    };
    BaseVO.prototype.getUpdateDate = function () {
        return this.updateDate;
    };
    BaseVO.prototype.setUpdateDate = function (lastupdateDate) {
        this.updateDate = lastupdateDate;
    };
    return BaseVO;
}());
BaseVO["__class"] = "BaseVO";

