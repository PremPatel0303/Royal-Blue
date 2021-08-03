var cart = [];

var mush = 0;
var pep = 0;


function creatPiz(){
    cart.push(new pizza(mush, pep));
}



$("#create-pizza").click(function() {
    cart.push(new pizza(mush, pep));
    reset();
    
})

reset = () => {
    mush = 0;
    pep = 0;
}

$(".btn").click(function() {

    if(this.textContent == "Mushrooms"){
        mush++;
        console.log(mush)
        $("#mushroom").css("opacity", 1)
    }
    else if(this.textContent == "Pepperoni"){
        pep++;
        console.log(pep)
        $("#pepperoni").css("opacity", 1)
    }



})


$("#checkout").click(function(){
    var total = 0;
    for(order of cart){
        $("#receipt").append(`<li class="list-group-item">
        ${order.pepperoni}xPepperoni
      </li>`)
        $("#receipt").append(`<li class="list-group-item">
        ${order.mushrooms}xMushrooms
        </li>`)
        total += order.calcCost();
    }

    $("#receipt").append(`<li class="list-group-item">
    Total: $ ${total}
    </li>`);
})


class pizza{
   
    constructor(pepperoni, mushrooms){
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
    }
    
    incrementPep(){
        pepperoni++;
    }
    incrementMush(){
        mushrooms++;
    }

    calcCost(){
        let temp =  7 + (this.pepperoni*0.7) + (this.mushrooms * 0.5);
        return temp;
    }
}