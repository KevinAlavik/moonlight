$.getJSON('.././config/buildInfo.json', function(json) {
	buildType.innerHTML = json.buildType
	buildNumber.innerHTML = ' v' + json.buildNumber
});


var placeholderText = document.getElementById('p-text')
var buildType = document.getElementById('buildType')
var buildNumber = document.getElementById('buildNumber')
