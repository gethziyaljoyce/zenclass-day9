

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  loadPopulation(data);
}
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

function loadPopulation(data) {
  let sum = data.reduce(function (result, item) {
    return result + item.population;
  }, 0);
  console.log(sum);
}

