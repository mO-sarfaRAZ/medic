const $272af846d2c469d8$export$7edec905158766d1 = ()=>{
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    return cartItems;
};
const $272af846d2c469d8$export$edec056fbbda565b = (cartItems)=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
const $272af846d2c469d8$export$4995c03e0851be = ()=>{
    const shipping = localStorage.getItem('shipping') ? JSON.parse(localStorage.getItem('shipping')) : {
        name: '',
        email: '',
        Cellphone: '',
        address: '',
        city: '',
        ZIP: '',
        country: ''
    };
    return shipping;
};
const $272af846d2c469d8$export$c9428395f9987bd8 = ({ name: name = '', email: email = '', Cellphone: Cellphone = '', address: address = '', city: city = '', ZIP: ZIP = '', country: country = '' })=>{
    localStorage.setItem('shipping', JSON.stringify({
        name: name,
        email: email,
        Cellphone: Cellphone,
        address: address,
        city: city,
        ZIP: ZIP,
        country: country
    }));
};
const $272af846d2c469d8$export$1d145d8987b0ab29 = ()=>{
    const payment = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : {
        paymentMethod: 'paypal'
    };
    return payment;
};
const $272af846d2c469d8$export$6c0402b0c6103b38 = ({ paymentMethod: paymentMethod = 'paypal' })=>{
    localStorage.setItem('payment', JSON.stringify({
        paymentMethod: paymentMethod
    }));
};
const $272af846d2c469d8$export$29705104f0840816 = ()=>{
    localStorage.removeItem('cartItems');
};


const $be25f1620a50bfcc$export$a5e0d554281d7ca6 = ()=>{
    let url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    };
};
const $be25f1620a50bfcc$export$b095a217686cbd0 = async (component)=>{
    document.getElementById('main-container').innerHTML = await component.render();
    await component.after_render();
};
const $be25f1620a50bfcc$export$64858b67578a10bb = ()=>{
    document.getElementById('loading-overlay').classList.add('active');
};
const $be25f1620a50bfcc$export$7d026bf51c574e0d = ()=>{
    document.getElementById('loading-overlay').classList.remove('active');
};
const $be25f1620a50bfcc$export$787f5d117f138d13 = (message, callback)=>{
    document.getElementById('message-overlay').innerHTML = `
     <div>
          <div id="message-overlay-content">${message}</div>
          <button id="message-overlay-close-button">OK</button>
     </div>
     `;
    document.getElementById('message-overlay').classList.add('active');
    document.getElementById('message-overlay-close-button').addEventListener('click', ()=>{
        document.getElementById('message-overlay').classList.remove('active');
        if (callback) callback();
    });
};
const $be25f1620a50bfcc$export$5eafa337b1a2f98e = ()=>{
    if ((0, $272af846d2c469d8$export$7edec905158766d1)().length !== 0) document.location.hash = '/shipping';
    else document.location.hash = '/';
};


