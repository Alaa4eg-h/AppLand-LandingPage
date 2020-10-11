// Preloader 
(function () {
    const loaderContainer = document.querySelector('.loader-container');
    window.addEventListener('load', function () {
        loaderContainer.classList.add('hidden');
    });
})();


// HEADER SECTION 

// CREATE A FUNCTION TO ADD MENU-OPEN CLASS TO TOGGLE MENU BUTTON
(function () {
    // GRAP TOGGLE MENU
    const toggleMenu = document.querySelector('.toggle-menu');
    const navList = document.querySelector('.navbar-list');
    const navbarArea = document.querySelector('.navbar-area');
    const navLinks = document.querySelectorAll('.navbar-link');

    // ADDING EVENT LISTENER TO TOGGLE MENU BUTTON
    toggleMenu.addEventListener('click', function () {
        toggleMenu.classList.toggle('menu-open');
        navList.classList.toggle('show');
    });


    //ADD STICKY CLASS TO NAVBAR WHEN SCROLLING DOWN
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            // add sticky class if true
            navbarArea.classList.add('sticky');
        } else {
            // remove sticky class if false
            navbarArea.classList.remove('sticky');
        }
    });

    //ADD STICKY CLASS TO NAVBAR WHEN SCROLLING DOWN
    window.addEventListener('load', function () {
        //ADD STICKY CLASS TO NAVBAR WHEN WINDOW LESS THAN 991 EVEN IF WINDOW.SCROLLTOP = 0 DOWN
        if (window.pageYOffset >= 0 && window.innerWidth < 991) {
            // add sticky class if true
            navbarArea.classList.add('sticky');
        } else if (window.pageYOffset > 0 && window.innerWidth > 991) {
            // add sticky class if true
            navbarArea.classList.add('sticky');
        } else {
            // remove sticky class if false
            navbarArea.classList.remove('sticky');
        }
    });

    //ADD STICKY CLASS TO NAVBAR WHEN RESIZE DOWN
    window.addEventListener('resize', function () {
        if (window.innerWidth < 991) {
            // add sticky class if true
            navbarArea.classList.add('sticky');
            // REMOVE MENU-OPEN AND SHOW CLASSES WHEN RESIZING WINDOW
            toggleMenu.classList.remove('menu-open');
        } else if (window.innerWidth > 991 && window.pageYOffset > 0) {
            // add sticky class if true
            navbarArea.classList.add('sticky');
        } else {
            // remove sticky class if false
            navbarArea.classList.remove('sticky');
            // REMOVE MENU-OPEN AND SHOW CLASSES WHEN RESIZING WINDOW
            navList.classList.remove('show');
        }
    });



    // add add Event Listener to navbar links
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navList.querySelector('.navbar-link-active').classList.remove('navbar-link-active');
            e.target.classList.add('navbar-link-active');

            // Close menu when click on a link
            toggleMenu.classList.remove('menu-open');
            navList.classList.remove('show');

            // GO TO SECTION WHEN CLICK ON A LINK
            const id = e.target.getAttribute('href').slice(1);
            const section = document.getElementById(id);
            window.scroll({
                left: 0,
                top: section.offsetTop - 62,
                behavior: 'smooth'
            });
        });
    });
})();





















// WOW INITIAL
new WOW().init();