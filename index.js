var cart = [];

var mush = 0;
var pep = 0;






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
    for(order of cart){
        $("#recipt").append(`<p class='recipt'>${order.pepperoni}</p>`)
        $("#recipt").append(`<p class='recipt'>${order.mushrooms}</p>`)
        
    }
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
        return 7 + (this.toppings.pepperoni*0.7) + (this.toppings.mushrooms * 0.5);
    }
}