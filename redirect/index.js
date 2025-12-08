const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

setTimeout(() => {
  window.location.href = url;
}, 2000); // 2000 milliseconds = 2 seconds



// https://winnigames2024-original.github.io/action/?type=redirect&url=https://example.com

