//output ordered list
angular.module("jsonEditorApp")
.filter('list', ['$sce', function($sce) {
    return function(val) {
    	if(!val || val=="") return;

        var strArr = val.split(","), len = strArr.length,list="<ol>";
        for (var i = 0; i < len; i++) {
		  list += "<li>" + strArr[i].trim() + "</li>";
		}
        
        list += "</ol>";
        
        return $sce.trustAsHtml(list);
    };
}])