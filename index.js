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
}



$("#create-pizza").click(function() {
    cart.push(new pizza(toppings2));
    reset();
    
})

reset = () => {
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
        var price = 7;
        
    }
}