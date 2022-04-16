//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h2').innerText = `${data.name}`;
        document.querySelector('h3').innerText = `${data.classes[0].name}`;
        data.subclasses.forEach( obj => {
            const li = document.createElement('li')
            //add info to li (textContent)
            li.textContent = obj.name;
            //add li to ul (appendChild)
            document.querySelector('ul').appendChild(li)
        })
        // for(let i = 0; i < data.subclasses.length; i++){
        // document.querySelector('h4').innerText += ` ${data.subclasses[i].name},`;
        // }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//create li (createElement)
data.subclasses.forEach( obj => {
    const li = document.createElement('li')
    //add info to li (textContent)
    li.textContent = obj.name;
    //add li to ul (appendChild)
    document.querySelector('ul').appendChild(li)
})