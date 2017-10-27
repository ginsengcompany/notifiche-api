var logout = module.exports;
var model = require('../models/loginModel');

logout.getValidate = function (callback) {
    model.getValidate(callback);
};