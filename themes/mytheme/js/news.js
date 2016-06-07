// JavaScript File News


$(document).ready(function(){
    $("#firstNews").click(function(){
        $.ajax({url: "js/ajax/news1", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#secondNews").click(function(){
        $.ajax({url: "js/ajax/news2", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#thirdNews").click(function(){
        $.ajax({url: "js/ajax/news3", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#forthNews").click(function(){
        $.ajax({url: "js/ajax/news4", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#fifthNews").click(function(){
        $.ajax({url: "js/ajax/news5", 
success: function(result){
            $("#in1sec").html(result);
        }});
    });
});
