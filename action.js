const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const fileName = urlParams.get('file');
const visibleAlert = urlParams.get('alert');
console.log(type);
console.log(fileName);

if (type == "cookieDialog") {
  if (fileName == "winnicookies.cookie") {
    if (visibleAlert == "true") {
      alert(type);
      alert(fileName);
    }
    else {
       console.log(type);
      console.log(fileName);
    }
    console.log("Cookie Visible Now!!!");
    console.log(type);
    console.log(fileName);
  }
}
