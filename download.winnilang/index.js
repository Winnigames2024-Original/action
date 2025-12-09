const urlParams = new URLSearchParams(window.location.search);
const urlDsd = urlParams.get('url');

const button = document.getElementById('downloadFileButton');

button.addEventListener('click', function() {
  console.log("Кнопка нажата через addEventListener!");
  document.body.style.backgroundColor = 'lightblue';
  window.location.href = urlDsd;
});
function downloadButtonClick() {
  window.location.href = urlDsd;
}
