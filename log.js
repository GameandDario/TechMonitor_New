const connect = document.getElementById('submitBtn')
const disconnect = document.getElementById('logOutBtn')
connect.addEventListener('click', function () {
  document.getElementById('loginBtn').classList.toggle('hidden')
  document.getElementById('logOutBtn').classList.toggle('hidden');
});

disconnect.addEventListener('click', function () {
  document.getElementById('loginBtn').classList.toggle('hidden');
  this.classList.toggle('hidden');
  alert("Vous vous etes deconnecté avec succes")
});