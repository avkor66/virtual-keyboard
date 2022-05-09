import Keyboard from './Keyboard.js'
if (!document.cookie) document.cookie = 'lang=en'
document.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard()
  keyboard.render()
})