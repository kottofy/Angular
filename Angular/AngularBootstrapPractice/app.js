(function () {
    var app = angular.module('store', ['store-products']);

    //app.controller('SomeController', ['$http', '$log', function ($http, $log) { }]);

    app.controller('StoreController', ['$http', function ($http) {
        this.products = gems;

        //var store = this;

        //$http.get('/store-products.json').success(function (data) {
        //    store.products = data;
        //});

    }]);

    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'blah dee blah',
        specifications: 'None yet',
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
        specifications: 'None',
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

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };

    });

})();

