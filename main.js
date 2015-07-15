var $ansOne = document.getElementById('answer1');
var $ansTwo = document.getElementById('answer2');
var $ansThree = document.getElementById('answer3');
var $ansFour = document.getElementById('answer4');
var $ansFive = document.getElementById('answer5');
var $ansSix = document.getElementById('answer6');

function getAvg(items){
   var prices = items.map(function(item){
     return item.price;
   })

   var sum = prices.reduce(function(total, val){
     return total + val;
   });

   return sum / items.length;
};

$ansOne.innerHTML = getAvg(items).toFixed(2);

var range = items.filter(function(item){
  return item.price <18.00 && item.price > 14.00;
}).map(function(item){
  return '<li>' + item.title + '</li>';
}).reduce(function(html, item){
  return html +item;
});

$ansTwo.innerHTML = range;

var pound = items.filter(function(item){
  return item.currency_code === "GBP";
}).map(function(item){
  return '<li>' + item.title + ' ' + item.price + '</li>';
}).reduce(function(html, item){
  return html + item;
});

$ansThree.innerHTML = pound;


var wood = items.filter(function(item){
  return item.materials.indexOf('wood') !== -1;
}).map(function(item){

  return '<li>' + item.title + " " + item.price + '</li>';
}).reduce(function(html, item){

  return html + item;
});

$ansFour.innerHTML = wood;


function eight(items, materialsLength){
  return items.filter(function(item){
    return item.materials.length >= materialsLength;
  }).map(function(item){

    return '<li>' + item.title + item.materials + '. This item is made out of ' + item.materials.length + " materials" +'</li>';
  }).reduce(function(html, item){

    return html + item;
  });
}

$ansFive.innerHTML = eight(items, 8);



var seller = items.filter(function(item){
  return item.who_made === "i_did";
});

$ansSix.innerHTML = seller.length + " were made by thier sellers";
