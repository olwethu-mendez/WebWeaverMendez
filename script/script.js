let getMode = localStorage.getItem("mode");

const body = document.querySelector('body'),
    nav = document.querySelector('nav'),
    modeToggle = document.querySelector('.dark-light'),
    // searchToggle = document.querySelector('.searchToggle'),
    sidebarClose = document.querySelector('.nav-close'),
    sidebarOpen = document.querySelector('.nav-open'),
    topLine = document.querySelector('.top-line'),
    middleLine = document.querySelector('.middle-line'),
    bottomLine = document.querySelector('.bottom-line'),
    btnMoreInfo = document.querySelectorAll('.btn-more-info'),
    // btnMoreInfo2 = document.querySelectorAll('.project-btn-more-info'),
    cardElmnt = document.querySelectorAll('.card'),
    cardElmnt2 = document.querySelectorAll('.project-card'),
    cardContainer = document.querySelector('.card-container'),
    cardContainer2 = document.querySelector('.card-container-2'),
    cardCase = document.querySelectorAll('.card-case'),
    // cardCase2 = document.querySelectorAll('.project-card-case'),
    closeCard = document.querySelectorAll('.close-back'),
    openProjectNav = document.querySelectorAll('.open-project-nav'),
    projectContainer = document.querySelectorAll('.project-container'),
    copyYear = document.querySelector('.copyYear');
    closeProjectSection = document.querySelectorAll('.close-project-sect')

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

    //sidebar toggle
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

//card info toggle

for(let i = 0; i < btnMoreInfo.length; i++){
    btnMoreInfo[i].addEventListener('click', () =>{
        cardElmnt[i].classList.add('active');
        cardCase[i].classList.add('expand');
        cardContainer.classList.add('expand');
        cardContainer2[i].classList.add('expand');
    })
    closeCard[i].addEventListener('click', () =>{
        cardElmnt[i].classList.remove('active');
        cardCase[i].classList.remove('expand');
        cardContainer.classList.remove('expand');
        cardContainer2[i].classList.remove('expand');
    })

    cardCase[i].addEventListener("click", (e) => {
        if(e.target === cardCase[i]){
            cardElmnt[i].classList.remove('active');
            cardCase[i].classList.remove('expand');
            cardContainer.classList.remove('expand');
            cardContainer2[i].classList.remove('expand');
        }
    })
}

/* for(let j = 0; j < cardContainer2.length; j++){
    for(let i = 0; i < btnMoreInfo2.length; i++){
        btnMoreInfo2[i].addEventListener('click', () =>{
            cardElmnt2[i].classList.add('active');
            cardCase2[i].classList.add('expand');
            cardContainer2[j].classList.add('expand');
        })
        closeCard2[i].addEventListener('click', () =>{
            cardElmnt2[i].classList.remove('active');
            cardCase2[i].classList.remove('expand');
            cardContainer2[j].classList.remove('expand');
        })

        cardCase2[i].addEventListener("click", (e) => {
            if(e.target === cardCase2[i]){
                cardElmnt2[i].classList.remove('active');
                cardCase2[i].classList.remove('expand');
                cardContainer2[j].classList.remove('expand');
            }
        })
    }
} */

//toggle project nav
for(let i = 0; i < openProjectNav.length; i++){
    openProjectNav[i].addEventListener("click", () =>{
        for(let j = 0; j < projectContainer.length; j++){
            projectContainer[j].style.display = "none";
            openProjectNav[j].classList.remove('active')
            cardContainer2.classList.remove('bg-active')
        }
        projectContainer[i].style.display = "flex";
        openProjectNav[i].classList.add('active')
        cardContainer2.classList.add('bg-active')
    })
    closeProjectSection[i].addEventListener("click", () =>{
        projectContainer[i].style.display = "none";
        openProjectNav[i].classList.remove('active')
        cardContainer2.classList.remove('bg-active')
    })
}

function clockTick() {
    var currentYear = new Date().getFullYear();
    // here we get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('homeCopyYear').innerHtml = currentYear;
    document.getElementById('projectCopyYear').innerHtml = currentYear;
  }
  
  // here we run the clockTick function every 1000ms (1 second)
  setInterval(clockTick, 43200000);
