const urlParams = new URLSearchParams(window.location.search);

let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
	alert('!!!');
  const redirectUrl = urlParams.get('url');
  window.location.href = redirectUrl
});