const $8cc671e87cb2180b$var$HomeScreen = {
    render: async ()=>{
        (0, $be25f1620a50bfcc$export$64858b67578a10bb)();
        const response = await fetch('https://gks-healthcare.onrender.com/api/products', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        (0, $be25f1620a50bfcc$export$7d026bf51c574e0d)();
        if (!response || !response.ok) return `<div>Error in getting data<div>`;
        const products = await response.json();
        return `
        

        <ul class="products">
        ${products.map((product)=>`
        <li>
            <div class="product" id="${product._id}">
                <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
                    ${product.name}
                    </a>
                </div>
                
                <div class="product-detail">
                ${product.detail}
                </div>
            </div>
        </li>
        `).join('\n')}
        </ul>
        `;
    }
};
var $8cc671e87cb2180b$export$2e2bcd8739ae039 = $8cc671e87cb2180b$var$HomeScreen;



const $720d04c988e6cd11$var$Error404Screen = {
    render: ()=>{
        return `<div>Page not Found</div>`;
    }
};
var $720d04c988e6cd11$export$2e2bcd8739ae039 = $720d04c988e6cd11$var$Error404Screen;


const $483d053f6957138a$var$script = document.createElement('script');
$483d053f6957138a$var$script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
$483d053f6957138a$var$script.async = true;
document.body.appendChild($483d053f6957138a$var$script);
const $483d053f6957138a$export$e2005c9600188ac7 = async (id)=>{
    try {
        const url = 'https://gks-healthcare.onrender.com/api/products/' + id;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response || !response.ok) return `<div>Error in getting data<div>`;
        const product = await response.json();
        return product;
    } catch (err) {
        return {
            errro: err.message
        };
    }
};
const $483d053f6957138a$export$ac29b122ab5923bd = async (order)=>{
    try {
        const response = await axios.post('https://gks-healthcare.onrender.com/api/orders', {
            order: order
        });
        if (!response || response.statusText != 'Created') throw new Error(response.data.message);
        return response.data;
    } catch (err) {
        return {
            error: err.response ? err.response.data.message : err.message
        };
    }
} //  export const getProducts = async ({ searchKeyword = '' }) => {
 //     try {
 //       let queryString = '?';
 //       if (searchKeyword) queryString += `searchKeyword=${searchKeyword}&`;
 //       const url = `http://localhost:5000/api/products${queryString}`;
 //       const response = await fetch(url,{
 //         headers: {
 //           'Content-Type': 'application/json',
 //         },
 //       });
 //       if (!response || !response.ok) {
 //         throw new Error(response.json().message);
 //       }
 //       const product = await response.json();
 //         return product;
 //     } catch (err) {
 //       console.log(err);
 //       return { error: err.response.data.message || err.message };
 //     }
 //   };
;



const $d8d61133e6d0e31e$var$ProductScreen = {
    after_render: ()=>{
        const request = (0, $be25f1620a50bfcc$export$a5e0d554281d7ca6)();
        document.getElementById("add-button").addEventListener('click', ()=>{
            document.location.hash = `/cart/${request.id}`;
        });
    },
    render: async ()=>{
        const request = (0, $be25f1620a50bfcc$export$a5e0d554281d7ca6)();
        (0, $be25f1620a50bfcc$export$64858b67578a10bb)();
        const product = await (0, $483d053f6957138a$export$e2005c9600188ac7)(request.id);
        console.log(product);
        if (product.error) retrun`<div>product error</div>`;
        (0, $be25f1620a50bfcc$export$7d026bf51c574e0d)();
        return `
          <div class="content">
                <div class="back-to-result">
                    <a href= "/#/">back to result</a>
                </div> 
            <div class="details">
                    <div class="details-image">
                        <img src="${product.image}" alt="${product.name}" >
                    </div>
                    <div class="details-info">
                        <ul>
                            <li>
                             <h1>${product.name}</h1>
                            </li>
                            <br>
                            <li>
                                Price: <strong>${product.detail}</strong>
                            </li>
                            <br>
                            <li><strong>Description:</strong>
                                <div>
                                    ${product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
            <div class="details-action">
                <ul>
                    <li>
                        Price:$${product.price}
                    </li>
                    <li>
                        Status:
                        <div id="status">In Stock<div>
                    </li>
                    <li>
                        <button id="add-button" class="fw primary">Add to cart</button>
                    </li>
                </ul>
            </div>
        </div>
     </div>  
         `;
    }
};
var $d8d61133e6d0e31e$export$2e2bcd8739ae039 = $d8d61133e6d0e31e$var$ProductScreen;





