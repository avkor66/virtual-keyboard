export default class Keyboard {
  constructor() {
    this.optionsAray = {
      posX: 0,
      posY: 0,
      temp: 0,
      flag: 0,
    }
    this.capsLock = null
    this.shiftClick = false
    this.controlClick = false
    this.altClick = false
    this.metaClick = false
    this.language = document.cookie
    this.textArea 
    this.download = false
    this.templateArrayEn = [
      [
        {code: 'Backquote',value: '§',text: '§',subValue: '±',subText: '&plusmn;' },
        {code: 'Digit1',value: '1',text: '1',subValue: '!',subText: '!' },
        {code: 'Digit2',value: '2',text: '2',subValue: '@',subText: '@' },
        {code: 'Digit3',value: '3',text: '3',subValue: '#',subText: '#'},
        {code: 'Digit4',value: '4',text: '4',subValue: '$',subText: '$',},
        {code: 'Digit5',value: '5',text: '5',subValue: '%',subText: '%',},
        {code: 'Digit6',value: '6',text: '6',subValue: '^',subText: '^',},
        {code: 'Digit7',value: '7',text: '7',subValue: '&',subText: '&',},
        {code: 'Digit8',value: '8',text: '8',subValue: '*',subText: '*',},
        {code: 'Digit9',value: '9',text: '9',subValue: '(',subText: '(',},
        {code: 'Digit0',value: '0',text: '0',subValue: ')',subText: ')',},
        {code: 'Minus',value: '-',text: '-',subValue: '_',subText: '_',},
        {code: 'Equal',value: '=',text: '=',subValue: '+',subText: '+',},
        {code: 'Backspace',value: 'Backspace',text: 'Backspace',class: 'backspace',},
      ],
      [
        {code: 'Tab',value: 'Tab',text: 'Tab',class: 'tabulation',},
        {code: 'KeyQ',value: 'q',text: 'Q',},
        {code: 'KeyW',value: 'w',text: 'W',},
        {code: 'KeyE',value: 'e',text: 'E',},
        {code: 'KeyR',value: 'r',text: 'R',},
        {code: 'KeyT',value: 't',text: 'T',},
        {code: 'KeyY',value: 'y',text: 'Y',},
        {code: 'KeyU',value: 'u',text: 'U',},
        {code: 'KeyI',value: 'i',text: 'I',},
        {code: 'KeyO',value: 'o',text: 'O',},
        {code: 'KeyP',value: 'p',text: 'P',},
        {code: 'BracketLeft',value: '[',text: '[',subValue: '{',subText: '{',},
        {code: 'BracketRight',value: ']',text: ']',subValue: '}',subText: '}',},
        {code: 'Delete',value: 'Delete',text: 'Del',class: 'delete',},
      ],
      [
        {code: 'CapsLock',value: 'CapsLock',text: 'Caps&nbsp;Lock',id: 'caps-lock',},
        {code: 'KeyA',value: 'a',text: 'A',},
        {code: 'KeyS',value: 's',text: 'S',},
        {code: 'KeyD',value: 'd',text: 'D',},
        {code: 'KeyF',value: 'f',text: 'F',},
        {code: 'KeyG',value: 'g',text: 'G',},
        {code: 'KeyH',value: 'h',text: 'H',},
        {code: 'KeyJ',value: 'j',text: 'J',},
        {code: 'KeyK',value: 'k',text: 'K',},
        {code: 'KeyL',value: 'l',text: 'L',},
        {code: 'Semicolon',value: ';',text: ';',subValue: ':',subText: ':',},
        {code: 'Quote',value: "\'",text: '&prime;',subValue: '\"',subText: '&quot;',},
        {code: 'Backslash',value: '\\',text: '\\',subValue: '|',subText: '|',},
        {code: 'Enter',value: 'Enter',text: '&#8629;',class: 'enter',},
      ],
      [
        {code: 'ShiftLeft',value: 'Shift',text: 'Shift',class: 'shift',},
        {code: 'IntlBackslash',value: '\`',text: '&#96;',subValue: '~',subText: '~',},
        {code: 'KeyZ',value: 'z',text: 'Z',},
        {code: 'KeyX',value: 'x',text: 'X',},
        {code: 'KeyC',value: 'c',text: 'C',},
        {code: 'KeyV',value: 'v',text: 'V',},
        {code: 'KeyB',value: 'b',text: 'B',},
        {code: 'KeyN',value: 'n',text: 'N',},
        {code: 'KeyM',value: 'm',text: 'M',},
        {code: 'Comma',value: ',',text: ',',subValue: '<',subText: '&lt;',},
        {code: 'Period',value: '.',text: '.',subValue: '>',subText: '&gt;',},
        {code: 'Slash',value: '/',text: '/',subValue: '?',subText: '?',},
        {code: 'ShiftRight',value: 'Shift',text: 'Shift',class: 'shift',},
      ],
      [
        {code: 'ControlLeft',value: 'Control',text: 'Ctrl',class: 'control',},
        {code: 'AltLeft',value: 'Alt',text: 'Alt',class: 'alt',},
        {code: 'MetaLeft',value: 'Meta',text: 'Command',class: 'meta',},
        {code: 'Space',value: ' ',text: ' ',class: 'space',},
        {code: 'MetaRight',value: 'Meta',text: 'Command',class: 'meta',},
        {code: 'AltRight',value: 'Alt',text: 'Alt',class: 'alt',},
        {
          arrow: true,
          html: `
            <div class="board__line__key__arrow__start">
              <div class="board__line__key board__line__key__arrow__start__up" data-code="ArrowUp" data-value="ArrowUp">&#9650;</div>
            </div>
            <div class="board__line__key__arrow__end">
              <div class="board__line__key board__line__key__arrow__end__left" data-code="ArrowLeft" data-value="ArrowLeft">&#9668;</div>
              <div class="board__line__key board__line__key__arrow__end__down" data-code="ArrowDown" data-value="ArrowDown">&#9660;</div>
              <div class="board__line__key board__line__key__arrow__end__right" data-code="ArrowRight" data-value="ArrowRight">&#9658;</div>
            </div>`
        }
      ],
    ]
    this.templateArrayRu = [
      [
        {code: 'Backquote',value: '>',text: '&gt;',subValue: '<',subText: '&lt;' },
        {code: 'Digit1',value: '1',text: '1',subValue: '!',subText: '!' },
        {code: 'Digit2',value: '2',text: '2',subValue: '"',subText: '&quot;' },
        {code: 'Digit3',value: '3',text: '3',subValue: '№',subText: '№'},
        {code: 'Digit4',value: '4',text: '4',subValue: '%',subText: '%',},
        {code: 'Digit5',value: '5',text: '5',subValue: ':',subText: ':',},
        {code: 'Digit6',value: '6',text: '6',subValue: ',',subText: ',',},
        {code: 'Digit7',value: '7',text: '7',subValue: '.',subText: '.',},
        {code: 'Digit8',value: '8',text: '8',subValue: ';',subText: ';',},
        {code: 'Digit9',value: '9',text: '9',subValue: '(',subText: '(',},
        {code: 'Digit0',value: '0',text: '0',subValue: ')',subText: ')',},
        {code: 'Minus',value: '-',text: '-',subValue: '_',subText: '_',},
        {code: 'Equal',value: '=',text: '=',subValue: '+',subText: '+',},
        {code: 'Backspace',value: 'Backspace',text: 'Backspace',class: 'backspace',},
      ],
      [
        {code: 'Tab',value: 'Tab',text: 'Tab',class: 'tabulation',},
        {code: 'KeyQ',value: 'й',text: 'Й',},
        {code: 'KeyW',value: 'ц',text: 'Ц',},
        {code: 'KeyE',value: 'у',text: 'У',},
        {code: 'KeyR',value: 'к',text: 'К',},
        {code: 'KeyT',value: 'е',text: 'Е',},
        {code: 'KeyY',value: 'н',text: 'Н',},
        {code: 'KeyU',value: 'г',text: 'Г',},
        {code: 'KeyI',value: 'ш',text: 'Ш',},
        {code: 'KeyO',value: 'щ',text: 'Щ',},
        {code: 'KeyP',value: 'з',text: 'З',},
        {code: 'BracketLeft',value: 'х',text: 'Х'},
        {code: 'BracketRight',value: 'ъ',text: 'Ъ'},
        {code: 'Delete',value: 'Delete',text: 'Del',class: 'delete',},
      ],
      [
        {code: 'CapsLock',value: 'CapsLock',text: 'Caps&nbsp;Lock',id: 'caps-lock',},
        {code: 'KeyA',value: 'ф',text: 'Ф',},
        {code: 'KeyS',value: 'ы',text: 'Ы',},
        {code: 'KeyD',value: 'в',text: 'В',},
        {code: 'KeyF',value: 'а',text: 'А',},
        {code: 'KeyG',value: 'п',text: 'П',},
        {code: 'KeyH',value: 'р',text: 'Р',},
        {code: 'KeyJ',value: 'о',text: 'О',},
        {code: 'KeyK',value: 'л',text: 'Л',},
        {code: 'KeyL',value: 'д',text: 'Д',},
        {code: 'Semicolon',value: 'ж',text: 'Ж'},
        {code: 'Quote',value: "э",text: 'Э'},
        {code: 'Backslash',value: 'ё',text: 'Ё'},
        {code: 'Enter',value: 'Enter',text: '&#8629;',class: 'enter',},
      ],
      [
        {code: 'ShiftLeft',value: 'Shift',text: 'Shift',class: 'shift',},
        {code: 'IntlBackslash',value: ']',text: ']',subValue: '[',subText: '[',},
        {code: 'KeyZ',value: 'я',text: 'Я',},
        {code: 'KeyX',value: 'ч',text: 'Ч',},
        {code: 'KeyC',value: 'с',text: 'С',},
        {code: 'KeyV',value: 'м',text: 'М',},
        {code: 'KeyB',value: 'и',text: 'И',},
        {code: 'KeyN',value: 'т',text: 'Т',},
        {code: 'KeyM',value: 'ь',text: 'Ь',},
        {code: 'Comma',value: 'б',text: 'Б'},
        {code: 'Period',value: 'ю',text: 'Ю'},
        {code: 'Slash',value: '/',text: '/',subValue: '?',subText: '?',},
        {code: 'ShiftRight',value: 'Shift',text: 'Shift',class: 'shift',},
      ],
      [
        {code: 'ControlLeft',value: 'Control',text: 'Ctrl',class: 'control',},
        {code: 'AltLeft',value: 'Alt',text: 'Alt',class: 'alt',},
        {code: 'MetaLeft',value: 'Meta',text: 'Command',class: 'meta',},
        {code: 'Space',value: ' ',text: ' ',class: 'space',},
        {code: 'MetaRight',value: 'Meta',text: 'Command',class: 'meta',},
        {code: 'AltRight',value: 'Alt',text: 'Alt',class: 'alt',},
        {
          arrow: true,
          html: `
            <div class="board__line__key__arrow__start">
              <div class="board__line__key board__line__key__arrow__start__up" data-code="ArrowUp" data-value="ArrowUp">&#9650;</div>
            </div>
            <div class="board__line__key__arrow__end">
              <div class="board__line__key board__line__key__arrow__end__left" data-code="ArrowLeft" data-value="ArrowLeft">&#9668;</div>
              <div class="board__line__key board__line__key__arrow__end__down" data-code="ArrowDown" data-value="ArrowDown">&#9660;</div>
              <div class="board__line__key board__line__key__arrow__end__right" data-code="ArrowRight" data-value="ArrowRight">&#9658;</div>
            </div>`
        }
      ],
    ]
  }
  takeSymbol( symbol, upper) {
    const char = upper ? symbol.toUpperCase() : symbol
    const start = this.textArea.selectionStart
    const end = this.textArea.selectionEnd
    const someText = this.textArea.value.substring(0, start) + char + this.textArea.value.substring(end)
    this.textArea.value = someText
    this.textArea.focus()
    this.textArea.selectionEnd = (start == end)? (end + symbol.length) : end
  }
  backspaceSymbol() {
    const start = this.textArea.selectionStart
    const end = this.textArea.selectionEnd
    if(start > 0 || start != end) {
      let someText
      if (start == end) {
        someText = this.textArea.value.substring(0, start-1) + this.textArea.value.substring(end)
      } else {
        someText = this.textArea.value.substring(0, start) + this.textArea.value.substring(end)
      }
      this.textArea.value = someText
      this.textArea.focus()
      this.textArea.selectionEnd = (start == end)? (start-1) : start
    }
  }
  deleteSymbol() {
    const start = this.textArea.selectionStart
    const end = this.textArea.selectionEnd
    if(end < this.textArea.value.length || start != end) {
      let someText
      if (start == end) {
        someText = this.textArea.value.substring(0, start) + this.textArea.value.substring(end+1)
      } else {
        someText = this.textArea.value.substring(0, start) + this.textArea.value.substring(end)
      }
      this.textArea.value = someText
      this.textArea.focus()
      this.textArea.selectionEnd = start
    }
  }
  arrowLeft(event) {
    const start = this.textArea.selectionStart
    const end = this.textArea.selectionEnd
    this.textArea.focus()
    if (event.shiftKey) {
      if(start > 0) {
        this.textArea.selectionEnd = end
        this.textArea.selectionStart = start-1
      }
    } else {
      if (start == end) {
        if(start > 0) {
          this.textArea.selectionEnd = end-1
          this.textArea.selectionStart = start-1
        }
      } else {
        this.textArea.selectionEnd = start
        this.textArea.selectionStart = start
      }
    }
  }
  arrowRight(event) {
    const start = this.textArea.selectionStart
    const end = this.textArea.selectionEnd
    this.textArea.focus()
    if(event.shiftKey) {
      if(end < this.textArea.value.length) {
        this.textArea.selectionEnd = end+1
        this.textArea.selectionStart = start
      }
    } else {
      if(start == end) {
        if(end < this.textArea.value.length) {
          this.textArea.selectionEnd = end+1
          this.textArea.selectionStart = end+1
        }
      } else {
        this.textArea.selectionEnd = end
        this.textArea.selectionStart = end
      }          
    }
  }
  arrowUp() {
    const text = this.textArea.value.split('\n')
    if (text.length > 1) {
      let {start=this.textArea.selectionStart, posX, posY, temp, flag} = this.optionsAray
      temp = start -1
      if(start < text[0].length+1) {
        this.textArea.selectionEnd = 0
        this.textArea.selectionStart = 0
      } else {
        while (temp) {
          flag++
          posX++
          if (this.textArea.value[flag] === '\n') {
            posY++
            posX = 0
          }
          temp--
        }
        if(text[posY-1].length <= posX-1) {
          this.textArea.selectionStart = start - (posX + 1)
        } else {
          this.textArea.selectionStart = start - (posX + 1) - (text[posY-1].length - posX)
        }
        this.textArea.selectionEnd = this.textArea.selectionStart
      }
    } else {
      this.textArea.selectionEnd = 0
      this.textArea.selectionStart = 0
    }
  }
  arrowDown() {
    const text = this.textArea.value.split('\n')
    if (text.length > 1) {
      let {start=this.textArea.selectionStart, end=this.textArea.selectionEnd, posX, posY, temp, flag} = this.optionsAray
      if(end > (this.textArea.value.length - text[text.length-1].length - 1)) {
        this.textArea.selectionEnd = this.textArea.value.length
        this.textArea.selectionStart = this.textArea.value.length
      } else {
        while (temp < end) {
          posX++
          if (this.textArea.value[flag] === '\n') {
            posY++
            posX = 0
          }
          flag++
          temp++
        }
        if(text[posY+1].length <= posX) {
          this.textArea.selectionStart = start + text[posY+1].length + (text[posY].length - posX) + 1
        } else {
          this.textArea.selectionStart = start + posX + (text[posY].length - posX) + 1
        }
        this.textArea.selectionEnd = this.textArea.selectionStart
      }
    } else {
      this.textArea.selectionEnd = this.textArea.value.length
      this.textArea.selectionStart = this.textArea.value.length
    }
  }
  elementSwitch(take){
    switch (take.code) { 
      case 'CapsLock':
        break;
      case 'Enter':
        this.takeSymbol('\n', this.shiftClick || this.capsLock)
        break;
      case 'Tab':
        this.takeSymbol('\t', this.shiftClick || this.capsLock)
        break;
      case 'ShiftLeft':
        break;
      case 'ShiftRight':
        break;
      case 'AltLeft':
        break;
      case 'AltRight':
        break;
      case 'MetaLeft':
        break;
      case 'MetaRight':
        break;
      case 'ControlLeft':
        break;
      case 'ControlRight':
        break;
      case 'Delete':
        this.deleteSymbol()
        break;
      case 'Backspace':
        this.backspaceSymbol()
        break;
      case 'ArrowLeft':
        this.arrowLeft(take)
        break;
      case 'ArrowRight':
        this.arrowRight(take)
        break;
      case 'ArrowUp':
        this.arrowUp(take)
        break;
      case 'ArrowDown':
        this.arrowDown(take)
        break;
      default:
        this.takeSymbol(take.key ? take.key : take.value, this.shiftClick || this.capsLock)
        break;
    }
  }
  loop(){}
  listener() {
    const key = document.querySelectorAll('.board__line__key')
    key.forEach(item => {
      item.addEventListener('click', event => {
        this.textArea.focus()
        const add = event.currentTarget
        const ev = event.target.dataset 
        switch (ev.value) {
          case 'CapsLock':
            if(this.capsLock) {
              this.capsLock = false
              document.querySelector('#caps-lock').classList.remove('press')
            } else {
              this.capsLock = true
              document.querySelector('#caps-lock').classList.add('press')
            }                  
            break;
          case 'Shift':
            if(this.shiftClick) {
              if (add.classList.contains('press')) {
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                this.shiftClick = false
              } else {
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                add.classList.add('press')
                this.shiftClick = true
              }
            } else {
              this.shiftClick = true
              add.classList.add('press')                  
            }
            //смена раскладки
            if (this.altClick) {
              add.classList.add('press')
              setTimeout(() => {
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
              }, 100);
              this.altClick = false
              this.shiftClick = false
              this.controlClick = false
              if (this.language === 'lang=en') {
                this.language = 'lang=ru'
                document.cookie = "lang=ru"
              } else {
                this.language = 'lang=en'
                document.cookie = "lang=en"
              }    
              this.render()
              // window.location.reload()
            }                  
            break
          case 'Control':
            if(this.controlClick) {
              if (add.classList.contains('press')) {
                document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
                this.controlClick = false
              } else {
                document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
                add.classList.add('press')
                this.controlClick = true
              }
            } else {
              this.controlClick = true
              add.classList.add('press')                  
            }
            break
          case 'Meta':
            if(this.metaClick) {
              if (add.classList.contains('press')) {
                document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
                this.metaClick = false
              } else {
                document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
                add.classList.add('press')
                this.metaClick = true
              }
            } else {
              this.metaClick = true
              add.classList.add('press')                  
            }
            break
          case 'Alt':
            if(this.altClick) {
              if (add.classList.contains('press')) {
                document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
                this.altClick = false
              } else {
                document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
                add.classList.add('press')
                this.altClick = true
              }
            } else {
              this.altClick = true
              add.classList.add('press')                  
            }
            //смена раскладки
            if (this.shiftClick) {
              add.classList.add('press')
              setTimeout(() => {
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
                document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
              }, 100);
              this.shiftClick = false
              this.altClick = false
              this.controlClick = false
              if (this.language === 'lang=en') {
                this.language = 'lang=ru'
                document.cookie = "lang=ru"
              } else {
                this.language = 'lang=en'
                document.cookie = "lang=en"
              }    
              this.render()
              // window.location.reload()

            }
            break
          default:
            if (this.shiftClick) {
              if (event.target.childNodes[1]) {
                this.shiftClick = false
                this.elementSwitch({key:event.target.childNodes[1].innerText})
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
              } else {
                this.elementSwitch(ev)
                this.shiftClick = false
                document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
              }
            } else {
              this.elementSwitch(ev)
            }
            add.classList.add('press')
            setTimeout(() => {
              add.classList.remove('press')
            }, 100);
            document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
            document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
            document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
            break;
        }
      })
    })
    const list = document.querySelector('.wrapper')
    list.addEventListener('keydown', event => {
      if (this.capsLock === null) this.getCapsLock(event)
      event.preventDefault()
      if (event.getModifierState('CapsLock')) {
        const cl = document.querySelector('#caps-lock')
        if (!cl.classList.contains('press')) {
          cl.classList.add('press')
        }
        this.capsLock = true
      }
      document.querySelectorAll('.board__line__key').forEach(item => {
        if (item.dataset.code === event.code) {
          item.classList.add('press')
          if (item.children.length) {
            this.elementSwitch({key:item.childNodes[1].innerText})
          } else {
            this.elementSwitch(item.dataset)
          }
        }
      })
      if(event.key === 'Control') {
        this.controlClick = true
      }
      if(event.key === 'Meta') {
        this.metaClick = true
      }
      if(event.key === 'Shift') {
        this.shiftClick = true
        if (this.altClick) {
          if (this.language === 'lang=en') {
            this.language = 'lang=ru'
            document.cookie = "lang=ru"
          } else {
            this.language = 'lang=en'
            document.cookie = "lang=en"
          }
          this.render()
          this.altClick = false
          this.shiftClick = false
        } 
      }
      if(event.key === 'Alt') {
        this.altClick = true
        if (this.shiftClick) {
          if (this.language === 'lang=en') {
            this.language = 'lang=ru'
            document.cookie = "lang=ru"
          } else {
            this.language = 'lang=en'
            document.cookie = "lang=en"
          }
          this.render()
          this.altClick = false
          this.shiftClick = false
        } 
      }
    })
    list.addEventListener('keyup', event => {
      event.preventDefault()
      if(event.key === 'Shift') {
        this.shiftClick = false
        document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
      } else if(event.key === 'Meta') {
        this.metaClick = false
        document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
      } else if(event.key === 'Alt') {
        this.altClick = false
        document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
      } else if(event.key === 'Control') {
        this.controlClick = false
        document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
      } else if (event.key === 'CapsLock') {
        const cl = document.querySelector('#caps-lock')
        if (cl.classList.contains('press')) {
          cl.classList.remove('press')
        }
        this.capsLock = false
      } else {
        document.querySelectorAll('.board__line__key').forEach(item => {
          if (event.code == 'CapsLock') return
          if (item.dataset.code === event.code) {
            item.classList.remove('press')
          }
        })
      }
    })
  }
  getCapsLock(data){
    if(data.shiftKey || data.which < 41) return
    const ind = data.key.charCodeAt(0)
    if (ind >=65 && ind <= 90) {
      this.capsLock = true
    } 
    if (ind >=97 && ind <= 122) {
      this.capsLock = false
    } 
  }
  templateSub(sub) {
    const itemKeySub = document.createElement('div')
    itemKeySub.classList.add('board__line__key__sub')
    itemKeySub.dataset.value = sub.val
    itemKeySub.innerHTML = sub.text
    return itemKeySub
  }
  templateRow(line) {
    const tempLineRow = line.map(item => {
      const itemKey = document.createElement('div')
      if (Object.hasOwnProperty.call(item, 'arrow')) {
        itemKey.classList.add('board__line__key__arrow')
        itemKey.innerHTML = item.html
        return itemKey
      }
      itemKey.classList.add('board__line__key')
      itemKey.dataset.value = item.value
      itemKey.dataset.code = item.code
      itemKey.innerHTML = item.text

      if (Object.hasOwnProperty.call(item, 'class')) {
        itemKey.classList.add(item.class)
      }
      if (Object.hasOwnProperty.call(item, 'id')) {
        itemKey.id = item.id
      }
      if (Object.hasOwnProperty.call(item, 'subValue')) {
        itemKey.appendChild(this.templateSub({val:item.subValue, text:item.subText}))
      }
      return itemKey
    })
    return tempLineRow
  }
  templateArray(arr) {
    return arr.map(line => {
      const boardLine = document.createElement('div')
      boardLine.classList.add('board__line')
      const templareRows = this.templateRow(line)
      templareRows.forEach(element => {
        boardLine.appendChild(element)
      })
      return boardLine
    })
  }
  render() {
    const doc = document.querySelector('.body')
    doc.innerHTML = ''
    const wrap = document.createElement('div')
    wrap.classList.add('wrapper')
    //textarea
    const divTextarea = document.createElement('div')
    divTextarea.classList.add('textarea')
    const textarea = document.createElement('textarea')
    textarea.name = 'text'
    textarea.id = 'text-area'
    textarea.autofocus = true
    divTextarea.appendChild(textarea)
    const language = document.createElement('div')
    language.classList.add('textarea__info')
    language.id = 'language'
    language.innerText = this.language === 'lang=en' ? 'EN, change Shift + Alt, keyboard from MacBook' : 'RU, change Shift + Alt, keyboard from MacBook'
    divTextarea.appendChild(language)
    //keyboard
    const key = document.createElement('div')
    key.classList.add('key')
    const board = document.createElement('div')
    board.classList.add('board')
    if (document.cookie === 'lang=en') {
      const templateArrays = this.templateArray(this.templateArrayEn)
      templateArrays.forEach(element => {
        board.appendChild(element)
      })
    } else if (document.cookie === 'lang=ru') {
      const templateArrays = this.templateArray(this.templateArrayRu)
      templateArrays.forEach(element => {
        board.appendChild(element)
      })
    } else {
      const templateArrays = this.templateArray(this.templateArrayEn)
      templateArrays.forEach(element => {
        board.appendChild(element)
      })
    }
    key.appendChild(board)
    wrap.appendChild(divTextarea)
    wrap.appendChild(key)
    doc.appendChild(wrap)
    this.language = document.cookie
    this.textArea = document.getElementById('text-area')
    this.textArea.focus()
    setTimeout(() => {
      this.listener()
    }, 500);
  }
}