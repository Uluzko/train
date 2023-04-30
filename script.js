let layouts = [

  [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
    "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
    "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift",
    "Ctrl", "Win", "Alt", " ", "Alt", "⏴", "▼", "⏵", "Ctrl"
  ],

  [
    "Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del",
    "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift",
    "Ctrl", "Win", "Alt", " ", "Alt", "⏴", "▼", "⏵", "Ctrl"
  ],

  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', "Del",
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '⏴', '▼', '⏵', 'Ctrl'
  ],

  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', "Del",
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '⏴', '▼', '⏵', 'Ctrl'
  ],

  [
    "Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
    "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
    "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift",
    "Ctrl", "Win", "Alt", "", "Alt", "⏴", "▼", "⏵", "Ctrl"
  ],

  [
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
    "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift",
    "Ctrl", "Win", "Alt", "", "Alt", "⏴", "▼", "⏵", "Ctrl"
  ]
]

let keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


let header = document.createElement("header");
let area = document.createElement("textarea");
let keyboardLayout = document.createElement("div");
let keys = keyboardLayout.children;
let description = document.createElement("p");
let instruction = document.createElement("p");
header.classList.add("header");
header.textContent = "Виртуальная клавиатура";
area.classList.add("textarea");
area.setAttribute("rows", "10");
keyboardLayout.classList.add("keyboard");
description.classList.add("par");
instruction.classList.add("par");
description.textContent = "Клавиатура создана в операционной системе Windows";
instruction.textContent = "Для переключения языка комбинация: левые Ctrl + Alt";

document.body.append(header, area, keyboardLayout, description, instruction);


let layout;

let local = JSON.parse(localStorage.getItem("lang"));
let isEqual = JSON.stringify(local) === JSON.stringify(layouts[2])
if (isEqual) {
  keyboardLayout.classList.add("eng")
}

if (local) {
  init(local);
} else init(layouts[0])

//init(local ?? layouts[0]);
//init (layouts[0])



document.addEventListener("keydown", keyboardClickDown);
document.addEventListener("keyup", keyboardClickUp);
keyboardLayout.addEventListener('mousedown', handleClickDown);
keyboardLayout.addEventListener("mouseup", handleClickUp);



function init(layout) {
  let out = "";
  for (let i = 0; i < layouts[0].length; i++) {
      out += `<div class="key" data-code="${keyCodes[i]}" data-key="${layout[i]}" >` + layout[i] + `</div>`;
  }
  keyboardLayout.innerHTML = out;


  document.addEventListener("keydown", function(event) {
  document.querySelector('.keyboard .key[data-code="'+event.code+'"]').classList.add("active");
  })

  document.addEventListener("keyup", function(event) {
    document.querySelector('.keyboard .key[data-code="'+event.code+'"]').classList.remove("active");
    })

  keyboardLayout.addEventListener("mousedown", function(event) {
    if (!event.target.dataset.key) {
      return;
    }
    event.target.classList.add("active");
  })

  keyboardLayout.addEventListener("mouseup", function(event) {
    event.target.classList.remove("active");
  })

}


function keyboardClickDown (event) {
  event.preventDefault();
  let text = document.querySelector('.keyboard .key[data-code="'+event.code+'"]').textContent;
  if (event.ctrlKey || event.altKey || event.metaKey || event.code === "Delete") {
    text = "";
  }
  if (event.code === "Tab") {
    text = "   ";
  }
  if (event.code === "Backspace") {
    area.value = area.value.substring(0, area.value.length - 1);
    text = "";
  }
  if (event.code === "Enter") {
    text = "\n";
  }
  if (event.code === "CapsLock") {
    keyboardLayout.classList.toggle("caps");
    text = "";
  }
  if (event.ctrlKey && event.altKey) {
    keyboardLayout.classList.toggle("eng");
    text = "";
  } 
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    text = "";
    keyboardLayout.classList.add("shift");
    if (keyboardLayout.classList.contains("caps")) {
      keyboardLayout.classList.remove("caps");
    }
  }
  else {
    area.value += text;
  }

  keyboardLayout.classList.contains("eng") ? layout = layouts[2] : layout = layouts[0];
  console.log(layout);
  localStorage.setItem("lang", JSON.stringify(layout));

  keyboardLayout.classList.contains("caps") && !keyboardLayout.classList.contains("eng") ? init(layouts[1]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("caps") ? init(layouts[3]) :
  keyboardLayout.classList.contains("shift") && !keyboardLayout.classList.contains("eng") ? init(layouts[4]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("shift") ? init(layouts[5]) :
  keyboardLayout.classList.contains("eng") ? init(layouts[2]) :
  init(layouts[0]);
}


function keyboardClickUp (event) {
  event.preventDefault();
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    keyboardLayout.classList.remove("shift");
  }

  keyboardLayout.classList.contains("caps") && !keyboardLayout.classList.contains("eng") ? init(layouts[1]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("caps") ? init(layouts[3]) :
  keyboardLayout.classList.contains("shift") && !keyboardLayout.classList.contains("eng") ? init(layouts[4]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("shift") ? init(layouts[5]) :
  keyboardLayout.classList.contains("eng") ? init(layouts[2]) :
  init(layouts[0]);
}


function handleClickDown (event) {

  let text = event.target.dataset.key;

  if (text === "Ctrl" || text === "Alt" || text === "Win") {
    text = "";
  }

  if (text === "Tab") {
    text = "   ";
  }

  if (text === "Backspace") {
    area.value = area.value.substring(0, area.value.length - 1);
    text = "";
  }

  if (text === "Enter") {
    text = "\n";
  }

  if (text === "CapsLock") {
    keyboardLayout.classList.toggle("caps");
    text = "";
  } 

  if (text === "Shift") {
    keyboardLayout.classList.add("shift");
    text = "";
    if (keyboardLayout.classList.contains("caps")) {
      keyboardLayout.classList.remove("caps");
    }

  }
  if (text === undefined) {
    text = "";
  }

  else {
    area.value += text;
  }

  keyboardLayout.classList.contains("caps") && !keyboardLayout.classList.contains("eng") ? init(layouts[1]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("caps") ? init(layouts[3]) :
  keyboardLayout.classList.contains("shift") && !keyboardLayout.classList.contains("eng") ? init(layouts[4]) :
  keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("shift") ? init(layouts[5]) :
  keyboardLayout.classList.contains("eng") ? init(layouts[2]) :
  init(layouts[0]);

  }


  
  function handleClickUp (event) {
    let text = event.target.dataset.key;
    if (text === "Shift") {
      keyboardLayout.classList.remove("shift");
    }

    keyboardLayout.classList.contains("caps") && !keyboardLayout.classList.contains("eng") ? init(layouts[1]) :
    keyboardLayout.classList.contains("eng") && keyboardLayout.classList.contains("caps") ? init(layouts[3]) :
    keyboardLayout.classList.contains("eng") ? init(layouts[2]) :
    init(layouts[0]);
  }

