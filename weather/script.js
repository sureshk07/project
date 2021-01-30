var APIKEY= "18cacd08cf0d93eb39405dc9e7a86ed9";
var cityname="";
$(".form").submit(function(e){
    e.preventDefault();
    cityname=$("#demo").val();
    var wapi="https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid="+APIKEY
    $.ajax ({
        url:wapi,
        method:"GET",
        success:function(v){
            var deg_data= v.main;
            var temp_val=deg_data.temp;
            
            temp_val=parseInt(temp_val);
            temp_val=temp_val - 273.15;
            temp_val = Math.round(temp_val);
            $(".temp").html("<h2>temp in " + cityname + " is " + temp_val );
                }
    });
});

