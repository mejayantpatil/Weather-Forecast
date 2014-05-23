
/*
 * GET home page.
 */

var http=require("http");
var request=require("request");
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/***
	This is for the Fetching data from the weather forecast
	api key :0d327f900ad039efa6ecd968d4da104f
	url :http://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&cnt=14&APPID=xxxxx 
	
*/
exports.fetchData=function(req,res)
{
 	var host="api.openweathermap.org";
	var apikey="0d327f900ad039efa6ecd968d4da104f";
	var city=req.body.city;
	console.log("City-"+city);
	var options = {
	    'host': host,
	    'body':{q:city,cnt:14,APPID:apikey},
	    'path':"/data/2.5/forecast/daily"
	    
	}
/*	request.get(options, function(error, response, body){
                                        if(error)
                                        {
                                        console.log(error);//logger.error(nconf.get('database')["host"]+" -SAYA Error: "+error);
                                        }
                                  console.log("SAYA Response:"+body);
                                });

*/
	request.get({
				  headers: {'content-type' : 'text/plain'},
				  url:     'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&cnt=14&APPID=0d327f900ad039efa6ecd968d4da104f'
				  				  
				}, function(error, response, body){
					if(error)
					{
					console.log(error);//logger.error(nconf.get('database')["host"]+" -SAYA Error: "+error);
					}
				  console.log("SAYA Response:"+body);
				 res.json({result:JSON.parse(body)});
				});
/*	var result=http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&cnt=14&APPID="+apikey,function(data){
		console.log(data);
		res1.json({data:data});	
	});
/*
	reuslt.on("data",function(data){
		res.json({data:data});
	});
	result.on("error",function(err){console.log(err)});
/*	console.log("options "+JSON.stringify(options));
	var request = http.get(options, function (res) {
	    var data = '';
	    res.on('data', function (chunk) {
	        data += chunk;
	    });
	    res.on('end', function () {
	        console.log(data);
		//response.json({data:data});
	    });
	});
	request.on('error', function (e) {
	   console.log(e.message);
	});
	request.end();
*/
};
