class Keyboard {
    
    constructor(language) {
        this.language = language
        this.capsLock = null
        this.shiftClick = false
        this.controlClick = false
        this.altClick = false
        this.textArea = document.getElementById('text-area')
    }
    

    takeSymbol( symbol, upper) {
      console.log(upper);
      console.log(symbol);
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
      console.log(end);
      console.log(this.textArea.value.length);
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
    arrowUp(event) {
      const text = this.textArea.value.split('\n')
      if (text.length > 1) {
        let start = this.textArea.selectionStart
        let posX = 0
        let posY = 0
        let temp = start -1
        let flag = 0
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
    arrowDown(event) {
      const text = this.textArea.value.split('\n')
      if (text.length > 1) {
        let start = this.textArea.selectionStart
        let end = this.textArea.selectionEnd
        console.log(end);
        console.log(start);
        let posX = 0
        let posY = 0
        let temp = 0
        let flag = 0
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
          this.takeSymbol('\n', this.shiftClick ?? this.capsLock)
          break;
        case 'Tab':
          this.takeSymbol('\t', this.shiftClick ?? this.capsLock)
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
          this.takeSymbol(take.key ? take.key : take.value, this.shiftClick ?? this.capsLock)
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
                }, 100);
                this.altClick = false
                this.shiftClick = false
                this.controlClick = false
                console.log('смена раскладки');
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
                }, 100);
                this.shiftClick = false
                this.altClick = false
                this.controlClick = false
                console.log('смена раскладки');
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
              break;
          }
        })
      })
      document.addEventListener('keydown', event => {
        if (this.capsLock === null) this.getCapsLock(event)
        event.preventDefault()

        if (event.getModifierState('CapsLock')) {
          const cl = document.querySelector('#caps-lock')
          if (!cl.classList.contains('press')) {
            cl.classList.add('press')
          }
          this.capsLock = true
        } 
        this.elementSwitch(event)
        
        document.querySelectorAll('.board__line__key').forEach(item => (item.dataset.code === event.code) ? item.classList.add('press') : this.loop())
        
        if(event.key === 'Control') {
          this.controlClick = true
        }

        if(event.key === 'Shift') {
          this.shiftClick = true
          if (this.altClick) {
            console.log('смена раскладки');
            this.altClick = false
            this.shiftClick = false
          } 
        }
        
        if(event.key === 'Alt') {
          this.altClick = true
          if (this.shiftClick) {
            console.log('смена раскладки');
            this.altClick = false
            this.shiftClick = false
          } 
        }
      })

      document.addEventListener('keyup', event => {
        if(event.key === 'Shift') {
          this.shiftClick = false
          document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
        } 
        if(event.key === 'Alt') {
          this.altClick = false
          document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
        } 
        if(event.key === 'Control') {
          this.controlClick = false
          document.querySelectorAll('.control').forEach(item => item.classList.remove('press'))
        } 
        if (event.code == 'CapsLock') {
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
        console.log(data.key, ind, 'return true');
        this.capsLock = true
      } 
      if (ind >=97 && ind <= 122) {
        console.log(data.key, ind, 'return false');
        this.capsLock = false
      } 
    }

}

const keyboard = new Keyboard()
keyboard.listener()
