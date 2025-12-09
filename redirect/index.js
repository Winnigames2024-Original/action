const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('url');

if (type == "DontDeforeMeLeaveSoTired") {
  const redirectUrl = urlParams.get('url');
  window.location.href = "./redirect?url=" + redirectUrl
}
else {
  const redirectUrl = urlParams.get('url');
  window.location.href = redirectUrl
}

// https://goo.su/ATSGK
