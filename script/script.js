const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    // searchToggle = document.querySelector('.searchToggle'),
    sidebarClose = document.querySelector('.nav-close'),
    sidebarOpen = document.querySelector('.nav-open'),
    topLine = document.querySelector('.top-line'),
    middleLine = document.querySelector('.middle-line'),
    bottomLine = document.querySelector('.bottom-line');

    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "light-mode"){
            body.classList.add("light");
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

    // //toggling search box
    // searchToggle.addEventListener("click", () =>{
    //     searchToggle.classList.toggle("active");

    // });

    //sidebar toggle
if(nav.classList.contains("active")){
    sidebarClose.addEventListener("click", () =>{
        nav.classList.remove("active");
        // topLine.style.transform('rotate(45deg)');
        // topLine.style.display('none');
        // bottomLine.style.transform('rotate(-45deg)');
    })
}else{
    sidebarOpen.addEventListener("click", () =>{
        nav.classList.add("active");
        // topLine.style.transform('rotate(-45deg)');
        // topLine.style.display('block');
        // bottomLine.style.transform('rotate(45deg)');
    })
}

body.addEventListener("click", e =>{
    let clickedElm = e.target;
    
    if(!clickedElm.classList.contains("nav-open") && !clickedElm.classList.contains("list-container")){
        nav.classList.remove("active");
    }
})