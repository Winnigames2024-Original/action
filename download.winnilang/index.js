const urlParams = new URLSearchParams(window.location.search);
const urlDsd = urlParams.get('url');

function downloadButtonClick() {
  window.location.href = urlDsd;
}
