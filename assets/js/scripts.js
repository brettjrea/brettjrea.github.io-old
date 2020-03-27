// Toggle theme
document.addEventListener('turbolinks:load', themeChange);
  
function themeChange(){
    // Select our toggle button
    let button = document.querySelector('.theme-toggle');

    // Add an event listener for a click
    button.addEventListener('click', function(e){
        // Check the current data-theme value
        let currentTheme = document.documentElement.getAttribute('data-theme');
        if(currentTheme === 'light') {
            transition();
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem("theme", "dark");
        } else {
            transition();
            document.documentElement.setAttribute('data-theme','light');
            localStorage.setItem("theme", "light");
        }
    });

     // Adds the 'transition' class to <html> for CSS fun
    let transition = () =>{
        document.documentElement.classList.add('transition');
        window.setTimeout(()=>{
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
}

// Toggle sidenav
function toggleNav() {
    var x = document.getElementById("mySidenav").style;
    var y = document.getElementById("myContent").style;
    
    if (x.width == "0vw")
    {
        x.width = "20vw";
        y.marginLeft = "20vw";
        localStorage.setItem("sidebar", "opened");
    }
    else 
    {
        x.width = "0vw";
        y.marginLeft = "0vw";
        localStorage.setItem("sidebar", "closed");
    }
}
/*
// Touch sidenav
var container = document.querySelector("#myContent");

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          document.getElementById("mySidenav").style.width = "0vw";
          document.getElementById("myContent").style.marginLeft = "0vw";
          localStorage.setItem("sidebar", "closed");
          console.log("swiped left");
        } else {
          // swiped right
          document.getElementById("mySidenav").style.width = "20vw";
          document.getElementById("myContent").style.marginLeft = "20vw";
          localStorage.setItem("sidebar", "opened");
          console.log("swiped right");
        }  
      } 
      initialX = null;
      initialY = null;
      
      e.preventDefault();
    };*/
