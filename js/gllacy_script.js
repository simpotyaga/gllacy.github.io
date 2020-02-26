// var open = document.querySelector(".open-form");              // нашел "напиши нам"
// var form = document.querySelector(".hidden-form");     // "нашел окно формы"
// var close = document.querySelector(".cross-form");      // "нашел крестик(закрытия) формы"

// open.addEventListener("click", function (evt) {           //  нажатие на "напиши нам"
//   evt.preventDefault();                                     // снял дефолт
//   form.classList.add("show-form");                        // добавил класс окно, для ПОКАЗА
// });


// close.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
//   evt.preventDefault();                                  //  снял дефолт
//   form.classList.remove("show-form");                  //снял класс окна, для ПОКАЗА
// });


// window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
//   if (evt.keyCode === 27) {                              //  "Esc"
//     if (form.classList.contains("show-form")) {             // убеждаемся что окно открыто
//       form.classList.remove("show-form");                    //тогда при нажатие Esc, удалиться класс     
//     }
//   }
// });



// forma  вход forma  вход forma  вход forma  вход forma  вход forma  вход forma  вход forma  вход forma  вход 

// var openEntrance = document.querySelector(".entrance");                    // нашел кнопку "поиска"
// var formEntrance = document.querySelector(".entrance-popup");              // "нашел окно поиска"



// openEntrance.addEventListener("click", function (evt) {                //  нажатие на "поиск"
//   evt.preventDefault();                                                // снял дефолт
//   formEntrance.classList.toggle("show-popup");                         // добавил КЛАСС окно, для ПОКАЗА (если элемент открывает и закрывает используют toggle а не add)
// });


// window.addEventListener("keydown", function (evt) {                   // виндоу - это окно экрана,
//   if (evt.keyCode === 27) {                                            //  "Esc"
//     if (formEntrance.classList.contains("show-popup")) {             // убеждаемся что окно открыто
//       formEntrance.classList.remove("show-popup");                    //тогда при нажатие Esc, удалиться класс     
//     }
//   }
// });


// forma  обратный звонок




var openFeedback = document.querySelector(".openfeedback");
var formFeedback = document.querySelector(".popup-feedback");
var closeFeedback = document.querySelector(".popup-feedback-close");



openFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  formFeedback.classList.add("show-popup");
});




closeFeedback.addEventListener("click", function (evt) {       // нажатие на крестик "для закрытие окна"
  evt.preventDefault();                                  //  снял дефолт
  formFeedback.classList.remove("show-popup");                  //снял класс окна, для ПОКАЗА
});


window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
  if (evt.keyCode === 27) {                              //  "Esc"
    if (formFeedback.classList.contains("show-popup")) {             // убеждаемся что окно открыто
      formFeedback.classList.remove("show-popup");                    //тогда при нажатие Esc, удалиться класс     
    }
  }
});


// forma  вход

var openEntrance = document.querySelector(".entrance");
var formEntrance = document.querySelector(".entrance-popup");



openEntrance.addEventListener("click", function (evt) {
  evt.preventDefault();
  formEntrance.classList.toggle("show-popup");
});


window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
  if (evt.keyCode === 27) {                              //  "Esc"
    if (formEntrance.classList.contains("show-popup")) {             // убеждаемся что окно открыто
      formEntrance.classList.remove("show-popup");                    //тогда при нажатие Esc, удалиться класс     
    }
  }
});



// forma  лупа \ поиск

var openSearch = document.querySelector(".search-popup-img-fon");
var formSearch = document.querySelector(".search-popup");



openSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  formSearch.classList.toggle("show-popup");
});


window.addEventListener("keydown", function (evt) {      // виндоу - это окно экрана,
  if (evt.keyCode === 27) {                              //  "Esc"
    if (formSearch.classList.contains("show-popup")) {             // убеждаемся что окно открыто
      formSearch.classList.remove("show-popup");                    //тогда при нажатие Esc, удалиться класс     
    }
  }
});









// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     nav: true,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 5500,
//     autoplayHoverPause: true,
//   });
// });