const $dee437f23112e55a$var$addToCart = (item, forceUpdate = false)=>{
    let cartItems = (0, $272af846d2c469d8$export$7edec905158766d1)();
    const existItem = cartItems.find((x)=>x.product == item.product);
    if (existItem) {
        if (forceUpdate) cartItems = cartItems.map((x)=>x.product == existItem.product ? item : x);
    } else cartItems = [
        ...cartItems,
        item
    ];
    (0, $272af846d2c469d8$export$edec056fbbda565b)(cartItems);
    if (forceUpdate) (0, $be25f1620a50bfcc$export$b095a217686cbd0)($dee437f23112e55a$var$CartScreen);
};
const $dee437f23112e55a$var$removeFromCart = (id)=>{
    (0, $272af846d2c469d8$export$edec056fbbda565b)((0, $272af846d2c469d8$export$7edec905158766d1)().filter((x)=>x.product != id));
    if (id == (0, $be25f1620a50bfcc$export$a5e0d554281d7ca6)().id) document.location.hash = '/cart';
    else (0, $be25f1620a50bfcc$export$b095a217686cbd0)($dee437f23112e55a$var$CartScreen);
};
const $dee437f23112e55a$var$CartScreen = {
    after_render: ()=>{
        const qtySelects = document.getElementsByClassName("qty-select");
        Array.from(qtySelects).forEach((qtySelect)=>{
            qtySelect.addEventListener('change', (e)=>{
                const item = (0, $272af846d2c469d8$export$7edec905158766d1)().find((x)=>x.product == qtySelect.id);
                $dee437f23112e55a$var$addToCart({
                    ...item,
                    qty: Number(e.target.value)
                }, true);
            });
        });
        const deleteButtons = document.getElementsByClassName("delete-button");
        Array.from(deleteButtons).forEach((deleteButton)=>{
            deleteButton.addEventListener('click', ()=>{
                $dee437f23112e55a$var$removeFromCart(deleteButton.id);
            });
        });
        const checkoutbutton = document.getElementById('checkout-button');
        checkoutbutton.addEventListener('click', ()=>{
            (0, $be25f1620a50bfcc$export$5eafa337b1a2f98e)();
        });
    },
    render: async ()=>{
        const request = (0, $be25f1620a50bfcc$export$a5e0d554281d7ca6)();
        if (request.id) {
            const product = await (0, $483d053f6957138a$export$e2005c9600188ac7)(request.id);
            $dee437f23112e55a$var$addToCart({
                product: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty: 1,
                countInStock: product.countInStock
            });
        }
        const cartItems = (0, $272af846d2c469d8$export$7edec905158766d1)();
        return `
        <div class="content cart">
            <div class="cart-list">
                <ul class="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>Price</div>
                    </li>
                        ${cartItems.length == 0 ? `<div>Cart is empty.<a href="/#/"> Click here to Go for Shopping</a></div>` : cartItems.map((item)=>`
                            <li>
                                <div class="cart-image">
                                    <img src="${item.image}" alt="${item.name}">
                                </div>
                                <div class="cart-name">
                                    <div>
                                        <a href="/#/product/${item.product}">
                                            ${item.name}
                                        </a>
                                    </div>
                                    <div>
                                        Qty:<select  class="qty-select" id="${item.product}">  
                                        ${[
                ...Array(item.countInStock).keys()
            ].map((x)=>item.qty === x + 1 ? `<option selected value="${x + 1}">${x + 1}</option>` : `<option value="${x + 1}">${x + 1}</option>`)}                        
                                            </select>  
                                            <button type="button" class="delete-button" id="${item.product}">
                                                Delete
                                            </button>
                                    </div>
                                </div>
                                <div class="cart-price">
                                    $${item.price}
                                </div>
                            </li>
                            `).join('\n')}
                </ul>
            </div>
            <div class="cart-action">
                <h3>
                    Subtotal (${cartItems.reduce((a, c)=>a + c.qty, 0)} items)
                    :   
                    $${cartItems.reduce((a, c)=>a + c.price * c.qty, 0)}
                </h3>
                <button id="checkout-button" class="primary fw">
                        Proceed to checkout
                </button>
            </div>
        </div>
        `;
    }
};
var $dee437f23112e55a$export$2e2bcd8739ae039 = $dee437f23112e55a$var$CartScreen;



