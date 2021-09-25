let start = document.getElementsByClassName("m_icon_c")[0];
let startmenu = document.getElementsByClassName("start_menu_img")[0];
console.log(start , startmenu);
start.addEventListener("click" , openStartMenu);
function openStartMenu() {
    if(startmenu.style.bottom == "-600px"){
        startmenu.style.bottom = "60px";
    }
    else{
        startmenu.style.bottom = "-600px";
    }
}