document.getElementById("main-logo").style.webkitAnimationName = "spinStart";

//xs, sm, md, lg, xl
function getBootstrapDeviceSize() {
    return $('#users-device-size').find('div:visible').first().attr('id');
}

//Explorer support for .includes()
String.prototype.includes = function (str) {
    var returnValue = false;
    if (this.indexOf(str) !== -1) {
      returnValue = true;
    }
    return returnValue;
  }

//Disable main logo, if screen is big enough and conversely
window.onresize = function(event) {
    if(getBootstrapDeviceSize() === "xs"){
        $("#main-logo").css("pointer-events","auto");
        $("#main-logo").css("cursor","pointer");
    } else {
        $("#main-logo").css("pointer-events","none");
        $("#main-logo").css("cursor","default");
    }
};

//Logo animation mess :)
var isMainNavigationOpen = false;
var isMainNavigationAnimationActive = false;
$("#main-logo").click(function(){
    if(!isMainNavigationAnimationActive){
    var logo = this;
    isMainNavigationAnimationActive = true;
    if(isMainNavigationOpen){
        isMainNavigationOpen = false;
        logo.style.webkitAnimationName = "spinClose";
        setTimeout(function() {
            logo.style.webkitTransform = 'rotate(360deg)'
            isMainNavigationAnimationActive = false;
        }, 485);;
    } else {
        isMainNavigationOpen = true;
        logo.style.webkitAnimationName = "spinOpen";
        setTimeout(function() {
            logo.style.webkitTransform = 'rotate(540deg)'
            isMainNavigationAnimationActive = false;
        }, 485);;
    }
}
});

onresize();
