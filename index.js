const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('address.xlsx');
const json_data = XLSX.utils.sheet_to_json(workbook.Sheets['addr'], {header:["link","name","address"]});
//console.log(json_data);

fs.writeFile("address.json", JSON.stringify(json_data,null,4), (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
