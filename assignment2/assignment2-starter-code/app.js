(function() {
    'use strict';
    angular.module('ShoppingListCheckOut', [])
        .controller('BuyController', BuyController).controller('BoughtController', BoughtController).service('ShoppingListService', ShoppingListService);

    BuyController.$inject = ['ShoppingListService'];
    BoughtController.$inject = ['ShoppingListService'];

    function BuyController(ShoppingListService) {
        var buy = this;
        buy.items = ShoppingListService.getToBuyList();
        buy.checkOut = function(itemIndex) {
            ShoppingListService.checkOut(itemIndex);
        };
        //console.log(this.items);
    }

    function BoughtController(ShoppingListService) {
        var bought = this;
        bought.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService() {
        var svc = this;
        var buyList = [{
                name: "Healthy Cookies",
                quantity: "5 Packs"
            }, {
                name: "Milk",
                quantity: "3 Bottles"
            }, {
                name: "Donuts",
                quantity: "3 Boxes"
            }, {
                name: "Peanut Butter",
                quantity: "5 Bottles"
            },
            {
                name: "Peanuts",
                quantity: "5 Packs"
            }
        ];

        var boughtItems = [];
        svc.getToBuyList = function() {
            return buyList;
        };
        svc.checkOut = function(itemIndex) {
            boughtItems.push(buyList[itemIndex]);
            buyList.splice(itemIndex, 1);
        };
        svc.getBoughtItems = function() {
            return boughtItems;
        };
    }
})();