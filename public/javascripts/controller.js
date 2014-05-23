function Controller($scope,$http) {

/*
	This is for getting desired city weather data
	by jayant patil
*/
$scope.getData = function() {
	/***
	Sending reuqest for getting data here
	By Jayant Patil
	*/
	
	$scope.List=[];
   	$http({
	method:"post",
	url:"getData",
	data:{city:$scope.cityName}
	}).success(function(data){
		//$scope.result=[data.result];
		$scope.List=data.result.list;
                $scope.msg='Showing Weather for City Name:'+$scope.cityName;

	}).error(function(err){
		$scope.msg="No Data found..for "+$scope.cityName+" Please try again!";
		console.log(err);
	});
    $scope.msg="Loading Data for "+$scope.cityName+" Please wait...";
  };

/*
	This is for the getting current city weather data
	by jayant patil
*/
$scope.getCurrentCityWeather=function(){
 $.get("http://ipinfo.io", function(response) {
        
	$("#currentCity").html("&nbsp;"+response.city+", Country: "+response.country);
	if(response.city!=null&& response.city!=''){
	$scope.cityName=response.city
        /*console.log(JSON.stringify(response),response.city,response.country);*/
	
        $http({
        method:"post",
        url:"getData",
        data:{city:$scope.cityName}
        }).success(function(data){
               // $scope.result=[data.result];
                $scope.List=data.result.list;
                 $scope.msg='Showing Weather for City Name:'+$scope.cityName;

        }).error(function(err){
                $scope.msg="No Data found..for "+$scope.cityName+" Please try again!";
                console.log(err);
        });
	$scope.msg="Loading Data for Current city("+$scope.cityName+") Please wait...";
	}
	else
	{ $("#currentCity").html("Sorry Current city not found");}
        }, "jsonp");

}

}
