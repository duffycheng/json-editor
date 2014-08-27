//form structure, todo: define in an external file?
angular.module("jsonEditorApp")
.factory('jeaForm',function(){
	var formFormat = [{
		"header":"Shop Name",
		"type":"text",
		"model":"name",
		"placeholder":"Please enter the name of the shop",
		"element":false
	},
	{
		"header":"Contact Number",
		"type":"text",
		"model":"tel",
		"placeholder":"Please enter the contact number",
		"element":false
	},
	{
		"header":"Address",
		"type":"text",
		"model":"address",
		"placeholder":"Please enter the address",
		"element":false
	},
	{
		"header":"Rules",
		"type":"text",
		"model":"rule",
		"placeholder":"Please enter rules",
		"element": "list"
	}
	];

	return formFormat;

})