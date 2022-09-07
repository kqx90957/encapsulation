function animate (dom, obj, fn) {
  clearInterval(dom.timer)
  var flag=false
  dom.timer = setInterval(function () {
    for (var k in obj) {
      var realheight = parseInt(getStyle(dom, k))||0;
      var steps = (obj[k] - realheight) /10;

      steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
      if (realheight === obj[k]) {
        clearInterval(dom.timer);
        flag=true};
      var move = realheight + steps;
      dom.style[k] = move + 'px';
    }
    
  if(flag){  fn && fn();
}

        },25)
}


//兼容

function getStyle (el,key) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(el)[key];
  }
  else if (el.CurrentStyle)
  {
    return el.CurrentStyle[key];
    }
  else {
    return el.style[k];
}

}