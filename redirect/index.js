const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');

async function openUrlSiteOrPage(urlToRedirect) {
  await delay(3000); // Wait for 3 seconds
  window.location.href = urlToRedirect;
}


const full_url = url + "?Winnigames2024";
openUrlSiteOrPage(full_url);

// https://winnigames2024-original.github.io/action/?type=redirect&url=https://example.com