const $1ee2f765e1c0a989$var$ShippingScreen = {
    after_render: ()=>{
        document.getElementById('shipping-form').addEventListener('submit', async (e)=>{
            e.preventDefault();
            (0, $272af846d2c469d8$export$c9428395f9987bd8)({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                Cellphone: document.getElementById('Cellphone').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                ZIP: document.getElementById('ZIP').value,
                country: document.getElementById('country').value
            });
            document.location.hash = '/payment';
        });
    },
    render: ()=>{
        const { name: name, email: email, Cellphone: Cellphone, address: address, city: city, ZIP: ZIP, country: country } = (0, $272af846d2c469d8$export$4995c03e0851be)();
        return `
      <div class="form-container">
        <form id="shipping-form">
          <ul class="form-items">
            <li>
              <h1>Shipping</h1>
            </li>
            <li>
              <label for="name">Full Name<span class="required">*</span></label>
              <input type="text" name="name" id="name" value="${name}" required >
            </li>
            <li>
              <label for="email">Email<span class="required">*</span></label>
              <input type="text" name="email" id="email" value="${email}" required >
            </li>
            <li>
              <label for="Cellphone">Cellphone<span class="required">*</span></label>
              <input type="text" name="Cellphone" id="Cellphone" value="${Cellphone}" required >
            </li>
            <li>
              <label for="address">Shipping address<span class="required">*</span></label>
              <input type="text" name="address" id="address" value="${address}" required >
            </li>
            
            <li>
              <label for="country">Country<span class="required">*</span></label>
              <input type="text" name="country" id="country" value="${country}" required>
            </li>
            <li>
              <label for="city">City<span class="required">*</span></label>
              <input type="text" name="city" id="city" value="${city}" required>
            </li>
            <li>
              <label for="ZIP">ZIP Code<span class="required">*</span></label>
              <input type="text" name="ZIP" id="ZIP" value="${ZIP}" required>
            </li>
            <li>
                    <span class="required">*Required fields</span>
            </li>
            <li>
              <button type="submit" class="primary">Continue</button>
            </li>
          </ul>
        </form>
      </div>
      `;
    }
};
var $1ee2f765e1c0a989$export$2e2bcd8739ae039 = $1ee2f765e1c0a989$var$ShippingScreen;



const $50012eb8e508046c$var$PaymentScreen = {
    after_render: ()=>{
        document.getElementById('payment-form').addEventListener('submit', async (e)=>{
            e.preventDefault();
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            (0, $272af846d2c469d8$export$6c0402b0c6103b38)({
                paymentMethod: paymentMethod
            });
            document.location.hash = '/placeorder';
        });
    },
    render: ()=>{
        return `
      <div class="form-container">
        <form id="payment-form">
          <ul class="form-items">
            <li>
              <h1>Payment</h1>
            </li>
            <li>
                <div>
                    <input type="radio" name="payment-method" id="paypal" value="Paypal" checked>
                    <label for="paypal">Paypal</label>
                </div>
                <div>
                    <input type="radio" name="payment-method" id="stripe" value="Stripe" >
                    <label for="stripe">Stripe</label>
                </div>
                <div>
                    <input type="radio" name="payment-method" id="master-card" value="master-card" >
                    <label for="master-card">Master card</label>
                </div>
                <div>
                    <input type="radio" name="payment-method" id="american-express" value="american-express" >
                    <label for="american-express">American express</label>
                </div>
            </li>
            <li>
              <button type="submit" class="primary">Continue</button>
            </li>        
          </ul>
        </form>
      </div>
      `;
    }
};
var $50012eb8e508046c$export$2e2bcd8739ae039 = $50012eb8e508046c$var$PaymentScreen;





