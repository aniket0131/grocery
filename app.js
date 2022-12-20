// document.getElementById("search-btn").addEventListener("click", function () {
//     var my = document.getElementsByClassName("searchhh");
//     if(my.style.cssText=="display:none")
//     {
//          my.style.cssText=="display:block";
//     }
//     else{
//         my.style.cssText=="display:none";
//     }


function myfunction()
{
    var my = document.getElementById("search-box");
    if(my.style.display == "none")
    {
         my.style.display="block";
    }
    else{
        my.style.display="none";
    }
}


function functio()
{
    var cart = document.getElementsByClassName("shopping-cart");
    if(cart.style.display == "none"){
        cart.style.display = "block";

    }
    else{
        cart.style.display = "none";
    }
}
