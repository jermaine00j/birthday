(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
  openB = $('open'),
  closeB = $('close'),
  timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `
    .....
Dear Mom!
  Another year older? 
Well, You are the person 
that I can always count 
on for support, good advice,
 or a shoulder to lean on. 
 I love you so much, Mom
 ..........
                Happy birthday!
              
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);