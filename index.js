var cart = [];

var mush = 0;
var pep = 0;



var toppings2 = {
    mushrooms: 0,
    pepperoni: 0,
    bacon: 0,
    olives: 0
}
function creatPiz(){
    cart.push(new pizza(toppings2));
    sessionStorage.setItem('shop', JSON.stringify(cart))
    reset();
}



$("#add-to-cart").click(function() {
   
    cart.push(new pizza(toppings2));
    sessionStorage.setItem('shop', JSON.stringify(cart))
    reset();
    
})

reset = () => {

    $("#mushroom").css("opacity", 0)
    $("#pepperoni").css("opacity", 0)
    $("#Bacon").css("opacity", 0)
    $("#Olives").css("opacity", 0)
   toppings2 = {
       mushrooms: 0,
       pepperoni: 0,
       bacon: 0,
       olives: 0
   }
}

$(".btn").click(function() {

    if(this.textContent == "Mushrooms"){
        toppings2.mushrooms++;
        console.log(toppings2.mushrooms)
        $("#mushroom").css("opacity", 1)
    }
    else if(this.textContent == "Pepperoni"){
        toppings2.pepperoni++;
        console.log(toppings2.pepperoni)
        $("#pepperoni").css("opacity", 1)
    }
    else if(this.textContent == "Bacon"){
        toppings2.bacon++;
        console.log(toppings2.bacon)
        $("#Bacon").css("opacity", 1)
    }
    else if(this.textContent == "Olives"){
        toppings2.olives++;
        console.log(toppings2.olives)
        $("#Olives").css("opacity", 1)
    }



})


$("#checkout").click(function(){
    var total = 0;
    for(order of cart){
        $("#receipt").append(`<li class="list-group-item">
        ${order.toppings.pepperoni}xPepperoni
        </li>`)
        $("#receipt").append(`<li class="list-group-item">
        ${order.toppings.mushrooms}xMushrooms
        </li>`)
        $("#receipt").append(`<li class="list-group-item">
        ${order.toppings.bacon}xBacon
        </li>`)
        $("#receipt").append(`<li class="list-group-item">
        ${order.toppings.olives}xOlives
        </li>`)


        total += order.calcCost();
    }

    // $("#receipt").append(`<li class="list-group-item">
    // Total: $ ${total}
    // </li>`);
})

$("#reset-button").click(function(){
    sessionStorage.removeItem('shop')
})


$(document).ready(() => {

if($('#cart').length){
    console.log("hello")
    var data = JSON.parse(sessionStorage.getItem('shop'));
    var orderNo = 1;
    let grandTotal = 0.00
    
    for(order of data){

        // $("#cart").append(`<p>Order #${orderNo++}</p>`)
        // $("#cart").append(`<p>${order.toppings.pepperoni} pepperoni</p>`)
        // $("#cart").append(`<p>${order.toppings.mushrooms} mushrooms</p>`)
        // $("#cart").append(`<p>${order.toppings.bacon} bacon</p>`)
        // $("#cart").append(`<p>${order.toppings.olives} olives</p>`)
        grandTotal += (new pizza(order.toppings)).calcCost();
        $("#cart").append(`
        <div class="card receipt" style="width: 18rem;">
            <div class="card-header">
                    Pizza #${orderNo++}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${order.toppings.pepperoni} pepperoni</li>
            <li class="list-group-item">${order.toppings.mushrooms} mushrooms</li>
            <li class="list-group-item">${order.toppings.bacon} bacon</li>
            <li class="list-group-item">${order.toppings.olives} olives</li>
            <li class="list-group-item">Subtotal: $${(new pizza(order.toppings)).calcCost()} </li>
            
            </ul>
      </div>`)

        
    }

    $("#cart").append(`
    <div class="card receipt" style="width: 18rem;">
    <div class="card-header">
           Total: $${grandTotal}
    </div>`)
}

}) 


class pizza{
   
    constructor(toppings){
        this.toppings = toppings;
    }
    
    // incrementPep(){
    //     pepperoni++;
    // }
    // incrementMush(){
    //     mushrooms++;
    // }

    calcCost(){
            return 9.99+(this.toppings.mushrooms*0.25)+(this.toppings.pepperoni*0.75)+(this.toppings.bacon*1.00)+(this.toppings.olives*0.25)
        
    }
}

