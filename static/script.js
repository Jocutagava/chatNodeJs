// alert('Welcome to my chat');
const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const message = document.getElementById('messages')

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
      socket.emit('new_message', input.value);
      input.value = '';
    }
});
socket.on('message', function(a){
    var item = document.createElement('li')
     item.textContent = a
     message.appendChild(item)
  window.scrollTo(0,document.body.scrollHeight)
})