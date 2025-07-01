const modal = document.querySelector(".modal")
const modalClose = modal.querySelector(".js-modal-close")

if (modalClose) {
    modalClose.addEventListener("click", function () {
        modal.classList.remove('modal-open')   
    })
}


setTimeout(() => {
    modal.classList.add("modal-open")
}, 20000);