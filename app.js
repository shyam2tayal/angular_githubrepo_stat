


var RepoApp = angular.module('RepoApp', ['ui.router']);

RepoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				// For any unmatched url, send to /business
				$urlRouterProvider.otherwise("/home")

				$stateProvider

						.state('display', {
							url: "/stats",
							templateUrl: "display.html"
						})

						.state('data', {
							url: "/org",
							templateUrl: "data.html"
						})


			}]);

			RepoApp.controller('mainController', function($scope,$http,$state) {
											 console.log("i was here");

				// function to submit the form after all validation has occurred


     $scope.getdata = function(data){


				$http.get("https://api.github.com/users/"+data)
					.then(function(response){
              console.log(data);
						$scope.mydata= response.data;
						console.log("i was here");
					});


                $state.go('display');


				}

				

					$http.get("https://api.github.com/users/dumbstark/orgs")
						.then(function(response){

							$scope.mydata1= response.data;
							console.log("i was here");
						});



			});
