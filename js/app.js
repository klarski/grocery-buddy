function DBController ($scope){
	$scope.itemName;

	$scope.listArray = ["Bread", "Eggs", "Milk", "Flour"];
	

	$scope.addItem = function(){

		if($scope.itemName.length > 1){

				$scope.listArray.push($scope.itemName);

				$scope.itemName = ""; 
		}
	}

	$scope.deleteItem = function(deletedItem){
		var ind = $scope.listArray.indexOf(deletedItem);
		$scope.listArray.splice(ind, 1);
	}

}
