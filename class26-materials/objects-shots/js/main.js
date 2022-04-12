//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// let userDrink = document.querySelector('input').value

// console.log(userDrink)

document.querySelector('button').addEventListener('click', makeDrink)
document.querySelector("#drinkSearch").addEventListener('keyup', e => {
  if(e.keyCode === 13){
    makeDrink();
  }
});

function makeDrink() {
    let userDrink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userDrink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('#0').innerHTML = data.drinks[0].strDrink;
      document.querySelector('#0 > img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('#0 > h3').innerText = data.drinks[0].strInstructions;
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function drawMenu(arr) {
  const drinksMenu = document.querySelector('#drinksMenu');
  arr.forEach( (e, i) => drinksMenu.
}
