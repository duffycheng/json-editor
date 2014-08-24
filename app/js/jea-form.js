//form structure, todo: define in an external file
angular.module("jsonEditorApp")
.factory('jeaForm',function(){
	var formFormat = [{
		"name":"shopName",
		"type":"text",
		"model":"name",
		"placeholder":"Please enter the name of the shop"
	},
	{
		"name":"shopTel",
		"type":"number",
		"model":"tel",
		"placeholder":"Please enter the contact number"
	}];

	return formFormat;

})