var apiurl ="https://reqres.in/api/users?page=2";
$.ajax({
    url : apiurl,
    method : "GET",
    success : function(v){
        console.log(v.data);
        var Obj = v.data;
        var html_temp = "";
        Obj.map(function(e){
            html_temp+=`<tr>
            <td>`+e.id+`</td>
            <td>`+e.email+`</td>
            <td>`+e.first_name+`</td>
            <td>`+e.last_name+`</td>
            <td>`+e.avatar+`</td>
        </tr>`;
        });
        $(".mydata").html(html_temp);
    }
});