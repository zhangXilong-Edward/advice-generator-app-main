const apiUrl = 'https://api.adviceslip.com/advice';

const dice = document.querySelector('#dice'); 
const contentDiv = document.querySelector('#content');
const adviceCount = document.querySelector('#advice-count')

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log( data.slip.advice);
    init(data); 
    clickDice(); 

  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


function init(data) {
    contentDiv.innerHTML=`"${data.slip.advice}"`;
    adviceCount.innerText=data.slip.id
}

function clickDice() {
    dice.addEventListener('click', ()=>{
        window.location.reload();
    })
}
