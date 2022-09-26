async function getRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 100);
   
    let promise = new Promise((resolve, reject) =>
        setTimeout(() => resolve(randomNumber, 500)
		))
        
    let result = await promise; 
	 console.log(result);
          
 };
 getRandomNumber();

 const formEl = document.querySelector("form");
 const inputEl = document.getElementById("user-name");
 const returnGreetingEl = document.getElementById("return-greeting");
 
 formEl.addEventListener("submit", (event) => {
     event.preventDefault();
     console.log("You've submitted the Form!");
     console.log(inputEl.value);
 	
     const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://geocode.xyz/${inputEl.value}?json=1`, requestOptions)
        .then(response => response.json())
        .then(result => {
        console.log(result.latt, result.longt);
        })
        .catch(error => console.log('error', error));
    });