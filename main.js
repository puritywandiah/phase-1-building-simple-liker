// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll(".like-glyph")
heart.forEach( (element) => {
  
  element.addEventListener("click", () => {

    mimicServerCall()
    .then(() => {

      if(element.innerHTML === FULL_HEART) {
        element.innerHTML = EMPTY_HEART
        element.classList.remove("activated-heart")
      }else {
        element.innerHTML = FULL_HEART
        element.classList = "activated-heart"
      }

    })
  
    .catch(error => {
      const message = document.querySelector("#modal")
      message.classList.remove("hidden")
  
      setTimeout( () => {
        message.classList = "hidden"
      }, 3000)
    })
  })

})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