const $c6fb20afd2bb4c9b$var$convertCartToOrder = ()=>{
    const orderItems = (0, $272af846d2c469d8$export$7edec905158766d1)();
    if (orderItems.length == 0) document.location.hash = '/cart';
    const shipping = (0, $272af846d2c469d8$export$4995c03e0851be)();
    if (!shipping.address) document.location.hash = '/shipping';
    const payment = (0, $272af846d2c469d8$export$1d145d8987b0ab29)();
    if (!payment.paymentMethod) document.location.hash = '/payment';
    const itemsPrice = orderItems.reduce((a, c)=>a + c.price * c.qty, 0);
    const totalPrice = itemsPrice;
    return {
        orderItems: orderItems,
        shipping: shipping,
        payment: payment,
        itemsPrice: itemsPrice,
        totalPrice: totalPrice
    };
};
const $c6fb20afd2bb4c9b$var$PlaceOrderScreen = {
    after_render: async ()=>{
        document.getElementById('placeOrderButton').addEventListener('click', async ()=>{
            const order = $c6fb20afd2bb4c9b$var$convertCartToOrder();
            (0, $be25f1620a50bfcc$export$64858b67578a10bb)();
            const data = await (0, $483d053f6957138a$export$ac29b122ab5923bd)(order);
            (0, $be25f1620a50bfcc$export$7d026bf51c574e0d)();
            if (data.error) (0, $be25f1620a50bfcc$export$787f5d117f138d13)(data.error);
            else {
                (0, $272af846d2c469d8$export$29705104f0840816)();
                (0, $be25f1620a50bfcc$export$787f5d117f138d13)("your order is placed");
                document.location.hash = "/";
            }
        });
    },
    render: ()=>{
        const { orderItems: orderItems, shipping: shipping, payment: payment, itemsPrice: itemsPrice, totalPrice: totalPrice } = $c6fb20afd2bb4c9b$var$convertCartToOrder();
        return `
    <div>
        <div class="order">
            <div class="order-info">
                <div>
                    <h2>Shipping</h2>
                    <div>
                        Adress:${shipping.address}, City:${shipping.city}, ZIP:${shipping.ZIP}, Country:${shipping.country}
                    </div>
                </div>
                <div>
                    <h2>Payment</h2>
                    <div>
                        Payment Method : ${payment.paymentMethod}
                    </div>
                </div>
            <div>
                <ul class="cart-list-container">
                    <li>
                        <h2>Shipping Cart</h2>
                        <div>Price</div>
                    </li>
                    ${orderItems.map((item)=>`
                        <li>
                            <div class="cart-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                                <div class="cart-name">
                                <div>
                                    <a href="/#/product/${item.product}">${item.name}</a>
                                </div>
                                <div> Qty: ${item.qty} </div>
                            </div>
                            <div class="cart-price">$${item.price}</div>
                        </li>
                        `)}
                </ul>
            </div>
        </div>
        <div class="order-action">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li><div>Items</div><div>$${itemsPrice}</div></li>
                            <li><div>Shipping</div><div>  </div></li>
                            <li><div>Tax</div><div>  </div></li>
                            <li class="total"><div>Order Total</div><div>$${totalPrice}</div></li>
                            <li>
                            <button class="primary fw" id="placeOrderButton">
                            Place Order
                            </button>
                            </li>
                        </ul>
        </div>
    </div>
</div>
    `;
    }
};
var $c6fb20afd2bb4c9b$export$2e2bcd8739ae039 = $c6fb20afd2bb4c9b$var$PlaceOrderScreen;


const $891dbbf2da014626$var$PrivacyPolicyScreen = {
    render: ()=>{
        return `<h1 ><strong><u>PRIVACY POLICY</u></strong></h1>
                        <div>
                                <h2>Customer Agreement</h2>
                                    <ul class="box">
                                    <h3>1.Information We Collect:</h3>
                                    <li>
 
 When you visit ShopZilla or make a purchase, we may collect various types of information, including but not limited to:
 
 Personal Information: Name, address, email address, phone number, and payment details.
 Account Information: Usernames, passwords, and other account authentication information.
 Transaction Information: Details about your purchases, orders, shipping, and returns.
 Browsing Information: IP address, browser type, device type, operating system, and cookies.
 </li>
                                    <li>
                                   2.  We use the collected information for various purposes, including:

                                    Processing and fulfilling your orders and purchases.
                                    Providing customer support and responding to inquiries.
                                    Personalizing your shopping experience.
                                    Sending promotional offers, updates, and newsletters (you can opt-out anytime).
                                    Improving our services, products, and website functionality.
                                    Complying with legal obligations and preventing fraud.
                                    </li>
 <li>
 3. You have the right to access, update, and delete your personal information. You can also unsubscribe from marketing communications at any time. To exercise your rights, please contact us using the details provided in the "Contact Us" section.</li>
</li>
                                </ul>
                            
                                   
                     </div>`;
    }
};
var $891dbbf2da014626$export$2e2bcd8739ae039 = $891dbbf2da014626$var$PrivacyPolicyScreen;



