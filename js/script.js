// !Второй блок --------------------------------------
const element = document.querySelector('#materials');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});

// !Третий блок --------------------------------------
type = "text/javascript"
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("myMap1", {
    center: [48.872185, 2.354224],
    zoom: 12
  });

  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/Subtract.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
};

// !Четвертый блок --------------------------------------
new SimpleBar(document.getElementById('scroll'), {
  scrollbarMaxSize: 70
});

// !Пятый блок --------------------------------------
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Поле должно содержать не менее 3 символов'
    },
    tel: {
      required: 'Поле обязательно для заполнения',
      function: 'Несуществующий телефон'
    },
    mail: 'Пожалуйста, введите адрес электронной почты'
  },
});
