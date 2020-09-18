function main(){
  displayToyForm();
  fetchToys();
  addNewToy(); 
  addLike();
}



function displayToyForm(){
let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}

const toyCollectionDiv = document.querySelector('#toy-collection') 

function fetchToys(){ 
  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {
      toys.forEach(function(toy){
        const toyName = toy.name
        const toyImageUrl = toy.image
        const toyLikes = toy.likes
        toyCollectionDiv.innerHTML += `
        <div class="card">
          <h2>${toy.name}</h2>
          <img src=${toy.image} class="toy-avatar" />
          <p>${toy.likes} Likes </p>
          <button class="like-btn">Like <3</button>
        </div>`
        
      })
    })
}



function addNewToy(){
  const newToyForm = document.querySelector('form')
  newToyForm.addEventListener('submit', function(event){
    event.preventDefault()
    const newToyName = event.target[0].value
    const newToyURL = event.target[1].value
    const newToyObject = {name: newToyName, image: newToyURL, likes:0}
      const reqObj = {
        method: 'POST',  
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
          },
        body: JSON.stringify(newToyObject)
      }
    if (newToyName != "" && newToyURL != ""){
    fetch('http://localhost:3000/toys', reqObj)
    .then(response => response.json())
    .then(newToy => {
      toyCollectionDiv.innerHTML += `
          <div class="card">
            <h2>${newToy.name}</h2>
            <img src=${newToy.image} class="toy-avatar" />
            <p>${newToy.likes} Likes </p>
            <button class="like-btn">Like <3</button>
          </div>`
      })
    }
    //NEED TO RESET THE FORM
  })
}



function addLike(){
  const likeBtns = document.getElementsByClassName("like-btn")
  const likeBtnsArray = Array.from(likeBtns)

  likeBtnsArray.forEach(function(likeBtn){ 
    likeBtn.addEventListener('click', function(event){
      event
    })
  })
}

main()

//need to find the button element
//add event listener to the button element that will
  //type of event is click
  //function will
    //increase the likes by 1
      //create request object
      //send a fetch request that incorporates a request object and function        
        //function will perform json tasks and 
          //update on the back end 
            //change the like number to the new number
          //update on the front end 
            //find the like field 
            //update the number in the like field with the new number



// PATCH http://localhost:3000/toys/:id
// headers: 
// {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// }
 
// body: JSON.stringify({
//   "likes": <new number>
// })

