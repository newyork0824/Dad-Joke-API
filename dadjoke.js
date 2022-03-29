function renderDadJoke(){
    fetch("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes")
    .then(responce => responce.json())
    .then(data => 
         document.querySelector(".dad-joke-body").innerHTML = 
           `
            <h2> Setup: ${data.setup} </h2>
            <h2> PunchLine: ${data.punchline} </h2
           `
           ) 
    }
    
    document.getElementById("dad-joke-btn").addEventListener("click",renderDadJoke)
    
    
         
         
         
         