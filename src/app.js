class Keyboard {
    
    constructor() {
      this.capsLock = null
      this.shiftClick = false
      this.controlClick = false
      this.altClick = false
      this.metaClick = false
      this.language = document.cookie
      this.textArea 
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
    arrowUp() {
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
    arrowDown() {
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
                  document.querySelectorAll('.meta').forEach(item => item.classList.remove('press'))
                }, 100);
                this.altClick = false
                this.shiftClick = false
                this.controlClick = false
                console.log('смена раскладки');
                if (this.language === 'lang=en') {
                  this.language = 'lang=ru'
                  document.cookie = "lang=ru"
                } else {
                  this.language = 'lang=en'
                  document.cookie = "lang=en"
                }    
                this.render()

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
                console.log('смена раскладки');
                if (this.language === 'lang=en') {
                  this.language = 'lang=ru'
                  document.cookie = "lang=ru"
                } else {
                  this.language = 'lang=en'
                  document.cookie = "lang=en"
                }    
                this.render()

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
        if(event.key === 'Meta') {
          this.metaClick = true
        }

        if(event.key === 'Shift') {
          this.shiftClick = true
          if (this.altClick) {
            console.log('смена раскладки');
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
            console.log('смена раскладки');
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

      document.addEventListener('keyup', event => {
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
        console.log(data.key, ind, 'return true');
        this.capsLock = true
      } 
      if (ind >=97 && ind <= 122) {
        console.log(data.key, ind, 'return false');
        this.capsLock = false
      } 
    }
    render() {

      const templateEn = `
      <div class="board__line">
          <div class="board__line__key" data-code="Backquote" data-value="§">§
              <div class="board__line__key__sub" data-value="±">&plusmn;</div>
          </div>
          <div class="board__line__key" data-code="Digit1" data-value="1">1
              <div class="board__line__key__sub" data-value="!">!</div>
          </div>
          <div class="board__line__key" data-code="Digit2" data-value="2">2
              <div class="board__line__key__sub" data-value="@">@</div>
          </div>
          <div class="board__line__key" data-code="Digit3" data-value="3">3
              <div class="board__line__key__sub" data-value="#">#</div>
          </div>
          <div class="board__line__key" data-code="Digit4" data-value="4">4
              <div class="board__line__key__sub" data-value="$">$</div>
          </div>
          <div class="board__line__key" data-code="Digit5" data-value="5">5
              <div class="board__line__key__sub" data-value="%">%</div>
          </div>
          <div class="board__line__key" data-code="Digit6" data-value="6">6
              <div class="board__line__key__sub" data-value="^">^</div>
          </div>
          <div class="board__line__key" data-code="Digit7" data-value="7">7
              <div class="board__line__key__sub" data-value="&">&</div>
          </div>
          <div class="board__line__key" data-code="Digit8" data-value="8">8
              <div class="board__line__key__sub" data-value="*">*</div>
          </div>
          <div class="board__line__key" data-code="Digit9" data-value="9">9
              <div class="board__line__key__sub" data-value="(">(</div>
          </div>
          <div class="board__line__key" data-code="Digit0" data-value="0">0
              <div class="board__line__key__sub" data-value=")">)</div>
          </div>
          <div class="board__line__key" data-code="Minus" data-value="-">-
              <div class="board__line__key__sub" data-value="_">_</div>
          </div>
          <div class="board__line__key" data-code="Equal" data-value="=">=
              <div class="board__line__key__sub" data-value="+">+</div>
          </div>
          <div class="board__line__key backspace" data-code="Backspace" data-value="Backspace">Backspace</div>
      </div>
      <div class="board__line">
          <div class="board__line__key tabulation" data-code="Tab" data-value="Tab">Tab</div>
          <div class="board__line__key" data-code="KeyQ" data-value="q">Q</div>
          <div class="board__line__key" data-code="KeyW" data-value="w">W</div>
          <div class="board__line__key" data-code="KeyE" data-value="e">E</div>
          <div class="board__line__key" data-code="KeyR" data-value="r">R</div>
          <div class="board__line__key" data-code="KeyT" data-value="t">T</div>
          <div class="board__line__key" data-code="KeyY" data-value="y">Y</div>
          <div class="board__line__key" data-code="KeyU" data-value="u">U</div>
          <div class="board__line__key" data-code="KeyI" data-value="i">I</div>
          <div class="board__line__key" data-code="KeyO" data-value="o">O</div>
          <div class="board__line__key" data-code="KeyP" data-value="p">P</div>
          <div class="board__line__key" data-code="BracketLeft" data-value="[">[
            <div class="board__line__key__sub" data-value="{">{</div>          
            </div>
          <div class="board__line__key" data-code="BracketRight" data-value="]">]
            <div class="board__line__key__sub" data-value="}">}</div>          
          </div>
          <div class="board__line__key delete" data-code="Delete" data-value="Delete">Del</div>
      </div>
      <div class="board__line">
          <div class="board__line__key" id="caps-lock" data-code="CapsLock" data-value="CapsLock">Caps&nbsp;Lock</div>
          <div class="board__line__key" data-code="KeyA" data-value="a">A</div>
          <div class="board__line__key" data-code="KeyS" data-value="s">S</div>
          <div class="board__line__key" data-code="KeyD" data-value="d">D</div>
          <div class="board__line__key" data-code="KeyF" data-value="f">F</div>
          <div class="board__line__key" data-code="KeyG" data-value="g">G</div>
          <div class="board__line__key" data-code="KeyH" data-value="h">H</div>
          <div class="board__line__key" data-code="KeyJ" data-value="j">J</div>
          <div class="board__line__key" data-code="KeyK" data-value="k">K</div>
          <div class="board__line__key" data-code="KeyL" data-value="l">L</div>
          <div class="board__line__key" data-code="Semicolon" data-value=";">;
              <div class="board__line__key__sub" data-value=":">:</div>
          </div>
          <div class="board__line__key" data-code="Quote" data-value="'">&prime;
              <div class="board__line__key__sub" data-value='"'>&quot;</div>
          </div>
          <div class="board__line__key" data-code="Backslash" data-value="\\">\\
              <div class="board__line__key__sub" data-value="|">|</div>
          </div>
          <div class="board__line__key enter" data-code="Enter" data-value="Enter">&#8629;</div>
      </div>
      <div class="board__line">
          <div class="board__line__key shift" data-code="ShiftLeft" data-value="Shift">Shift</div>
          <div class="board__line__key" data-code="IntlBackslash" data-value="\`">&#96;
              <div class="board__line__key__sub" data-value="~">~</div>
          </div>
          <div class="board__line__key" data-code="KeyZ" data-value="z">Z</div>
          <div class="board__line__key" data-code="KeyX" data-value="x">X</div>
          <div class="board__line__key" data-code="KeyC" data-value="c">C</div>
          <div class="board__line__key" data-code="KeyV" data-value="v">V</div>
          <div class="board__line__key" data-code="KeyB" data-value="b">B</div>
          <div class="board__line__key" data-code="KeyN" data-value="n">N</div>
          <div class="board__line__key" data-code="KeyM" data-value="m">M</div>
          <div class="board__line__key" data-code="Comma" data-value=",">,
              <div class="board__line__key__sub" data-value="<">&lt;</div>
          </div>
          <div class="board__line__key" data-code="Period" data-value=".">.
              <div class="board__line__key__sub" data-value=">">&gt;</div>
          </div>
          <div class="board__line__key" data-code="Slash" data-value="/">/
              <div class="board__line__key__sub" data-value="?">?</div>
          </div>
          <div class="board__line__key shift" data-code="ShiftRight" data-value="Shift">Shift</div>
      </div>
      <div class="board__line">
          <div class="board__line__key control" data-code="ControlLeft" data-value="Control">Ctrl</div>
          <div class="board__line__key alt" data-code="AltLeft" data-value="Alt">Alt</div>
          <div class="board__line__key meta" data-code="MetaLeft" data-value="Meta">Command</div>
          <div class="board__line__key space" data-code="Space" data-value=" "></div>
          <div class="board__line__key meta" data-code="MetaRight" data-value="Meta">Command</div>
          <div class="board__line__key alt" data-code="AltRight" data-value="Alt">Alt</div>
          <div class="board__line__key__arrow">
              <div class="board__line__key__arrow__start">
                  <div class="board__line__key board__line__key__arrow__start__up" data-code="ArrowUp" data-value="ArrowUp">&#9650;</div>
              </div>
              <div class="board__line__key__arrow__end">
                  <div class="board__line__key board__line__key__arrow__end__left" data-code="ArrowLeft" data-value="ArrowLeft">&#9668;</div>
                  <div class="board__line__key board__line__key__arrow__end__down" data-code="ArrowDown" data-value="ArrowDown">&#9660;</div>
                  <div class="board__line__key board__line__key__arrow__end__right" data-code="ArrowRight" data-value="ArrowRight">&#9658;</div>
              </div>
          </div>
      </div>
      `
      const templateRu = `
              <div class="board__line">
                  <div class="board__line__key" data-code="Backquote" data-value=">">&gt;
                      <div class="board__line__key__sub" data-value="<">&lt;</div>
                  </div>
                  <div class="board__line__key" data-code="Digit1" data-value="1">1
                      <div class="board__line__key__sub" data-value="!">!</div>
                  </div>
                  <div class="board__line__key" data-code="Digit2" data-value="2">2
                      <div class="board__line__key__sub" data-value='"'>&quot;</div>
                  </div>
                  <div class="board__line__key" data-code="Digit3" data-value="3">3
                      <div class="board__line__key__sub" data-value="№">№</div>
                  </div>
                  <div class="board__line__key" data-code="Digit4" data-value="4">4
                      <div class="board__line__key__sub" data-value="%">%</div>
                  </div>
                  <div class="board__line__key" data-code="Digit5" data-value="5">5
                      <div class="board__line__key__sub" data-value=":">:</div>
                  </div>
                  <div class="board__line__key" data-code="Digit6" data-value="6">6
                      <div class="board__line__key__sub" data-value=",">,</div>
                  </div>
                  <div class="board__line__key" data-code="Digit7" data-value="7">7
                      <div class="board__line__key__sub" data-value=".">.</div>
                  </div>
                  <div class="board__line__key" data-code="Digit8" data-value="8">8
                      <div class="board__line__key__sub" data-value=";">;</div>
                  </div>
                  <div class="board__line__key" data-code="Digit9" data-value="9">9
                      <div class="board__line__key__sub" data-value="(">(</div>
                  </div>
                  <div class="board__line__key" data-code="Digit0" data-value="0">0
                      <div class="board__line__key__sub" data-value=")">)</div>
                  </div>
                  <div class="board__line__key" data-code="Minus" data-value="-">-
                      <div class="board__line__key__sub" data-value="_">_</div>
                  </div>
                  <div class="board__line__key" data-code="Equal" data-value="=">=
                      <div class="board__line__key__sub" data-value="+">+</div>
                  </div>
                  <div class="board__line__key backspace" data-code="Backspace" data-value="Backspace">Backspace</div>
              </div>
              <div class="board__line">
                  <div class="board__line__key tabulation" data-code="Tab" data-value="Tab">Tab</div>
                  <div class="board__line__key" data-code="KeyQ" data-value="й">Й</div>
                  <div class="board__line__key" data-code="KeyW" data-value="ц">Ц</div>
                  <div class="board__line__key" data-code="KeyE" data-value="у">У</div>
                  <div class="board__line__key" data-code="KeyR" data-value="к">К</div>
                  <div class="board__line__key" data-code="KeyT" data-value="е">Е</div>
                  <div class="board__line__key" data-code="KeyY" data-value="н">Н</div>
                  <div class="board__line__key" data-code="KeyU" data-value="г">Г</div>
                  <div class="board__line__key" data-code="KeyI" data-value="ш">Ш</div>
                  <div class="board__line__key" data-code="KeyO" data-value="щ">Щ</div>
                  <div class="board__line__key" data-code="KeyP" data-value="з">З</div>
                  <div class="board__line__key" data-code="BracketLeft" data-value="х">Х</div>
                  <div class="board__line__key" data-code="BracketRight" data-value="ъ">Ъ</div>
                  <div class="board__line__key delete" data-code="Delete" data-value="Delete">Del</div>
              </div>
              <div class="board__line">
                  <div class="board__line__key" id="caps-lock" data-code="CapsLock" data-value="CapsLock">Caps&nbsp;Lock</div>
                  <div class="board__line__key" data-code="KeyA" data-value="ф">Ф</div>
                  <div class="board__line__key" data-code="KeyS" data-value="ы">Ы</div>
                  <div class="board__line__key" data-code="KeyD" data-value="в">В</div>
                  <div class="board__line__key" data-code="KeyF" data-value="а">А</div>
                  <div class="board__line__key" data-code="KeyG" data-value="п">П</div>
                  <div class="board__line__key" data-code="KeyH" data-value="р">Р</div>
                  <div class="board__line__key" data-code="KeyJ" data-value="о">О</div>
                  <div class="board__line__key" data-code="KeyK" data-value="л">Л</div>
                  <div class="board__line__key" data-code="KeyL" data-value="д">Д</div>
                  <div class="board__line__key" data-code="Semicolon" data-value="ж">Ж</div>
                  <div class="board__line__key" data-code="Quote" data-value="э">Э</div>
                  <div class="board__line__key" data-code="Backslash" data-value="ё">Ё</div>
                  <div class="board__line__key enter" data-code="Enter" data-value="Enter">&#8629;</div>
              </div>
              <div class="board__line">
                  <div class="board__line__key shift" data-code="ShiftLeft" data-value="Shift">Shift</div>
                  <div class="board__line__key" data-code="IntlBackslash" data-value="]">]
                      <div class="board__line__key__sub" data-value="[">[</div>
                  </div>
                  <div class="board__line__key" data-code="KeyZ" data-value="я">Я</div>
                  <div class="board__line__key" data-code="KeyX" data-value="ч">Ч</div>
                  <div class="board__line__key" data-code="KeyC" data-value="с">С</div>
                  <div class="board__line__key" data-code="KeyV" data-value="м">М</div>
                  <div class="board__line__key" data-code="KeyB" data-value="и">И</div>
                  <div class="board__line__key" data-code="KeyN" data-value="т">Т</div>
                  <div class="board__line__key" data-code="KeyM" data-value="ь">Ь</div>
                  <div class="board__line__key" data-code="Comma" data-value="б">Б</div>
                  <div class="board__line__key" data-code="Period" data-value="ю">Ю</div>
                  <div class="board__line__key" data-code="Slash" data-value="/">/
                      <div class="board__line__key__sub" data-value="?">?</div>
                  </div>
                  <div class="board__line__key shift" data-code="ShiftRight" data-value="Shift">Shift</div>
              </div>
              <div class="board__line">
                  <div class="board__line__key control" data-code="ControlLeft" data-value="Control">Ctrl</div>
                  <div class="board__line__key alt" data-code="AltLeft" data-value="Alt">Alt</div>
                  <div class="board__line__key meta" data-code="MetaLeft" data-value="Meta">Command</div>
                  <div class="board__line__key space" data-code="Space" data-value=" "></div>
                  <div class="board__line__key meta" data-code="MetaRight" data-value="Meta">Command</div>
                  <div class="board__line__key alt" data-code="AltRight" data-value="Alt">Alt</div>
                  <div class="board__line__key__arrow">
                      <div class="board__line__key__arrow__start">
                          <div class="board__line__key board__line__key__arrow__start__up" data-code="ArrowUp" data-value="ArrowUp">&#9650;</div>
                      </div>
                      <div class="board__line__key__arrow__end">
                          <div class="board__line__key board__line__key__arrow__end__left" data-code="ArrowLeft" data-value="ArrowLeft">&#9668;</div>
                          <div class="board__line__key board__line__key__arrow__end__down" data-code="ArrowDown" data-value="ArrowDown">&#9660;</div>
                          <div class="board__line__key board__line__key__arrow__end__right" data-code="ArrowRight" data-value="ArrowRight">&#9658;</div>
                      </div>
                  </div>
              </div>
      `

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
      //keyboard
      const key = document.createElement('div')
      key.classList.add('key')
      const board = document.createElement('div')
      board.classList.add('board')
      if (document.cookie === 'lang=en') {
        board.innerHTML = templateEn
      } else if (document.cookie === 'lang=ru') {
        board.innerHTML = templateRu
      } else {
        board.innerHTML = templateEn
      }
      key.appendChild(board)

      wrap.appendChild(divTextarea)
      wrap.appendChild(key)
      doc.appendChild(wrap)
      // doc.innerHTML = template
      this.language = document.cookie
      this.textArea = document.getElementById('text-area')

      setTimeout(() => {
        this.listener()
      }, 500);
    }
}

if (!document.cookie) document.cookie = 'lang=en'

if (document.cookie === 'lang=en') {
  console.log('en');
} else {
  console.log('rus');
}
document.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard()
  keyboard.render()
})

