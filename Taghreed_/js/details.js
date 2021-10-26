// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))
// console.log(chicken);
// //use jquery to show details on items.html page (from variable chicken)
// //$(...).text()


// const waffles = JSON.parse(window.localStorage.getItem("recipe1"))

// const Biryanii = JSON.parse(window.localStorage.getItem("recipe1"))


// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))

// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))

// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))

// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))

// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))

// const chicken = JSON.parse(window.localStorage.getItem("recipe1"))



$(document).ready(function(){

    let recipe=JSON.parse(localStorage.getItem('recipe1'));
    // console.log(name);

    // let recipe=getRecipe(name);
    console.log(recipe);
    // $('card-title').text(name);
    $('.card-title').text(recipe.name);
    $('#items-ingredients').text(recipe.ingredients);
    $('#items-steps').text(recipe.steps);
    $('.img-fluid').attr('src',recipe.images);
    $('#items-ingredients').html(($('#items-ingredients').text()).split("\n").join("<br>"))
    $('#items-steps').html(($('#items-steps').text()).split("\n").join("<br>"))

    })
    let counter = 1;
$('#comment').click(function () {
    let text = $('#textarea').val();
    $('#userComment').append(`<b>Comment ${counter}</b><p>${text}</p>`);
    counter++;
});

// function getRecipe(recipeName){
//     console.log(recipeName)
//     const result = recipe.find(({
//         name
//     })=> name === recipeName);
//     return result;

// }
