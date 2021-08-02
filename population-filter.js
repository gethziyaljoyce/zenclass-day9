

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  listCountryDetails(data);
}
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();



function listCountryDetails(data) {
  data.filter(dt => {
    if (dt.population <200000) {
      console.log(dt);
    }
  })}