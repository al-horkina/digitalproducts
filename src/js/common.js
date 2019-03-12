(function ($) {
    $(document).ready(function () {
        $('.hero-slider').slick({
            arrows: false,
            dots: true
        });

        $('.portfolio-slider').slick({
            arrows: true,
            dots: false
        });


        const $map = $('.location');
        const map = new google.maps.Map(
            $map[0],
            {
                center: {lat: 28.619, lng: -80.790},
                zoom: 14,
                styles: [
                    {
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#c4a77f"
                            }
                        ]
                    }
                ]
            }
        );

        const image = {
            url: '/assets/img/Placeholder.svg',
            scaledSize: new google.maps.Size(48, 64)
        };

        const marker = new google.maps.Marker({
            position: {lat: 28.613, lng: -80.811},
            map: map,
            title: 'Titusville',
            icon: image
        });


    })
})(jQuery);

const app = new Vue({
    el: '#footer__form',
    data: {
        errors: [],
        name: null,
        email: null
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push('Укажите имя.');
            }
            if (!this.email) {
                this.errors.push('Укажите электронную почту.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Укажите корректный адрес электронной почты.');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail: function (email) {
           let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
});