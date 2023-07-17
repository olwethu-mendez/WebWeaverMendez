let getMode = localStorage.getItem("mode");

const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    // searchToggle = document.querySelector('.searchToggle'),
    sidebarClose = document.querySelector('.nav-close'),
    sidebarOpen = document.querySelector('.nav-open'),
    topLine = document.querySelector('.top-line'),
    middleLine = document.querySelector('.middle-line'),
    bottomLine = document.querySelector('.bottom-line');

const lightMode = () => {
    document.body.classList.add("light");
    localStorage.setItem("mode", "light-mode");
    modeToggle.classList.add("active");
};

const darkMode = () => {
    document.body.classList.remove("light");
    localStorage.setItem("mode", "dark-mode");
    modeToggle.classList.remove("active");
};

if(getMode !== "dark-mode"){
    lightMode();
}


//toggling light and dark mode
modeToggle.addEventListener("click", () =>{
    getMode = localStorage.getItem("mode");
    if(getMode !== "light-mode"){
        lightMode();
    }else{
        darkMode();
    }
});

// if(!body.classList.contains("light")){
// }else{
// }

// //toggling search box
// searchToggle.addEventListener("click", () =>{
//     searchToggle.classList.toggle("active");

// });

    //sidebar toggle
// if(nav.classList.contains("active")){
//     sidebarClose.addEventListener("click", () =>{
//         nav.classList.remove("active");
//         // topLine.style.transform = 'rotate(-45deg)';
//         // middleLine.style.display ='none';
//         // bottomLine.style.transform = 'rotate(45deg)';
//     })
// }else{
//     sidebarOpen.addEventListener("click", () =>{
//         nav.classList.add("active");
//         // topLine.style.transform = 'rotate(45deg)';
//         // middleLine.style.display = 'block';
//         // bottomLine.style.transform = 'rotate(-45deg)';
//     })

// }

sidebarOpen.addEventListener('click', () =>{
    if(nav.classList.contains('active')){
        nav.classList.remove("active");
        // topLine.style.transform = '';
        // middleLine.style.transform = '';
        // bottomLine.style.transform = '';
    }else{
        nav.classList.add("active");
    }
})
    
body.addEventListener("click", e =>{
    let clickedElm = e.target;
    
    if(!clickedElm.classList.contains("nav-open") && !clickedElm.classList.contains("list-container") && !clickedElm.classList.contains("nav-close")){
        nav.classList.remove("active");
    }
})