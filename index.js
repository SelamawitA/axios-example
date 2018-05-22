/* Code goes here */


  axios.get(URL)
  //.then handles success of call to API
    .then((response) => {
      console.log('inside the .then')
      response.data.forEach((pet) =>{
        petList.append(`<li>${pet.name}</li>`);
      });
      reportStatus('Pets Loaded!');
    })
    //handles an error from api
    .catch((error) =>{
      console.log(error);
      reportStatus(`Error: ${error.message}`)
    })
    // this line will execute first becuase the axios method is ascychronus in dealing with API because it takes more time to go to the end point wake up the DB and pull the content up. In this time, javascript will continue to run.
    //what would happen if the rest of the code depended on the output of the API? How to stall javascript from running?
    console.log('This is after .get')
}

const loadPets = () =>{
  const petList = $(`#location-list`);
  petList.empty();
  reportStatus('Loading locations! Please Wait.....')
  //get the thing
  axios.get(URL)
  //.then handles success of call to API
    .then((response) => {
      console.log('inside the .then')
      response.data.forEach((pet) =>{
        petList.append(`<li>${pet.name}</li>`);
      });
      reportStatus('Pets Loaded!');
    })
    //handles an error from api
    .catch((error) =>{
      console.log(error);
      reportStatus(`Error: ${error.message}`)
    })
    // this line will execute first becuase the axios method is ascychronus in dealing with API because it takes more time to go to the end point wake up the DB and pull the content up. In this time, javascript will continue to run.
    //what would happen if the rest of the code depended on the output of the API? How to stall javascript from running?
    console.log('This is after .get')
}


$(document).ready(() => {
  $(`#load`).click(loadLocation);
  $('#pop-up').on("click",function(){
      let userInput = prompt("Please enter a place","Seattle")
      if (userInput != null){
        prompt(`The location of ${userInput}`)
      }
    })
});
