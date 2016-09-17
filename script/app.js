


var RepoApp = angular.module('RepoApp', ['ui.router']);

RepoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				
				$urlRouterProvider.otherwise("/home")

				$stateProvider

						.state('display', {
							url: "/stats",
							templateUrl: "views/display.html"
						})

						.state('data', {
							url: "/org",
							templateUrl: "views/data.html"
						})


			}]);

			RepoApp.controller('mainController', function($scope,$http,$state) {
											

				


    				 $scope.getdata = function(data){


				$http.get("https://api.github.com/users/"+data)
					.then(function(response){
              
						$scope.mydata= response.data;
						;
					});


               			 $state.go('display');


				}

				

					$http.get("https://api.github.com/users/dumbstark/orgs")
						.then(function(response){

							$scope.mydata1= response.data;
							
						});



			});
