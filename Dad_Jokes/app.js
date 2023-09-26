const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById('joke');

const apiKey = 'AN1tp6GcdJUi/wGLIOXjXQ==lgbRZcrKbhbtTAPd';
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke(){
    jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'FETCHING...';

    const response = await fetch(apiURL, options);
    const data = await response.json();
    
    jokeEl.innerHTML = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = 'TELL ME A JOKE';
}


btnEl.addEventListener("click", getJoke);








































































