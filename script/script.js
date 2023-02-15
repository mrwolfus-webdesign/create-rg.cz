/* ==============nadpis animation============= */
var typed = new Typed('.typing', {
    strings:["střih.", "úpravu vousů.", "kompletní péči.", "tetování."],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
  });

/* =========== show takemeup button ============= */

myID = document.getElementById("takemeup");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.className = "takemeup show"
  } else {
    myID.className = "takemeup hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

/* ============ show mobile menu navbar ============= */

const menuHamburger = document.querySelector("#menubaricon")
const navbarMobile  = document.querySelector(".mobilemenu")
const closeNavbarMobile = document.querySelector("#closebutton")
const navlinkMobile1 = document.querySelector(".mobilelink1")
const navlinkMobile2 = document.querySelector(".mobilelink2")
const navlinkMobile3 = document.querySelector(".mobilelink3")
const navlinkMobile4 = document.querySelector(".mobilelink4")

menuHamburger.addEventListener('click', ()=>{
    navbarMobile.classList.toggle('showm')
})

closeNavbarMobile.addEventListener('click', ()=>{
    navbarMobile.classList.remove('showm')
})

navlinkMobile1.addEventListener('click', ()=>{
    navbarMobile.classList.remove('showm')
})
navlinkMobile2.addEventListener('click', ()=>{
    navbarMobile.classList.remove('showm')
})
navlinkMobile3.addEventListener('click', ()=>{
    navbarMobile.classList.remove('showm')
})
navlinkMobile4.addEventListener('click', ()=>{
    navbarMobile.classList.remove('showm')
})

/* =============smooth scroll effect ================== */

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
    var hash = this.hash;
  
    $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
      }
    });
});

/* ================ hover columns =========== */

$(function() {
    $('.column1').hover(function() {
      $('.popis1').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis1').css('color', '');
    });
  });

$(function() {
    $('.column2').hover(function() {
      $('.popis2').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis2').css('color', '');
    });
  });

$(function() {
    $('.column3').hover(function() {
      $('.popis3').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis3').css('color', '');
    });
  });
$(function() {
    $('.column4').hover(function() {
      $('.popis4').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis4').css('color', '');
    });
  });

$(function() {
    $('.column5').hover(function() {
      $('.popis5').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis5').css('color', '');
    });
  });

$(function() {
    $('.column6').hover(function() {
      $('.popis6').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.popis6').css('color', '');
    });
  });

/* ================ hover icons =========== */

$(function() {
    $('.ighref').hover(function() {
      $('.ig').css('transform', 'translate(0, -20px)');
      $('.ig').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.ig').css('transform', '');
      $('.ig').css('color', '');
    });
  });
  
$(function() {
    $('.adresshref').hover(function() {
      $('.adress').css('transform', 'translate(0, -20px)');
      $('.adress').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.adress').css('transform', '');
      $('.adress').css('color', '');
    });
  });

$(function() {
    $('.phonehref').hover(function() {
      $('.phone').css('transform', 'translate(0, -20px)');
      $('.phone').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.phone').css('transform', '');
      $('.phone').css('color', '');
    });
  });

$(function() {
    $('.emailhref').hover(function() {
      $('.mail').css('transform', 'translate(0, -20px)');
      $('.mail').css('color', 'white');
    }, function() {
      // on mouseout, reset the background colour
      $('.mail').css('transform', '');
      $('.mail').css('color', '');
    });
  });

/* scrollSpy */

const menuLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('body > section');

window.addEventListener('scroll', () => {
  sections.forEach((section, key) => {
    const bounding = section.getBoundingClientRect();
    if ((bounding.bottom >= 0 && bounding.bottom <= window.innerHeight + 100)
      || (bounding.top >= -window.innerHeight && bounding.top <= 0)) {
      menuLinks.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`a[href="#${section.id}"]`);
      link.classList.add('active');
    }
  });
});

/* animations */

const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 100,
    reset: false,
});

sr.reveal(
    ".nadpis, .rezervace"
);