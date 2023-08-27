// ===================================================================
// ========================== Обробка подій ==========================
// ===================================================================
// Подія - це важливий механізм, сигнал, який дозволяє веб-сторінкам реагувати на дії користувачів, такі як натискання кнопки, наведення курсора миші на елемент, введення тексту в поле форми або завантаження сторінки тощо.

// -------------------------- Обробка Події --------------------------
// addEventListener(type, listener, options) - додає обробник події на елемент, який викликається, коли відбувається певна подія.
// removeEventListener(type, listener, options) - видаляє обробник події, який був доданий раніше з addEventListener().

// type - тип події, яку слід обробити.
// listener - функція, яка буде викликана, коли відбудеться подія.

const btnRegister = document.getElementById('btn__register')

// btnRegister.addEventListener('click', () => {
//   alert('click')
// }) // і таким чином можна додавати обробники подій, які будуть викликатися при відповідній події (в даному випадку при кліку на кнопку)
// таких подій на елемент можна додати нескінченну кількість

const listener = () => {
  alert('click')
}

btnRegister.addEventListener('click', listener)
btnRegister.removeEventListener('click', listener) // таким чином можна видаляти обробники подій

// options - об'єкт, який містить додаткові властивості, які визначають характеристики обробника подій.
// once - якщо true, то обробник буде автоматично видалений після виклику.
// capture - якщо true, то обробник буде викликаний на фазі захоплення, якщо false, то на фазі бульбашки.
// passive - якщо true, то обробник не може викликати preventDefault().

const outer = document.getElementById('outer')
const inner = document.getElementById('inner')

outer.addEventListener(
  'click',
  () => {
    alert('Capture outer')
  },
  { capture: true },
)
inner.addEventListener(
  'click',
  () => {
    alert('Capture inner')
  },
  { capture: true },
)

outer.addEventListener(
  'click',
  () => {
    alert('bubble outer')
  },
  { capture: false },
)
inner.addEventListener(
  'click',
  () => {
    alert('bubble inner')
  },
  { capture: false },
)

// таким чином можна визначати порядок виклику обробників подій, які викликаються на одному елементі
// спершу йде фаза захоплення, потім фаза бульбашки => Capture outer => Capture inner => bubble inner => bubble outer. Ззовні в середину і з середини назовні

document.getElementById('once').addEventListener(
  'click',
  () => {
    alert('click')
  },
  { once: true },
) // таким чином можна визначити, що обробник події буде викликаний лише один раз

// -------------------------- Об'єкт події --------------------------
// Об'єкт події містить властивості, які містять інформацію про подію, яка відбулася.
// Які події бувають?
// 1. Події клавіатури - keydown, keyup, keypress.
// 2. Події миші - click, contextmenu, mouseover, mouseout, mousedown, mouseup, mousemove, mousewheel, DOMMouseScroll.
// 3. Події форми - submit, focus, blur, change.
// 4. Події документа - DOMContentLoaded, readystatechange, load, unload, beforeunload.
// 5. Події CSS - transitionend, animationstart, animationend, animationiteration.
// 6. Події перетягування - dragstart, dragend, dragenter, dragleave, dragover, drop.

// -------------------------- Властивості об'єкта подій --------------------------
// type - вказує на тип події.
// target - вказує на елемент, на якому відбулася подія.
// currentTarget - вказує на елемент, на якому викликається обробник події (тобто елемент до події).
// eventPhase - вказує на фазу, на якій викликається обробник події.
// bubbles - вказує, чи викликається подія на фазі бульбашки.
// cancelable - вказує, чи можна скасувати подію за допомогою preventDefault() (відключення нативних функцій браузера).
// defaultPrevented - вказує, чи було викликано preventDefault().
// isTrusted - вказує, чи була подія викликана користувачем.
// timeStamp - вказує час виклику події.
// detail - вказує додаткову інформацію про подію.

const preventSubmit = (event) => {
  event.preventDefault() // таким чином можна відключити нативну функцію браузера
}
btnRegister.addEventListener('click', preventSubmit) // і відключивши ту функцію ми не відправимо дані з форми на сервер, тому що submit - це нативна функція браузера. Після цього можна виконувати свої дії з подією
btnRegister.removeEventListener('click', preventSubmit)

// -------------------------- Методи об'єкта подій --------------------------
// preventDefault() - відключає нативну функцію браузера.
// stopPropagation() - відключає спливання події після настання фази бульбашки.
// stopImmediatePropagation() - зупиняє виконання подій на наступному елементі
// composedPath() - повертає масив елементів, які відповідають шляху події.

btnRegister.addEventListener('click', (event) => {
  console.log(event.composedPath()) // таким чином можна отримати масив елементів, які відповідають шляху події (від елемента, на якому відбулася подія до body)
})

// -------------------------- Створення власної події --------------------------
// CustomEvent(type, options) - створює нову подію.
// type - тип події.
// options - об'єкт, який містить додаткові властивості, які визначають характеристики події. По замовчуванню це об'єкт CustomEventInit, який містить властивості:
// detail - додаткова інформація про подію.
// bubbles - чи викликається подія на фазі бульбашки.
// cancelable - чи можна скасувати подію за допомогою preventDefault().
// composed - чи може подія вийти за межі Shadow DOM.

// dispatchEvent(event) - викликає подію на елементі.
