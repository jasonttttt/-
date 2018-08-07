
(function() {
  var designWidth = 768;
  var rem2px      = 100;  // 每 1rem 代表设计稿上的 100px
  var html        = document.documentElement;

  function setBaseUnit() {
    html.style.fontSize = html.clientWidth / designWidth * rem2px + 'px';
  }

  setBaseUnit();
  window.onresize = setBaseUnit;
}())

