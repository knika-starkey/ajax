function loadBooks() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "books.json", true);
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState != 4) return;
    if (xhttp.status != 200) {
      alert(xhttp.status + ": " + xhttp.statusText);
    } else {
      let b = JSON.parse(xhttp.responseText);
      let str = "";
      for (let i = 0; i < b.length; i++) {
        for (let prop in b[i]) {
          str += b[i][prop] + " ";
        }
        str += "<br/>";
      }
      document.getElementById("books").innerHTML = str;
    }
  };
}
