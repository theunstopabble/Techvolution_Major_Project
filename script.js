const form = document.getElementById('registrationForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (name === '') {
    alert('Please enter your name');
    return;
  }

  if (email === '') {
    alert('Please enter your email');
    return;
  }

  if (password === '') {
    alert('Please enter your password');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Form data is valid, submit it to the server
  form.submit();
});




document.addEventListener('DOMContentLoaded', function () {
    // Dropdown menu (mobile)
    var dropdown = document.querySelectorAll('.sidenav');
    M.Sidenav.init(dropdown);
  
    // Carousel
    var carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel);
  
    // Modal
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
  
    // Form validation
    var form = document.querySelectorAll('.validate');
    M.FormSelect.init(form);
  
    // Smooth scrolling
    var scroll = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < scroll.length; i++) {
      scroll[i].addEventListener('click', function (e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var targetPosition = document.querySelector(target).offsetTop;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    }
  });