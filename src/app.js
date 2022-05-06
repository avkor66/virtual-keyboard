class Keyboard {
    
    constructor(language) {
        this.language = language
        this.capsLock = null
        this.shiftClick = false
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

      } else {
        this.textArea.selectionEnd = 0
        this.textArea.selectionStart = 0
      }
    }
    arrowDown(event) {
      const text = this.textArea.value.split('\n')
      if (text.length > 1) {

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
    listener() {
        const key = document.querySelectorAll('.board__line__key')
        key.forEach(item => {
            item.addEventListener('click', event => {

              this.textArea.focus()
              const add = event.currentTarget
              const ev = event.target.dataset 

              if (ev.code === 'CapsLock') {                
                if(this.capsLock) {
                  this.capsLock = false
                  document.querySelector('#caps-lock').classList.remove('press')
                  console.log(false);
                } else {
                  this.capsLock = true
                  document.querySelector('#caps-lock').classList.add('press')
                  console.log(true);
                }
              } else if (ev.code === 'ShiftLeft' || ev.code === 'ShiftRight') {
                if(this.shiftClick) {
                  document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                  // event.target.classList.remove('press')
                  this.shiftClick = false
                } else {
                  if(!event.target.classList.contains('press')) {
                    document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                    event.target.classList.add('press')
                  }
                  this.shiftClick = true
                }
              } else {
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
              }
              if(ev.value === 'Alt') {
                if (this.shiftClick) {
                  console.log('смена раскладки');
                  add.classList.add('press')
                  setTimeout(() => {
                    document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
                    document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
                  }, 100);
                  this.shiftClick = false
                }
              }
    
            })
        })        
        document.addEventListener('keydown', event => {
          if (this.capsLock === null) this.getCapsLock(event)
          event.preventDefault()
          if(event.key === 'Shift') this.shiftClick = true
          if (event.getModifierState('CapsLock')) {
            const cl = document.querySelector('#caps-lock')
            if (!cl.classList.contains('press')) {
              cl.classList.add('press')
            }
            this.capsLock = true
          } 
          this.elementSwitch(event)

          document.querySelectorAll('.board__line__key').forEach(item => {
            if (item.dataset.code === event.code) {
              item.classList.add('press')
            }
          })
          if(event.key === 'Alt') {
            if (this.shiftClick) {
              document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
              document.querySelectorAll('.alt').forEach(item => item.classList.remove('press'))
              console.log('смена раскладки');
            }
          }
        })

        document.addEventListener('keyup', event => {
          
          if(event.key === 'Shift') {
            this.shiftClick = false
            document.querySelectorAll('.shift').forEach(item => item.classList.remove('press'))
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
