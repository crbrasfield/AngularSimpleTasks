


var controllers = angular.module('myApp.controllers', []);
controllers.controller('HomeController', ['$scope', '$rootScope', '$http', function($scope,$rootScope,$http) {

    $scope.alert = function() {
        alert('A nice message for you.');
    }
    
    $scope.message = '';
    $scope.messageAlert = function() {
        alert($scope.message);
        $scope.message = '';
    }
    
    $scope.changeColor = function() {
        var box = document.getElementById('colorChange');
        box.style.backgroundColor = getRandomColor();
    }
    
    $scope.originalColor = function() {
        var box = document.getElementById('colorChange');
        box.style.backgroundColor = "slateblue";
    }
    
    $scope.randomColor = function() {
        var text = document.getElementById('p1');
        text.style.color = getRandomColor();
    }
    
    $scope.addName = function() {
        var names = document.getElementById('names');
        names.innerHTML="<span> Chase Brasfield </span>";
    }
    
    $scope.nextFriend = function() {
        $('#friendslist').append('<li>' + friends[count] + '</li>')
        count++
        if (count === friends.length){
            $scope.nextFriend= function(){};
        }
    }
    var count = 0;
    var friends = ['John','Kent','Aaron','Andi','Benji','Fake1','Fake2']
    
}]);

   function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }