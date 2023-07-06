const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.bg-mode'),
    searchToggle = document.querySelector('.searchToggle'),
    sidebarClose = document.querySelector('.nav-close'),
    sidebarOpen = document.querySelector('.nav-open');

    let getMode = localStorage.getItem("mode")
    if(getMode && getMode === "light-mode"){
        body.classList.add("dark");
    }
    

    //toggling light and dark mode
    modeToggle.addEventListener("click", () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("light");
    });
    
    if(!body.classList.contains("light")){
        localStorage.setItem("mode", "dark-mode");
    }else{
        localStorage.setItem("mode", "light-mode");
    }

    //toggling search box
    searchToggle.addEventListener("click", () =>{
        searchToggle.classList.toggle("active");

    });

    //sidebar toggle
if(nav.classList.contains("active")){
    sidebarClose.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
}else{
    sidebarOpen.addEventListener("click", () =>{
        nav.classList.add("active");
    })
}

body.addEventListener("click", e =>{
    let clickedElm = e.target;
    
    if(!clickedElm.classList.contains("nav-open") && !clickedElm.classList.contains("list-container")){
        nav.classList.remove("active");
    }
})