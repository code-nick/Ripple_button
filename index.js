const  btn = document.querySelector('a');
btn.onmousemove = function(e){
    const X = e.pageX - btn.offsetLeft;
    const Y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--X', X + 'px');
    btn.style.setProperty('--Y', Y + 'px');
}