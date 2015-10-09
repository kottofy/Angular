
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
        soldOut: true
    },
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "pretty",
        canPurchase: true,
        soldOut: false
    }
     ]
})();