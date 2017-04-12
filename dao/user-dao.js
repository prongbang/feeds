let fs = require('fs');
const fileName = __dirname + "/../" + "db/users.json";

exports.add = function (jsonData) {

    let users = findAll();

    if (!!jsonData.id) {
        users.push(jsonData);
        fs.writeFileSync(fileName, JSON.stringify(users));
        // fs.appendFileSync(fileName, JSON.stringify(users));
        return jsonData;
    }

    return {};
}

exports.findAll = function() {

    return findAll();
}

exports.findById = function(id) {
    let users = findAll();
    for(let i = 0; i < users.length; i++) {
        if(users[i].id == id) {
            return users[i];
        }
    }
    return undefined;
}

function findAll() {

    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}