const $aacb2ac5fcb10559$var$ContactUsScreen = {
    after_render: async ()=>{
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
        script.async = true;
        document.body.appendChild(script);
        const submitButton = document.getElementById('submitButton').addEventListener('click', async (e)=>{
            e.preventDefault();
            (0, $be25f1620a50bfcc$export$787f5d117f138d13)("contact form recieved");
            let email = document.querySelector("input[type='email']").value;
            let name = document.getElementById('name').value;
            let message = document.getElementById('message').value;
            let subject = document.getElementById('subject').value;
            try {
                let response = await axios.post('http://localhost:5000/api/contact', {
                    email: email,
                    name: name,
                    message: message,
                    subject: subject
                });
                if (!response || response.statusText != 'OK') throw new Error(response.data.message);
                return response.data;
            } catch (err) {
                return {
                    error: err.response ? err.response.data.message : err.message
                };
            }
        });
    },
    render: ()=>{
        return `
         <div >If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.</div>
         <div class="form-container">
        <form id="contact-form">
          <ul class="form-items">
            <li>
              <h1>Contact information</h1>
            </li>
            <li>
              <label for="name">Name<span class="required">*</span></label>
              <input type="text" name="name" id="name"  required >
            </li>
            <li>
              <label for="email">Email<span class="required">*</span></label>
              <input type="email" name="email" id="email" required >
            </li>
            <li>
              <label for="subject">Subject<span class="required">*</span></label>
              <input type="text" name="subject" id="subject"  required >
            </li>
            <li>
              <label for="message">Type your message below:<span class="required">*</span></label>
              <textarea name="message" id="message" rows="4" cols="50">
              </textarea>
              <li>
                    <span class="required">*Required fields</span>
            </li> 
            </li>
              <button type="submit" class="primary" id="submitButton">submit</button>
            </li>
                   
          </ul>
        </form>
        
      </div>
         `;
    }
};
var $aacb2ac5fcb10559$export$2e2bcd8739ae039 = $aacb2ac5fcb10559$var$ContactUsScreen;


