const cartWrapper=document.querySelector('.cart-wrapper')
const btnMinus=document.querySelector('[data-action="minus"]');
const btnPlus=document.querySelector('[data-action="plus"]');
const counter=document.querySelector('[data-counter]');

window.addEventListener('click', function(event){
    let counter;
    if(event.target.dataset.action==='minus' || event.target.dataset.action==='plus'){
        const counterWrapper=event.target.closest('.counter-wrapper') 
        counter=counterWrapper.querySelector('[data-counter]')
    }
    if(event.target.dataset.action==='minus'){
        if(parseInt(counter.innerHTML)>1)
        counter.innerHTML= --counter.innerHTML
    };
    if(event.target.dataset.action==='plus'){
        if(parseInt(counter.innerHTML)<5)
        counter.innerHTML= ++counter.innerHTML
        
    }
});

window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
       const cart=event.target.closest('.product')
        console.log(cart)
    }
    const productInfo=[
        id=cart.dataset.id,
        imgSrc=cart.querySelector('.pizza').getAttribute('src'),
        title=cart.querySelector('text').innerHTML,
        cost=cart.querySelector('cost-pizza').innerHTML,
        counter=cart.querySelector('[data-counter]')
    ]
    const cartItemHTML=`
    <div class="cart-wrapper" data-id="${productInfo.id}">
    <div class="product">
        <img src="${productInfo.imgSrc}" alt="pizza"
        class="pizza">
        <h4 class="text">${productInfo.title}</h4>
        <p class="cost-pizza">Цена:${productInfo.cost}</p>
        <div class="counter-wrapper">
            <div class="items-control" data-action="minus">-</div>
            <div class="items-current" data-counter>${productInfo.counter}</div>
            <div class="items-control" data-action="plus">+</div>
        </div>
    </div>
    </div>`;

    cartWrapper.insertAdjacentElement('beforeend', cartItemHTML);
})