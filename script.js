function masquer_div(hiddendiv)
{
  if (document.querySelector('#hiddendiv').style.display == 'none') {
       document.querySelector('#hiddendiv').style.display = 'block';
  }
  else {
       document.querySelector('#hiddendiv').style.display = 'none';
  }
} 