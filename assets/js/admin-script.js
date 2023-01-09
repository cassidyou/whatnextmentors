$(document).ready(function(){
//  Admin Sidebar
$("#sidebar .sidebar-open").click(function(){
    $(this).addClass("d-none");
    $("#sidebar .sidebar-close").removeClass("d-none");
    $("#sidebar").removeClass("wp-40");
    $("#dashboard-container").removeClass("gtc-closed");
    $("#sidebar .header .logo-img").removeClass("d-none");
    $("#sidebar .header .logo-text").removeClass("d-none");
    $("#sidebar .body").removeClass("d-none");
})

$("#sidebar .sidebar-close").click(function(){
    $(this).addClass("d-none");
    $("#sidebar .sidebar-open").removeClass("d-none");
    $("#sidebar").addClass("wp-40");
    $("#dashboard-container").addClass("gtc-closed");
    $("#sidebar .header .logo-img").addClass("d-none")
    $("#sidebar .header .logo-text").addClass("d-none")
    $("#sidebar .body").addClass("d-none");

})







})