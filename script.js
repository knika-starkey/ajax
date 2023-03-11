function loadVinyls() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "vinyl.json", true);
  xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState != 4) return;
    if (xhttp.status != 200) {
      alert(xhttp.status + ": " + xhr.statusText);
    } else {
      let vinyls = JSON.parse(xhttp.responseText);
      insertVinyls(vinyls);
    }
  };
}

function insertVinyls(vinyls) {
  let str = `<div class="wrap">`;
  for (let i = 0; i < vinyls.length; i++) {
    str += `<div class="vinylWrap">`;
    str += `<div class="image"><img src="${vinyls[i].imageCover}" /></div>`;
    str += `<h2>${vinyls[i].name}</h2>`;
    str += `<p>${vinyls[i].author}</p>`;
    if (vinyls[i].stocked) str += `<p><strong>${vinyls[i].price}</strong></p>`;
    else str += `<p><s>${vinyls[i].price}</s></p>`;

    str += `</div>`;
  }

  str += `</div>`;
  document.getElementById("vinyls").innerHTML = str;
}
