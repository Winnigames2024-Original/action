const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const fileName = urlParams.get('file');
console.log(type);
console.log(fileName);

if (type == "cookieDialog") {
  if (fileName == "winnicookies.cookie") {
    alert(type);
    alert(fileName);
    console.log("Cookie Visible Now!!!");
    console.log(type);
    console.log(fileName);
  }
}
