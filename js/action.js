// inititalization
let newsBtn = document.querySelectorAll('#news button');
let newsTabs = document.querySelectorAll('.flex-container-news');
let btnLength = newsBtn.length;

function showContent(page) {
  for (let index = 0; index < btnLength; index++) {
    newsBtn[index].classList.remove('active');
    newsTabs[index].classList.add('hide-news');
    
  }
  document.querySelector(`#news${page}`).classList.remove('hide-news');
  document.querySelector(`#newsBtn${page}`).classList.add('active');
}

for (let index = 0; index < btnLength; index++) {
  newsBtn[index].addEventListener('click',function(){
    showContent(index);
  });
}