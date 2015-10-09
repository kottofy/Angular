
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

    app.directive('productTitle', function () {
        return {
            restrict: 'E', //new element
            templateUrl: 'product-title.html'
        };
    });

    //app.directive('productGallery', function () {
    //    return {
    //        restrict: 'E', //new element
    //        templateUrl: 'product-gallery.html',
    //        controller: function () {
    //            this.current = 0;
    //            this.setCurrent = function (imageNumber) {
    //                this.current = imageNumber || 0;
    //            };
    //        },
    //        controllerAs: 'gallery'
    //    };
    //});

    app.directive('productDescription', function () {
        return {
            restrict: 'E', //new element
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productPanels', function () {
        return {
            restrict: 'E', //new element
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panels'
        };
    });

})();

