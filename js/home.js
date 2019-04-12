var app = angular.module('HomePage', []);
app
		.controller(
				'HomeController'
				, ['$scope', '$interval',
      function($scope, $interval) {
					$scope.aboutMeActive = "active";
					$scope.education = "";
					$scope.contactme = "";
					$scope.skills = "";
					$scope.projects = "";
					$scope.aboutMeActiveflag = false;
					$scope.educationflag =true;
					$scope.contactmeflag = true;
					$scope.skillsflag = true;
					$scope.projectsflag = true;
					$scope.init = function() {
						$scope.contactKeyArray = [];
						$scope.myForm = true;
						$scope.myCForm = true;
						$scope.addVal = "Contact";
						$scope.contactActive = "active";
						$scope.groupActive = "";
					}
					$scope.toggleNav = function(navNum) {
						$scope.aboutMeActive = "";
						$scope.education = "";
						$scope.contactme = "";
						$scope.skills = "";
						$scope.projects = "";
						$scope.aboutMeActiveflag = true;
						$scope.educationflag =true;
					$scope.contactmeflag = true;
					$scope.skillsflag = true;
					$scope.projectsflag = true;
						switch (navNum) {
							case '1':
								$scope.aboutMeActive = "active";
								$scope.aboutMeActiveflag = false;
								break;
							case '2':
								$scope.education = "active";
								$scope.educationflag =false;
								break;
							case '3':
								$scope.skills = "active";
								$scope.skillsflag = false;
								break;
							case '4':
								$scope.projects = "active";
								$scope.projectsflag = false;
								break;
							case '5':
								$scope.contactme = "active";
								$scope.contactmeflag = false;
								break;
							default:
								break;

							}
					};
					
		
			
var skillarrsize=66;
					var skillarr=['$','$','$','$','$','$','$','$','$','$',
					'A',' ','D','e','v','e','l','o','p','e','r','.','$','$','$','$','$','$','$','$','$','$',
					'A',' ','D','e','s','i','g','n','e','r','.','$','$','$','$','$','$','$','$','$','$',
					'P','r','a','t','a','p',' ','D','e','s','a','i','.'];
					var arrcount=0;
					$scope.develop="Pratap Desai.";
					var lettercount=0;
var write;
        $scope.cursor = function() {
          if ( angular.isDefined(write) ) return;
			
          write = $interval(function() {
			  if(arrcount==skillarrsize){
				  arrcount=0;
			  }
			  if(lettercount==8){
				  $scope.develop="";
			  }
			  if(lettercount==10){
				  lettercount=0;
			  }
			  if(skillarr[arrcount]=='$'){
				  lettercount++;
			  }else{
				$scope.develop+=skillarr[arrcount];
			  }
			  arrcount++;
			  
          }, 300);
        };

        $scope.stopcursor = function() {
          if (angular.isDefined(write)) {
            $interval.cancel(write);
            write = undefined;
          }
        };

       
        $scope.$on('$destroy', function() {
          $scope.stopcursor();
        });
						
					$scope.onAboutMe = function() {
						$scope.aboutMeActive = "active";
						$scope.education = "";
					$scope.experience = "";
						
					};
					$scope.onEducation = function() {
						$scope.aboutMeActive ="" ;
						$scope.education = "active";
					$scope.experience = "";
						
					};
					$scope.onExperience = function() {
						$scope.aboutMeActive = "";
						$scope.education = "";
					$scope.experience = "active";
						
					};
				}]);