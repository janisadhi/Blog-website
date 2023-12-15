function menu(){
    var a=document.getElementById("menuitem").style.display;
    if(a=="none"){
        document.getElementById("menuitem").style.display="flex";
        document.getElementById("nav1").style.height="300px";

    }
    else{
        document.getElementById("menuitem").style.display="none";
        document.getElementById("nav1").style.height="auto";


    }
}
function menu1(){
    var a=document.getElementById("menuitem1").style.display;
    if(a=="none"){
        document.getElementById("menuitem1").style.display="flex";
        document.getElementById("nav2").style.height="300px";
        

    }
    else{
        document.getElementById("menuitem1").style.display="none";
        document.getElementById("nav2").style.height="auto";

    }
}
window.addEventListener('scroll', function() {
    var nav2 = document.getElementById('nav2');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 500) {
        nav2.style.display = 'flex';
    } else {
        nav2.style.display = 'none';
    }
});