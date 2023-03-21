const buttonsFontSize = [...document.querySelectorAll(".font-size")];
const book = document.querySelector(".book");

function clb(item){
    buttonsFontSize.forEach(el => el.classList.remove("font-size_active"));
    item.classList.add("font-size_active");
    if(item.dataset.size === "small"){
        book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small")
    }
    if(item.dataset.size === "big"){
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big")
    }
    if(!item.dataset.size){
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
    }
    
}
buttonsFontSize.forEach(item => item.onclick = ()=>clb(item));