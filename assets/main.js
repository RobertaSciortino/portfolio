var app = new Vue({
    el: '#root',
    data: {
        replicas: [
            {
                image: "images/fluentify.png",
                description: "This is my first website replica ever! :D The layout was developed only in desktop version using HTML3 and CSS3.",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png"
                ],
                pageLink: "./projects/fluentify/index.html"
            },
            {
                image: "images/hubspot-desktop.png",
                description: "This replica of an Hubspot's website page developed only in desktop version.",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png"
                ],
                pageLink: "./projects/hubspot/index.html"
            },
            {
                image: "images/digital-ocean1.png",
                description: "It's my first responsive layout replica devoloped with Bootstrap 3. You can use it in mobile, tablet and desktop version.",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png",
                    "images/bootstrap.png"
                ],
                pageLink: "./projects/digital-ocean/index.html"
            },
            {
                image: "images/spotifyweb-resp.png",
                description: "Spotify layout replica is responsive and it's entirely developed with CSS3 flexbox.",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png"
                ],
                pageLink: "./projects/spotify-web/index.html"
            }
        ],
        apps: [
            {
                image: "images/whatsapp.png",
                description: "This is the first web app replica developed in Vue.js. You can search a contact, delete messages or write one - your contact will answer you! :D",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png",
                    "images/javascript.png",
                    "images/vuejs.png"
                ],
                pageLink: "./projects/whatsapp-web/index.html"
            },
            {
                image: "images/netflix.png",
                description: "Web app Netflix inspired, developed with Vue.js and using APIs and AJAX calls.",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png",
                    "images/javascript.png",
                    "images/vuejs.png"
                ],
                pageLink: "./projects/netflix/index.html"
            },
            {
                image: "images/simon.png",
                description: "Simon game developed with jQuery. You can play it! :D",
                techLogo: [
                    "images/html5.png",
                    "images/css3.png",
                    "images/javascript.png",
                    "images/jquery.png"
                ],
                pageLink: "./projects/simon/index.html"
            }
        ],
        skills: [
            "images/html5.png",
            "images/css3.png",
            "images/bootstrap.png",
            "images/sass.png",
            "images/javascript.png",
            "images/jquery.png",
            "images/vuejs.png",
            "images/php.png",
            "images/laravel2.png",
            "images/mysql.png",
        ],
    },
    methods: {
        
    },
    mounted: function() {
        AOS.init ();

        window.addEventListener('load', AOS.refresh);
        window.addEventListener('resize', AOS.refresh);

        particlesJS('particles-js', {
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ee82ee"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 5,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 80,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 800,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 800,
                  "size": 80,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 400,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }, function() {
            console.log('callback - particles.js config loaded');
        });
    }
});