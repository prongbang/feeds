let userService = require('../service/user-service');
let httpUtil = require('../utils/http-util');

exports.add = function (req, res) {
    try {
        res.json(userService.add(req.body));
    } catch (e) {
        res.status(500).json({message: httpUtil.MSG_500});
    }
}

exports.findAll = function (req, res) {
    res.json(userService.findAll());
}

exports.findById = function (req, res) {
    let user = userService.findById(req.params.id);
    if (!!user) {
        res.json(user);
    } else {
        res.status(404).json({message: httpUtil.MSG_404});
    }
}