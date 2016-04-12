$(document).ready(function() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?lat=44.82&lon=20.47&APPID=eb4320b690cc8f7e9b6ebc10a49a218f"
    }).then(function(data) {
       $('.json').append(data.name);
	   $('.json2').append(data.id);
    });
});