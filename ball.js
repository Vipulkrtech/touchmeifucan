var ball=document.getElementById('box');
ball.addEventListener('mouseover',function(){
    console.log('catch me')
    ball.style.left=(Math.random()*1000)+'px';
    ball.style.top=(Math.random()*500)+ 'px';
})