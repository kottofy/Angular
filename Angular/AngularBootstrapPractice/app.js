
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
        ]
    }
     ]
})();