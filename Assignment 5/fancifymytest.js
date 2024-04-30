

document.addEventListener("DOMContentLoaded", function(){
    var big = document.getElementById("bigger");
    var fancy = document.getElementById("FancyShmancy");
    var norm = document.getElementById("BoringBetty");
    var cow = document.getElementById("moo");

    

    big.addEventListener("click", function(){
        document.getElementById("textarea").style.fontSize = "24pt";
       // alertfun();
    });

    fancy.addEventListener("change", function(){
        document.getElementById("textarea").style.fontFamily = "FancyShmancy";
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "blue";
        document.getElementById("textarea").style.textDecoration = "underline";
    } );

    norm.addEventListener("change", function(){
        document.getElementById("textarea").style.fontFamily = "";
        document.getElementById("textarea").style.fontWeight = "";
        document.getElementById("textarea").style.color = "";
        document.getElementById("textarea").style.textDecoration = "";

    });



    cow.addEventListener("click", function(){
        document.getElementById("textarea").style.textTransform = "uppercase";
        var text = document.getElementById("textarea");
        var str = text.value;
        var split = str.split(".");

        for (var i =1; i < split.length; i++){
            split[i] = split[i]+ "-Moo";
        }
        var newtext = split.join(".");

        text.value = newtext;

    });



});




function alertfun(){
    alert("Hello, world!");
}

