const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

alert(url);
window.location.href = url;



// https://winnigames2024-original.github.io/action/?type=redirect&url=https://example.com

