
exports.home = function(req, res) {
    console.log('Cookies: ', req.cookies);
    res.json({message: "Hello World!"});
}