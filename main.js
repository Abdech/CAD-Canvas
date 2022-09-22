const product = document.querySelectorAll('.product')
const products = document.querySelector('.products')
const buyProduct = document.querySelectorAll('.buy-product')
const checkout = document.querySelector('.checkout')
const amountInput = document.querySelector('#amount')


buyProduct.forEach(product => {
 product.addEventListener('click', e => {
   const amount = e.target.parentElement.previousElementSibling.lastElementChild.innerText.slice(1,)

    // Change the display of the products and checkout class to none and block simulteously
   products.style.display = 'none'
  let style = checkout.style.display = 'block'
   if (style == "block") {
    amountInput.value = amount
  }
})
}) 

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);
   function payWithPaystack(e) {
    e.preventDefault();
    
  let handler = PaystackPop.setup({
    key: 'pk_test_a780c9434d89a5679ddb7d740fc9fed3ec8bfca9', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: amount.value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}