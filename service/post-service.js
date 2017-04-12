
let postDao = require('../dao/post-dao');

exports.add = function(jsonData) {

    return postDao.add(jsonData);
}

exports.findAll = function() {

    return postDao.findAll();
}

exports.findById = function(id) {
    
    return postDao.findById(id);
}

exports.findByUserId = function(id) {
    
    return postDao.findByUserId(id);
}
