const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


document.getElementById('moreInfo').addEventListener('click', function(event) {
  event.preventDefault();

  const userConfirmed = confirm("You are being redirected to another website about anime and animation. Click OK to proceed.");

  if (userConfirmed) {
      window.location.href = 'https://professional3dservices.com/blog/anime-vs-animation.html';
  }
});


function scrollToTop() {
  window.scrollTo(0, 0);
}