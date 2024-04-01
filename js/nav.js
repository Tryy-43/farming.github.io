function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    let hidebar = document.getElementById("sidebar");
    hidebar.style.display = 'none';
}
var a;
function dropDownMenu(){
    if(a==1){
        document.getElementById("dropdown_menu").style.display ='flex';
        return a=0;
    }else{
        document.getElementById("dropdown_menu").style.display ='none';
        return a=1;
    }   
}
function sidebarDown(){
    if(a==1){
        document.getElementById("sidebar_drop").style.display ='flex';
        return a=0;
    }else{
        document.getElementById("sidebar_drop").style.display ='none';
        return a=1;
    }   
}
function hidedrop(){
    document.getElementById("dropdown_menu").style.display = 'none';
}
function hidedrops(){
    
    document.getElementById("sidebar_drop").style.display = 'none';
}