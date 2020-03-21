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
        } else {
            transition();
            document.documentElement.setAttribute('data-theme','light');
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
    }
    else 
    {
        x.width = "0vw";
        y.marginLeft = "0vw";
    }
}