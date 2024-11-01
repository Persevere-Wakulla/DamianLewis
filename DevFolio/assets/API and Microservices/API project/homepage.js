
const res = await fetch('https://fakestoreapi.com/products');
const data = await res.json();
console.dir(data);

const userRes = await fetch('https://fakestoreapi.com/users');
const userData = await userRes.json();
console.dir(userData);

const cartsRes = await fetch('https://fakestoreapi.com/carts');
const cartsData = await cartsRes.json();
// console.table(cartsData);
// const greeting = document.querySelector('.greeting')
// function welcome(user){
// }
//////////////////////Products Page/////////////
if (window.location.pathname == '/product.html') {
    const section = document.querySelector('.post');
    data.forEach(prod => {
        createShopping(prod);
    });
    function createShopping(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('poster');

        const category = document.createElement('h2');
        category.textContent = post.category.toUpperCase();
        category.classList.add('title');

        const postTitle = document.createElement('h3');
        postTitle.textContent = post.title;
        postTitle.classList.add('title');

        const postImage = document.createElement('img');
        postImage.src = post.image;
        postImage.classList.add('prodI');

        const price = document.createElement('p');
        price.textContent = `price: $${post.price}`
        const rating = document.createElement('p');
        rating.textContent = `rate: ${post.rating.rate}`
        const count = document.createElement('p');
        count.textContent = `count:${post.rating.count}`

        const description = document.createElement('p');
        description.textContent = post.description;
        description.classList.add('para')

        let removeFromCart = document.createElement('button');
        removeFromCart.textContent = 'Remove Item';
        let addCartBtn = document.createElement('button');
        addCartBtn.textContent = 'Add To Cart';
        addCartBtn.addEventListener('click', addCartClick);

        removeFromCart.classList.add('remove-btn');
        const container2 = document.createElement('div');
        container2.append(removeFromCart, addCartBtn);
        container2.classList.add('flex-container');
        removeFromCart.addEventListener('click', removeFromCartClicK);

        const container = document.createElement('div');
        container.append(price, rating, count);
        container.classList.add('flex-container');

        postDiv.append(category, postTitle, postImage, description, container, addCartBtn, removeFromCart);
        section.appendChild(postDiv);
    };

    //************Cart Button**************//

    const shoppingCart = [];
    cart.addEventListener('click', clickCart);


    function clickCart(open) {
        if (window.location.pathname === '/cart.html') {
            const cart = document.getElementById('cart');

        }
        const openCart = document.querySelector('.open-cart');
        const section = document.createElement('section');
        const card1 = document.createElement('div');
        card1.classList.add('card1-cart');


        const title1 = document.createElement('h2');
        title1.classList.add('title-cart');
        title1.textContent = open.title;

        const img1 = document.createElement('img');
        img1.classList.add('img-card');
        img1.src = open.image;

        const price = document.createElement('p');
        price.classList.add('price-card');
        price.textContent = `price: $${open.price}`;
        card1.append(title1, img1, price)
        section.append(card1);
        //show the cart
        //shoppingCart.forEach((item)=>{
        //display stuff
        // })
        // events to add more or remove items  + & - btns
        // show total
    };


    console.dir(shoppingCart);



    // only remove items from within the cart??

    function addCartClick(e) {
        // grab the title to...
        let myTitle = e.target.parentElement.firstElementChild.nextSibling.textContent
        // find the obj from the data
        console.log(myTitle);
        let thisItem = data.find((item) => item.title === myTitle)
        // push the obj into the arr
        shoppingCart.push(thisItem);
        console.dir(shoppingCart);
    };
    function removeFromCartClicK(e) {
        // grab the title to...
        let myTitle = e.target.parentElement.firstElementChild.nextSibling.textContent
        // find the obj in the cart
        let thisItem = shoppingCart.find((item) => item.title === myTitle)
        // find its index to...
        let ind = shoppingCart.indexOf(thisItem);
        if (ind != -1) {
            // splice it
            shoppingCart.splice(ind, 1);
        }
        else {
            alert('item not in cart');
        }
        console.log(e);
        console.dir(shoppingCart);
    };



    const logo = document.querySelector('#logo')
    const selectClick = document.querySelector('#nav')

    selectClick.addEventListener('click', handleClick, true)
    function handleClick(ev) {
        // make the transform a class
        // then toggled the class on & off
        logo.classList.toggle('spin')
        // clean the area
        // what did I click? this words in the p inside the div
        let myTarget = ev.target.textContent
        // console.dir(ev.target.localName)
        console.log(myTarget)
        // find everything in that category
        if (myTarget === 'All') {
            section.replaceChildren([])
            data.forEach((item) => {
                createShopping(item);
            })
        }
        else if (ev.target.localName != 'div') {
            section.replaceChildren([])
            let filter = data.filter((item) => item.category === myTarget.toLowerCase())
            filter.forEach((item) => {
                // console.log(item)
                createShopping(item)
            })
        };
    };

};/************End Prodcts Page****************/

/**************Password Login ************/
if (window.location.pathname === '/log-in.html') {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const logInBtn = document.getElementById('btn');
    logInBtn.addEventListener('click', handleLogIn);
    function handleLogIn(ev) {
        ev.preventDefault();
        userData.forEach(user => {
            if (email.value === user.email && user.username === username.value && user.password === password.value) {
                console.log(window.location.pathname)
                window.location.pathname = '/product.html';
            };
        });
    };
};//*************End Of Password Login****************//



