app.controller('MainController', ['$scope', function($scope, tempService) {
  $scope.staff = [
   {
      "id":1,
      "firstName":"Dobromir",
      "lastName":"Sprytny",
      "dateOfBirth":"1.7.1990 11:35",
      "function":"kamerdyner",
      "experience":4
   },
   {
      "id":4,
      "firstName":"Helga",
      "lastName":"Uczynna",
      "dateOfBirth":"4.02.1976 14:37",
      "function":"pokojówka",
      "experience":12
   },
   {
      "id":2,
      "firstName":"Marianna",
      "lastName":"Prostota",
      "dateOfBirth":"28.10.1976 2:15",
      "function":"pokojówka",
      "experience":12
   },
   {
      "id":3,
      "firstName":"Walerian",
      "lastName":"Szybki",
      "dateOfBirth":"03.01.1986 23:10",
      "function":"kamerdyner",
      "experience":10
   },
   {
      "id":5,
      "firstName":"Krzysztof",
      "lastName":"Klucznik",
      "dateOfBirth":"10.10.1986 18:00",
      "function":"lokaj",
      "experience":3
   },
   {
      "id":6,
      "firstName":"Konstancja",
      "lastName":"Urodziwa",
      "dateOfBirth":"29.02.1936 13:33",
      "function":"kucharka",
      "experience":8
   },
   {
      "id":7,
      "firstName":"Kornelia",
      "lastName":"Wstydliwa",
      "dateOfBirth":"19.02.1973 23:55",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":8,
      "firstName":"Władysława",
      "lastName":"Dobrotliwa",
      "dateOfBirth":"29.12.1977 18:25",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":9,
      "firstName":"Mirosław",
      "lastName":"Podstępny",
      "dateOfBirth":"09.12.1972 17:35",
      "function":"kamerdyner",
      "experience":8
   },
   {
      "id":10,
      "firstName":"Walerian",
      "lastName":"Drażliwy",
      "dateOfBirth":"29.03.1980 15:36",
      "function":"lokaj",
      "experience":8
   },
   {
      "id":11,
      "firstName":"Katarzyna",
      "lastName":"Krasna",
      "dateOfBirth":"05.05.1983 01:15",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":12,
      "firstName":"Urszula",
      "lastName":"Markotna",
      "dateOfBirth":"06.04.1981 12:35",
      "function":"pokojówka",
      "experience":8
   }
];
$scope.actualPage = 0;
$scope.visiblePage;
$scope.staffCount = $scope.staff.length;
$scope.filterDefault = {id:"", firstName:"", lastName:"", dateOfBirth:"", function:"", experience:""};
$scope.filterOptions = angular.copy($scope.filterDefault);;
$scope.tmpStaff = angular.copy($scope.staff);

//Prepare visible first page of table
var startFunction = function() {
  $scope.visiblePage = $scope.tmpStaff.slice(0, 5);
};

startFunction();

//Change the visible page of table 
$scope.changePage = function (actualPage) {
  $scope.actualPage = actualPage;
  $scope.visiblePage = $scope.tmpStaff.slice(actualPage*5, actualPage*5+5);
}

//Update table to show actual version
$scope.refreshPage = function (){
  $scope.visiblePage = $scope.tmpStaff.slice($scope.actualPage*5, $scope.actualPage*5+5);
}

//Filter staff array by parameters from form 
$scope.filter = function(){
  $scope.tmpStaff = filterByForm($scope.tmpStaff, $scope.filterOptions);
  $scope.actualPage = 0;
  $scope.refreshPage();
}

//Clear filter form
$scope.filterReset = function () {
  $scope.filterOptions = angular.copy($scope.filterDefault);
  $scope.tmpStaff = angular.copy($scope.staff);
  $scope.refreshPage();
}
 
//Sort array by chosen parameter
$scope.sortBy = function(parameter){
  var d = [1, 5, 2, 3, 9, 0, 6];
  $scope.tmpStaff = bubbleSort($scope.tmpStaff, parameter);
  $scope.refreshPage();
  // if(variable === "id"){
  //   $scope.tmpStaff.sort(dynamicSort("id"));
  //   $scope.refreshPage();
  // }
  // if(variable === "firstName"){
  //   $scope.tmpStaff.sort(dynamicSort("firstName"));
  //   $scope.refreshPage();
  // }
  // if(variable === "lastName"){
  //   $scope.tmpStaff.sort(dynamicSort("lastName"));
  //   $scope.refreshPage();
  // }
  // if(variable === "function"){
  //   $scope.tmpStaff.sort(dynamicSort("function"));
  //   $scope.refreshPage();
  // }
  // if(variable === "experience"){
  //   $scope.tmpStaff.sort(dynamicSort("experience"));
  //   $scope.refreshPage();
  // }
  // if(variable === "dateOfBirth"){
  //   $scope.tmpStaff.sort(dynamicSort("dateOfBirth"));
  //   $scope.refreshPage();
  // }
}

}]);