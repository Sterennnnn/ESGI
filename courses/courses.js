let basket = [];

// function test(button){
//     console.log(button.id)
// }


document.getElementById("banane").addEventListener("click", function(){
    basket.push("Banane");
    updateShoppingList();
});

document.getElementById("pomme").addEventListener("click", function(){
    basket.push("Pomme");
    updateShoppingList();
});

document.getElementById("cerise").addEventListener("click", function(){
    basket.push("Cerise");
    updateShoppingList();
});

document.getElementById("orange").addEventListener("click", function(){
    basket.push("Orange");
    updateShoppingList();
});

document.getElementById("melon").addEventListener("click", function(){
    basket.push("melon");
    updateShoppingList();
});

document.getElementById("pastèque").addEventListener("click", function(){
    basket.push("pastèque");
    updateShoppingList();
});

document.getElementById("kiwi").addEventListener("click", function(){
    basket.push("kiwi");
    updateShoppingList();
});

document.getElementById("framboise").addEventListener("click", function(){
    basket.push("framboise");
    updateShoppingList();
});

document.getElementById("poire").addEventListener("click", function(){
    basket.push("poire");
    updateShoppingList();
});


function updateShoppingList() {
    const listeFinale = document.getElementById("liste");
    listeFinale.textContent = basket.join(", ");
}

// let buttons = document.querySelectorAll("button");
// buttons.forEach(function (button){
//     console.log(button)
//     button.addEventListener("click", function() {
//         test(button)
//     })
// })




