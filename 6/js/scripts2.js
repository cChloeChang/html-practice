// Inspired by: https://dribbble.com/shots/3545421-017-Email-receipt

function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "將將",
    desc: "我好可愛嗷嗷"
  },
  {
    title: "增娟應該很愛我",
    desc: "祝我考一百分 二技要上"
  },
  {
    title: "hello world",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit inventore."
  },
  {
    title: "hello world",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit inventore. <br>1. Lorem Ipsum <br>2. Lorem Ipsum <br>3. Lorem Ipsum <br>4. Lorem Ipsum"
  } 
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}