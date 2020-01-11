//Ymap start
var spinner = $('.ymap-container').children('.loader');
var check_if_load = 0;
var myMapTemp, myPlacemarkTemp;


function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.730138, 37.594238],
    zoom: 7,
    controls: ['zoomControl', 'fullscreenControl']
  });
  // var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
  //     balloonContent: "Здесь может быть ваш адрес",
  //   }, {      
  //     // Необходимо указать данный тип макета.
  //     iconLayout: 'default#image',
  //     // Своё изображение иконки метки.
  //     iconImageHref: 'img/map-marker.png',
  //     // Размеры метки.
  //     iconImageSize: [50, 50],
  //     // Смещение левого верхнего угла иконки относительно
  //     // её "ножки" (точки привязки).
  //     iconImageOffset: [-25, -25]
  //   }
  // });

  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });

  myMapTemp.geoObjects.add(myPlacemarkTemp);
}

var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (check_if_load == 0) {
        check_if_load = 1;
        ymaps.load(init);
      }
    }
  );  
}

$(function() {

  //Map Yandex
  ymap();

});