let fs = require("fs");
let mock = require("./mock-service");

exports.findAll = function () {
    let mocks = mock.mockData(); 
    return mocks;
}

exports.findById = function (id) {
   return mock.mockData();
};