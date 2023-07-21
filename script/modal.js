function modal(openModalSelector, modalWrapperSelector, modalContentSelector, closeModal = false){
    const openModalBtn = document.querySelectorAll(openModalSelector);
    const modalWrapperElement = document.querySelectorAll(modalWrapperSelector);
    const modalContentElement = document.querySelectorAll(modalContentSelector);

    for(let i = 0; i < openModalBtn.length; i++){
        modalWrapperElement[i].classList.add("modal-wrapper");
        modalContentElement[i].classList.add("modal-content");
        openModalBtn[i].classList.add("open-modal")


        openModalBtn[i].addEventListener("click", () =>{
            modalWrapperElement[i].style.display = "block";
        });

        modalWrapperElement[i].addEventListener("click", (event) => {
            if(event.target === modalWrapperElement[i]){
                modalWrapperElement[i].style.display = "none";
            }
        });

        // startTimerBtn.addEventListener("click", () => {
        //     modalWrapperElement[i].style.display = "none";
        // })

        if(closeModal) {
            modalContentElement[i].innerHTML += '<span class="close-modal modal-x">&times;</span>';
            const closeModalBtn = modalContentElement[i].querySelector(".close-modal");

            closeModalBtn.addEventListener("click", () => {
                modalWrapperElement[i].style.display = "none";
            });
        }
    }
}