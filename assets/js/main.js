/*==================== SHOW MENU MOBILE ====================*/
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');

    
    document.body.classList.toggle('no-scroll')
	})
})();
/*==================== close menu mobile when click ====================*/

(function () {
	$('.mobile-nav-link').on('click', function() {
    $('.bar').toggleClass('animate');
    var mobileNav = $('.mobile-nav');
    mobileNav.toggleClass('hide show');

    document.body.classList.remove('no-scroll')

	})
})();


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_list a[href*=" + sectionId + "]")
        .classList.remove("text-white/70");
          } else {
      document
        .querySelector(".nav_list a[href*=" + sectionId + "]")
        .classList.add("text-white/70");
    }
  });
}
window.addEventListener("scroll", scrollActive);


*/
  
  
  
  /*==================== FAQ ====================*/
  const items = document.querySelectorAll(".accordion button");
  
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  items.forEach(item => item.addEventListener('click', toggleAccordion));
  
  
  