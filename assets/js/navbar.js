window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('nav').style.height = '80px';
    document.getElementById('nav').style.background = 'rgba(14, 14, 14, .8)';
  } else {
    document.getElementById('nav').style.height = '110px';
    document.getElementById('nav').style.background = 'rgba(14, 14, 14, .5)';
  }
}
