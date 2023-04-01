const products = [...document.querySelectorAll(".product")];
const productQuantityControls = [...document.querySelectorAll(".product__quantity-controls")];
const cart = document.querySelector(".cart__products");

products.forEach(item =>{
    item.addEventListener("click", event => {
        let valueProducts = item.querySelector(".product__quantity-value");
        let counterProducts = Number(valueProducts.textContent);
        const cartsArr = [...cart.querySelectorAll(".cart__product")];

        
        if(event.target.classList.contains("product__quantity-control_inc")){
            counterProducts += 1;
            valueProducts.textContent = counterProducts;
        }

        if(event.target.classList.contains("product__quantity-control_dec") && counterProducts > 1){
            counterProducts -= 1;
            valueProducts.textContent = counterProducts;
        }

        if(event.target.classList.contains("product__add")){
            const parrent = event.target.closest(".product");
            const img = parrent.querySelector(".product__image");
            let imgSrc = img.getAttribute("src");

            function insertCard(){
                cart.insertAdjacentHTML("afterbegin",
                    `<div class="cart__product" data-id="${parrent.dataset.id}">
                        <img class="cart__product-image" src="${imgSrc}">
                        <div class="cart__product-count">${counterProducts}</div>
                    </div>`
                )
            }

            let existingCard = cartsArr.find(item => item.dataset.id === parrent.dataset.id);
            if(existingCard){
                let itemCount = existingCard.querySelector(".cart__product-count");
                let counterCart = Number(itemCount.textContent);
                counterCart += counterProducts;
                itemCount.textContent = counterCart;
            }else{
                insertCard();
            }
        }
    })
})