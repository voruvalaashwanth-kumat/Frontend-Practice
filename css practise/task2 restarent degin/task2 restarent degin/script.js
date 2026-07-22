// View Menu Button

let cartCount = 0;
let cartItems = [];
let totalBill = 0;
document.getElementById("menuBtn").addEventListener("click", function() {

    document.getElementById("vegmenu").scrollIntoView({
        behavior: "smooth"
    });

});
// Book Table Button
document.getElementById("bookBtn").addEventListener("click", function() {

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

});
// Booking Form Validation
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let guests = document.getElementById("guests").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    
    if(name == "") {
        alert("Please Enter Your Name");
        return;
    }
if(!isNaN(name)){
    alert("Name Cannot Contain Only Numbers");
    return;
}


    if(email == "") {
        alert("Please Enter Your Email");
        return;
    }
      if(!email.includes("@") || !email.includes(".")){
    alert("Please Enter a Valid Email Address");
    return;
}

    if(phone == "") {
        alert("Please Enter Your Phone Number");
        return;
    }
     
if(phone.length != 10){
    alert("Phone Number Must Contain 10 Digits");
    return;
}

if(isNaN(phone)){
    alert("Phone Number Must Contain Only Numbers");
    return;
}

    if(guests == "") {
        alert("Please Enter Number of Guests");
        return;
    }
if(guests <= 0){
    alert("Guests Must Be Greater Than 0");
    return;
}
      let today = new Date().toISOString().split("T")[0];

       if(date == ""){
      alert("Please Select Booking Date");
       return;
}
if(time == ""){
    alert("Please Select Booking Time");
    return;
}

if(date < today){
    alert("Please Select Today's Date or Future Date");
    return;
}
if(date == today){

    let currentTime = new Date();

    let hours = String(currentTime.getHours()).padStart(2,'0');
    let minutes = String(currentTime.getMinutes()).padStart(2,'0');

    let nowTime = hours + ":" + minutes;

    if(time < nowTime){
        alert("Please Select Current Time or Future Time");
        return;
    }

}

    alert("🎉 Table Booked Successfully!");

});
function orderFood(foodName, price){

    cartCount++;

    cartItems.push(foodName + " - ₹" + price);

    totalBill = totalBill + price;

    document.getElementById("cartCount").innerHTML = cartCount;

    alert(foodName + " Added To Cart Successfully!");

}

function showCart(){

    if(cartItems.length == 0){

        alert("🛒 Your Cart is Empty!");

        return;

    }

    let message = "🛒 YOUR CART\n\n";

    for(let i = 0; i < cartItems.length; i++){

        message += (i + 1) + ". " + cartItems[i] + "\n";

    }

    message += "\n---------------------------";
    message += "\nTotal Items : " + cartCount;
    message += "\nTotal Bill : ₹" + totalBill;
    message += "\n---------------------------";
    message += "\n😊 Thank You For Ordering!";

    message += "\n\nClick OK Then Remove Item If Needed.";

alert(message);

removeItem();

}
function removeItem(){

    if(cartItems.length == 0){

        alert("Cart is Empty!");

        return;

    }

    let itemNumber = prompt("Enter Item Number To Remove");

    itemNumber = parseInt(itemNumber);

    if(isNaN(itemNumber) || itemNumber < 1 || itemNumber > cartItems.length){

        alert("Invalid Item Number!");

        return;

    }

    let removedItem = cartItems[itemNumber - 1];

    let price = parseInt(removedItem.split("₹")[1]);

    totalBill = totalBill - price;

    cartItems.splice(itemNumber - 1, 1);

    cartCount--;

    document.getElementById("cartCount").innerHTML = cartCount;

    alert(removedItem + " Removed Successfully!");

}
function checkout(){

    if(cartItems.length == 0){

        alert("🛒 Your Cart is Empty!");

        return;

    }

    let choice = confirm("Proceed To Checkout?\n\nTotal Bill : ₹" + totalBill);

    if(choice){

        alert("🎉 Order Placed Successfully!\n\nThank You For Ordering!");

        cartItems = [];

        cartCount = 0;

        totalBill = 0;

        document.getElementById("cartCount").innerHTML = cartCount;

    }

}
function searchFood(){

    let input = document.getElementById("searchFood").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    for(let i = 0; i < cards.length; i++){

        let foodName = cards[i].getAttribute("data-name");

        if(foodName.includes(input)){

            cards[i].style.display = "block";

        }
        else{

            cards[i].style.display = "none";

        }

    }

}
function rateFood(star, rating){

    let card = star.parentElement.parentElement;

    let stars = card.querySelectorAll(".rating span");

    let ratingText = card.querySelector(".ratingText");

    for(let i = 0; i < stars.length; i++){

        if(i < rating){

            stars[i].innerHTML = "⭐";

        }
        else{

            stars[i].innerHTML = "☆";

        }

    }

    ratingText.innerHTML = "⭐ " + rating + " / 5";

}
// Image Popup

let galleryImages = document.querySelectorAll(".gallery-container img");

let imagePopup = document.getElementById("imagePopup");

let popupImage = document.getElementById("popupImage");

let closePopup = document.getElementById("closePopup");

galleryImages.forEach(function(image){

    image.addEventListener("click", function(){

        imagePopup.style.display = "flex";

        popupImage.src = image.src;

    });

});

closePopup.addEventListener("click", function(){

    imagePopup.style.display = "none";

});

imagePopup.addEventListener("click", function(event){

    if(event.target == imagePopup){

        imagePopup.style.display = "none";

    }

});