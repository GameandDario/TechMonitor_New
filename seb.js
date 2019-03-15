const getButton = document.getElementById('sendcontact')
const doStuff = document.getElementById('letMeDoStuff')
/// meh : const getTextAreas = document.getElementsByClassName('form-control')

getButton.addEventListener('click', function() {
    if(this.style.backgroundColor === 'pink') {
      this.style.backgroundColor = '';
      doStuff.innerHTML = 'Send';
    }      
    else {
      this.style.backgroundColor = 'pink';
      doStuff.innerHTML = 'Thanks for your feedback <3';
      getButton.style.opacity = '1';
      document.getElementById('davidDiv').style.display = "none";
    }      
  });

///// Main Text Area Color  /////
const setbg = (color) =>
{
document.getElementById("styledTextArea").style.background=color
};