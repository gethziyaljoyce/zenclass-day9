





var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  currency(data);
}
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();

function currency(data) {
  data.filter(dt => {
    dt.currencies.filter((cur) => {
      if(cur.name=="United States dollar"){
        console.log(dt.name);
      }
    })
  
  })
}