const $8282d67a055ddbd3$var$AboutUsScreen = {
    render: ()=>{
        return `<div>
            <h2>ABOUT US</h2>
            <ul class="box">
                <li>Your RST HealthSol Team proudly presents a new high-tech project designed to successfully fulfill the requirements of even the most demanding customers. Starting in 1992, we have been working in the IT business for more than 15 years now, and throughout this time have always endeavored to meet the highest possible standards and requirements of the market.</li>
                <li>In keeping fully abreast of developments and innovations in the market, all of RST HealthSol's projects are supported by the most advanced systems available. We are skilled and experienced professionals in this field, and have set ourselves the target of becoming one of the world's leading and most reputable online providers of best products.</li>
                <li>Let us introduce you to the RST HealthSol project in more detail.</li>
                <li>We all know that the ecommerce market is extremely competitive, with innumerable online platforms competing for leadership in this particular field of e-commerce. We believe that the advantages we possess over other players on the market will allow us to assert and maintain a strong competitive edge.</li>
                <li>It is a serious but unfortunately all too common mistake to assume that an online store should handle all the checkout operations by itself. There are still a large number of merchants trying to buy SSL certificates to secure their order pages through fraudulent activities, really believing that such tactics work. This is not so; some customers are deprived of their private information during the checkout procedure and it is the merchants who are responsible and should be held accountable for that. What we have done here at RST HealthSol is to render all the responsibility for the transactions of our customers directly to the processing bank. As banking terminals and gateways are strictly secured and protected, our customers no longer suffer from hacking and other fraudulent activities that can be perpetuated with any regular online store they are used to shopping at. All private information is entered at specially secured banking domains that cannot be hacked like a simple SSL secured page. We care about the security of your information and go to great lengths to keep it strictly confidential.</li>
                <li>You may be amazed at our prices, as we succeed in keeping the level of pricing from 5 to 15% lower than official distributors of medicines. How have we managed to achieve this? When you shop around on the Internet you may get dramatically different offers for the same goods. A simple example would be Viagra or Cialis, the price of which may vary by a few cents to tens of dollars. Have you even wondered why this is so and how it happens? The answer is quite simple. The original branded Viagra produced by Pfizer can never cost cents or even 1-2 US dollars, simply because its basic value is higher and all the offers for "original" or "genuine" Viagra that are low priced mean only one thing: it is a generic copy counterfeit that cannot guarantee the same effect and safety as the original. Here at RST HealthSol, we have established direct connections with the manufacturers of goods in India, China, and The Philippines, meaning that we can ensure the lowest possible market prices from the outset. We do not rely on warehouses or local retailers to store or supply our product, as our suppliers deliver them directly to our customers, thereby avoiding any third parties. Hence, as a result of our ability to save on rent and other overhead costs (in addition to valuable time), we are able to offer a genuinely lower price. As we work directly with the manufacturers, there is no chance of you receiving counterfeit or low-quality goods at our stores. The product is always licensed and of the highest quality, no matter if you buy the genuine or a generic product. We refrain from selling if the goods have not been tested.</li>
                <li>Our objective is to combine our customers' comfort with low prices and high quality, and in fulfilling this goal, we are always glad to listen to any particular wishes and requirements that our clients may have.</li>
                <li>WE REALLY CARE.</li>
                <li>Your team.</li>
            </ul>
            <div class="contact-details" style="margin-top: 1.5rem;">
                <h3>Contact Details</h3>
                <p><strong>Contact No.:</strong> +91-6913141414</p>
                <p><strong>Email:</strong> <a href="mailto:info@rsthealthsol.com">info@rsthealthsol.com</a></p>
            </div>
            <p>
                For more information, please visit our website: <a href="https://gkshealth.com/about-2/">RST HealthSol</a>
            </p>
            <p>
                Connect with us on social media:
                <a href="https://www.instagram.com/gkshealth"><img src="../images/instagram.png" alt="Instagram" style="height: 2rem; width: 2rem; margin: 0; padding: 0;"  /></a>
                <a href="https://www.linkedin.com/company/gkshealth"><img src="../images/linkedin.png" alt="LinkedIn" style="height: 2rem; width: 2rem; margin: 0; padding: 0;" /></a>
            </p>
        </div>`;
    }
};
var $8282d67a055ddbd3$export$2e2bcd8739ae039 = $8282d67a055ddbd3$var$AboutUsScreen;


const $e3bf82bf8f2c056e$var$MoneyBackScreen = {
    render: ()=>{
        return `
         <h2>Money Back Policy</h2>
         <ul class="box">
            <li>
            Dear User,

           </li> 
            <li>ShopZilla.com is a reliable Ecommerce website, and we are fully in control of the services that we provide.</li>
            
           <li> Hence we DO guarantee the quality of products that we sell, and we DO guarantee the quality of the delivery services we use. Nevertheless, the Ecommerce business is not without risks, and we try our utmost to protect our customers and their interests using all the possible means at our disposal.</li>
            
            <li>Therefore, should you have used a trackable delivery service and received a package that does not match your order in any way, you can ask for a refund. ShopZilla.com will refund you for all unopened packages. For details of this service you will have to contact our customer service.</li>
            
            <li>Sincerely,</li>
            
            <li>Your ShopZilla.com team.</li>
        </ul>
         `;
    }
};
var $e3bf82bf8f2c056e$export$2e2bcd8739ae039 = $e3bf82bf8f2c056e$var$MoneyBackScreen;


