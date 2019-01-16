const fs=require('fs');
const path=require('path');
const csvjson=require('csvjson');
const uuidv1=require('uuid/v1');
const csvTojson=(filename='customer-data.csv')=>{
	const convertData=(filename,callback)=>{
		console.log('converting file');
		var data = fs.readFileSync(path.join(__dirname, filename), { encoding : 'utf8'});
		var options = {
			delimiter : ',',
			quote     : '"' 
			};
		var jsonDataini=csvjson.toSchemaObject(data,options);
		var jsonData=JSON.stringify(jsonDataini,null,2);
		//console.log(jsonData);
		callback(jsonData);
		}
	let writeFile=uuidv1();
	writeFile=writeFile+'.json';
	convertData(filename,(jsonData)=>{
		console.log('writing file');
		fs.writeFileSync(path.join(__dirname,writeFile),jsonData,'utf8');});
		console.log('writing file done to :  '+writeFile);
}
csvTojson(process.argv[2]);

	
