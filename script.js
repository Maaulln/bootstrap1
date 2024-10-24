// nav-color
const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY > 1){
    navbar.classList.replace('bg-transparent', 'nav-color');
  } else if (window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent');
  }
})

// nav-active
const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navLinks.forEach(nav => nav.classList.remove('active'));          
          this.classList.add('active');
        });
      });
      console.clear();

  // text-animation
  const text = "Maulana Chandra Irawan";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  window.onload = function() {
    setTimeout(typeWriter, 500);
  };

  // form
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  fetch('http://localhost:3000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      toEmail: 'oyisa156@gmail.com',
      subject: `New message from ${name}`,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});