const $3487fa116d525f5e$var$StepsScreen = {
    render: ()=>{
        return `
                    <h2><u>Steps to place an order</u> :-</h2>
                    <ul class="box">
                    <li>
                        1. Select the product you want to buy
                    </li>
                    <li>
                        2. Add the selected product to cart
                    </li>
                    <li>
                        3. Do the same for other product you want to buy.
                    </li>
                    <li>
                        4. Click on <strong>Proceed to checkout</strong> Button
                    </li>
                    <li>
                        5. Enter information regarding shipping
                    </li>
                    <li>
                        6. Click on <strong>Continue</strong> button
                    </li>
                    <li>
                        7. Select payment method And click on <strong>Continue</strong> button
                    </li>
                    <li>
                        8. Check the information you have entered is correct or not And click on  <strong>Place Order</strong> Button
                    </li>
                    <li>
                        9. Once your order is placed we will contact you for payment.
                    </li>
                    </ul>

                `;
    }
};
var $3487fa116d525f5e$export$2e2bcd8739ae039 = $3487fa116d525f5e$var$StepsScreen;


const $e53d1fd98bd4f108$var$FaqScreen = {
    render: ()=>{
        return `
                    <h2><u>FAQ</u> :-</h2>
                    
                    <ul class="box">
                        <li>
<strong>Q. I had problems at the checkout stage, what should I do?</strong>
</li>
<li>
Please contact our live chat support using the icon at the top of the page, our operators would help you to process the purchase manually.
</li>
<li>
<strong>Q. What happens after I place an order?</strong>
</li>
<li>
A. Once your order has been approved,we will contact you for payment then it will be forwarded to the warehouse for fulfillment and shipment, shipping is usually made the same day. We will notify you by e-mail once your order has been processed.
</li>
<li>
<strong>Q. How do I track my order?</strong>
</li>
<li>
A. At this time, our packages are sent through Regular and Express Mail. Regular Mail service does not support tracking service and provides only delivery confirmation. If you use Express mail you get a tracking number and you can control the process of delivery if you want to.
</li>
<li>
<strong>Q. How do I cancel my order?</strong>
</li>
<li>
A. If you wish to cancel your order, you must let us know before 11am EST the following day. We will not be able to cancel any orders after this time. For all cancellations, please contact us.
</li>
                        </ul>

                `;
    }
};
var $e53d1fd98bd4f108$export$2e2bcd8739ae039 = $e53d1fd98bd4f108$var$FaqScreen;


const $4fa36e821943b400$var$routes = {
    "/": (0, $8cc671e87cb2180b$export$2e2bcd8739ae039),
    "/product/:id": (0, $d8d61133e6d0e31e$export$2e2bcd8739ae039),
    "/cart/:id": (0, $dee437f23112e55a$export$2e2bcd8739ae039),
    "/cart": (0, $dee437f23112e55a$export$2e2bcd8739ae039),
    "/shipping": (0, $1ee2f765e1c0a989$export$2e2bcd8739ae039),
    '/payment': (0, $50012eb8e508046c$export$2e2bcd8739ae039),
    '/placeorder': (0, $c6fb20afd2bb4c9b$export$2e2bcd8739ae039),
    '/privacy-policy': (0, $891dbbf2da014626$export$2e2bcd8739ae039),
    "/contact-us": (0, $aacb2ac5fcb10559$export$2e2bcd8739ae039),
    "/about-us": (0, $8282d67a055ddbd3$export$2e2bcd8739ae039),
    "/moneyback": (0, $e3bf82bf8f2c056e$export$2e2bcd8739ae039),
    "/steps": (0, $3487fa116d525f5e$export$2e2bcd8739ae039),
    "/faq": (0, $e53d1fd98bd4f108$export$2e2bcd8739ae039)
};
const $4fa36e821943b400$var$router = async ()=>{
    (0, $be25f1620a50bfcc$export$64858b67578a10bb)();
    const request = (0, $be25f1620a50bfcc$export$a5e0d554281d7ca6)();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : '') + (request.action ? `/${request.action}` : '');
    const screen = $4fa36e821943b400$var$routes[parseUrl] ? $4fa36e821943b400$var$routes[parseUrl] : (0, $720d04c988e6cd11$export$2e2bcd8739ae039);
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
    (0, $be25f1620a50bfcc$export$7d026bf51c574e0d)();
};
window.addEventListener('load', $4fa36e821943b400$var$router);
window.addEventListener('hashchange', $4fa36e821943b400$var$router);


//# sourceMappingURL=index.js.map
