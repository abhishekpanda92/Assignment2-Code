(function(){
'use strict';
angular.module('ShoppingListCheckOff',[])

.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

var tbc = this;
tbc.toBuyList = ShoppingListCheckOffService.getToBuyList();
tbc.show = ShoppingListCheckOffService.showtoBuy;
tbc.bought = function(index)
{

ShoppingListCheckOffService.remove(index);

};

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  var abc = this;
  abc.show = ShoppingListCheckOffService.showBought;
  abc.alreadyBoughtlist = ShoppingListCheckOffService.getAlreadyBoughtlist();

}

function ShoppingListCheckOffService(){

var ShoppingListCheckOffService = this;

var toBuyList = [{ "name" : "Cookies" , "quantity" : 10},
{ "name" : "Coke" , "quantity" : 150},
{ "name" : "Pepsi" , "quantity" : 160},
{ "name" : "Detegergent" , "quantity" : 100},
{ "name" : "Bats" , "quantity" : 190}

];

var alreadyBoughtlist = [];


ShoppingListCheckOffService.showBought = {"status" : true};

ShoppingListCheckOffService.showtoBuy = {"status" : false};


ShoppingListCheckOffService.remove = function(index)
{
  alreadyBoughtlist.push(toBuyList[index]);
  ShoppingListCheckOffService.showBought.status = false;
  toBuyList.splice(index,1);

  if(toBuyList.length < 1 )
  {
    ShoppingListCheckOffService.showtoBuy.status = true;
  }
}

ShoppingListCheckOffService.getToBuyList = function()
{
  return toBuyList;
}

ShoppingListCheckOffService.getAlreadyBoughtlist = function()
{
  return alreadyBoughtlist;
}
}


})();
