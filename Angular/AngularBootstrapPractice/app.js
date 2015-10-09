
(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'blah dee blah',
        canPurchase: false,
        soldOut: true,
        images: [
            {
                full: 'images/full.png',
                thumb: 'images/thumb.png'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "I love this product!",
                author: "joe@thomas.com"
            },
            {
                stars: 1,       
                body: "This product sucks",
                author: "tim@hater.com"
            }
        ]
    },
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "pretty",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'images/full.png',
                thumb: 'images/thumb.png'
            }
        ],
        reviews: [
                {
                    stars: 3,
                    body: "meh",
                    author: "idc@meh.com"
                },
                {
                    stars: 5,
                    body: "This product is bananas",
                    author: "bananas@lover.com"
                }
        ]
    
    }
     ]

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

    });

})();

