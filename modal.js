// Function
const testAlert = () => alert("Hey Listen");
$(document).ready(function(){
    $("#article1Btn").click(function(){
        $("#article1").modal();
    });
    $("#article2Btn").click(function(){
        $("#article2").modal();
    });
    $("#article3Btn").click(function(){
        $("#article3").modal();
    });
    $("#article4Btn").click(function(){
        $("#article4").modal();
    });
    $("#loginBtn").click(function(){
        $("#login").modal();
    });

});