const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const url_end = urlParams.get('url_end');

async function openUrlSiteOrPage(urlToRedirect) {
  await delay(3000); // Wait for 3 seconds
  window.location.href = urlToRedirect;
}

if (url_end == "?from=Winnigames2024-Original | Redirecter") {
  params.append('url', url);
  params.append('url_end', '?from=Winnigames2024+Service.Redirecter');
  const url4343 = 'https://winnigames2024-original.github.io/action/redirect?' + params.toString();
  openUrlSiteOrPage(url4343);
}
else {
  const full_url = url + url_end;
  openUrlSiteOrPage(full_url);
}
// https://winnigames2024-original.github.io/action/?type=redirect&url=https://example.com

