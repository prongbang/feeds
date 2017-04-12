let fs = require('fs');
const fileName = __dirname + "/../" + "db/posts.json";

exports.add = function (jsonData) {

    let posts = findAll();

    if (!!jsonData.id) {
        posts.push(jsonData);
        fs.writeFileSync(fileName, JSON.stringify(posts));
        // fs.appendFileSync(fileName, JSON.stringify(posts));
        return jsonData;
    }

    return {};
}

exports.findAll = function() {

    return findAll();
}

exports.findById = function(id) {
    let posts = findAll();
    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id == id) {
            return posts[i];
        }
    }
    return undefined;
}

exports.findByUserId = function(id) {
    let posts = findAll();
    let users = [];
    for(let i = 0; i < posts.length; i++) {
        if(posts[i].user_id == id) {
            users.push(posts[i]);
        }
    }
    return users;
}

function findAll() {

    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}