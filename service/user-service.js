
let userDao = require('../dao/user-dao');

exports.add = function(jsonData) {

    return userDao.add(jsonData);
}

exports.findAll = function() {

    return userDao.findAll();
}

exports.findById = function(id) {
    
    return userDao.findById(id);
}