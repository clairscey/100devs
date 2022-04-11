//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// let userDrink = document.querySelector('input').value

// console.log(userDrink)

document.querySelector('button').addEventListener('click', makeDrink)

function makeDrink() {
    let userDrink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userDrink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.drinks[0].strDrink;
      document.querySelector('img').src = data.drinks[0].strDrinkThumb;
      document.querySelector('h3').innerText = data.drinks[0].strInstructions;
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		'X-RapidAPI-Key': '47ed5ebf5bmsh9ae2622df944a6fp1a86e4jsnc01b2c407bbb'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

