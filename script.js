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