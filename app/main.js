angular.module('rafter', [

])
    .controller('MainCtrl', function ($scope) {
    
    $scope.surveyData = [
        {"id":0,"project_id":"10-00012","project_name":"The School","score":3,"max":7, "project_manager": "Jo Smith","roof_team":"Bob Builder"},
        {"id":1,"project_id":"06-02032","project_name":"The factory","score":7,"max":10, "project_manager": "Martin Steel","roof_team":"Bob Builder"},
        {"id":2,"project_id":"81-00123","project_name":"House","score":4,"max":7, "project_manager": "Robbie","roof_team":"Job"},
        {"id":3,"project_id":"23-01902","project_name":"House 2","score":9,"max":10, "project_manager": "Robbie","roof_team":"Awesome Installers"}
    ];
    
    $scope.currentID = null;
    
    function setCurrentID(survey){
        $scope.currentID = survey;
    }
    
    $scope.setCurrentID = setCurrentID;

})

;
