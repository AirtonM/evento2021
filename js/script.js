(function() {
    var info = document.getElementById('info-screen');
    var main = document.getElementById('info-main');
    var realizadores = document.getElementById('info-realizadores');
    var left = document.querySelector('.arrow-left');
    var right = document.querySelector('.arrow-right');
    var bullets = document.querySelectorAll('.info-bullet');
    var info_button = document.getElementById('info-button');
  
    info_button.addEventListener('click', function() {
      info.classList.toggle('active');
      this.classList.toggle('active');
    });
  
    left.addEventListener('click', function() {
      realizadores.classList.remove('active');
      main.classList.add('active');
  
      this.classList.remove('active');
      right.classList.add('active');
  
      bullets[1].classList.remove('active');
      bullets[0].classList.add('active');
    });
  
    right.addEventListener('click', function() {
      main.classList.remove('active');
      realizadores.classList.add('active');
  
      this.classList.remove('active');
      left.classList.add('active');
  
      bullets[0].classList.remove('active');
      bullets[1].classList.add('active');
    });
  })();