const http = require("http");
const fs = require("fs");
let avatarholder = require('avatarholder');



http.createServer(function(request, response){

if(request.url.startsWith("/app/")){
// получаем путь после слеша
const filePath = request.url.substr(1);
fs.readFile(filePath, function(error, data){
if(error){
response.statusCode = 404;
response.end("Resourse not found!");
}
else{
	if (filePath.includes(".css")) {
		response.setHeader("Content-Type", "text/css");
		
	}
	else{response.setHeader("Content-Type", "text/html");}

response.end(data);
}
})
}
else{
	if(request.url.startsWith("/user/")){

	let image = avatarholder.generateAvatar('Daniil Frolov');
	response.setHeader("Content-Type", "text/html")
	response.end("<img src="+image+">");
	}
	
// во всех остальных случаях отправляем строку hello world!
response.end("Hello World!");
}
}).listen(3000);
