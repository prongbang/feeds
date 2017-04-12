let postService = require('../service/post-service');
let httpUtil = require('../utils/http-util');

exports.add = function (req, res) {
    try {
        res.json(postService.add(req.body));
    } catch (e) {
        res.status(500).json({message: httpUtil.MSG_500});
    }
}

exports.findAll = function (req, res) {
    res.json(postService.findAll());
}

exports.findById = function (req, res) {
    let post = postService.findById(req.params.id);
    if (!!post) {
        res.json(post);
    } else {
        res.status(404).json({message: httpUtil.MSG_404});
    }
}

exports.findByUserId = function (req, res) {
    let post = postService.findByUserId(req.params.id);
    if (!!post) {
        res.json(post);
    } else {
        res.status(404).json({message: httpUtil.MSG_404});
    }
}