var json2xls = require('json2xls');
var fs = require('fs');
var json = {
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
}

var xls = json2xls(json);

fs.writeFileSync('data.xlsx', xls, 'binary');