var templateFilePath = "templates/NetFramework.txt";
var outputFilePath = "output/test.txt"

if (process.env.npm_config_templatefilepath !== undefined) {
    templateFilePath = process.env.npm_config_templatefilepath;
}

if (process.env.npm_config_outputfilepath !== undefined) {
    outputFilePath = process.env.npm_config_outputfilepath;
}

var path = require('path');
var fs = require('fs');

var iconsPath = path.join(__dirname, 'icons');

var newIconFileNames = [];

function getFileName(file) {
	var filename = file;
	
	// REMOVE UNWANTED CHARACTERS
	filename = filename.replace('icon-', '');
	filename = filename.replace('.svg', '');
	filename = filename.replace(/-/g, ' ');
	
	filename = toTitleCase(filename);
	
	// REMOVE ALL SPACES
	filename = filename.replace(/ /g, '');
	
	return filename;
}

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

const buffer = fs.readFileSync(templateFilePath);
var templateContent = buffer.toString();
 
fs.readdir(iconsPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
	
	var listOfFileNames = "";
	
	var total = files.length - 1;
	var counter = 0;
	
    //listing all files using forEach
    files.forEach(function (file) {
		listOfFileNames += "\t\t" + getFileName(file);
		
		if (counter < total) {
			listOfFileNames += ",\r\n";
		}
		
		counter += 1;
    });
	
	templateContent = templateContent.replace('##ICONNAMES##', listOfFileNames);
	
	fs.writeFile(outputFilePath, templateContent, function (err) {
	  if (err) return console.log(err);
	  
	  var output = '';
	  
	  output += 'Found ' + total + ' icons. ';
	  output += 'Used template at ' + templateFilePath + '. ';
	  output += 'Exported to ' + outputFilePath + '. ';
	  
	  console.log(output);
	}); 
});

