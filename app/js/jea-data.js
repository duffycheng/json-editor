//shop data object, write to file system later
angular.module("jsonEditorApp")
.factory('jeaData', function(){
	var displayData = [{
		'name':'first shop',
		'tel': 123456
	}];
	return {
		get:function(){
			return displayData;
		},
		add:function(data){
			displayData.push(data);
		},
		edit:function(index, data){
			
		}
	};
})