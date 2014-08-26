//shop data object, write to file system later
angular.module("jsonEditorApp")
.factory('jeaData', ['jsonStorage',function(jsonStorage){
	var displayData = jsonStorage.get();
	return {
		get:function(){
			return displayData;
		},
		add:function(data){
			displayData.push(data);
		},
		delete:function(index){
			displayData.splice(index, 1);
		},
		saveToStorage:function(){
			jsonStorage.put(displayData);
		}
	};
}])