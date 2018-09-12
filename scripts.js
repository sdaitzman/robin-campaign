function randomInterval(min,max) { return Math.floor(Math.random()*(max-min+1)+min) }
var img = document.querySelector('#meme')
img.src = '/img/' + randomInterval(1,8) + '.jpg'
