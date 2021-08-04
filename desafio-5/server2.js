function random(min, max, decimalPlaces) {
  var rand =
    Math.random() < 0.5
      ? (1 - Math.random()) * (max - min) + min
      : Math.random() * (max - min) + min; // could be min or max or anything in between
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand * power) / power;
}

const http = require("http");
const { url } = require("inspector");

http
  .createServer((req, resp) => {
    let obj = [];

    for (let i = 0; i < 5; i++) {
      obj.push({
        id: random(1, 10, 0),
        title: `Producto   ${random(1, 10, 0)}`,
        price: random(0.0, 9999.99, 2),
        thumbnail: `Foto   ${random(1, 10, 0)}`,
      });
    }

    resp.end(`${JSON.stringify(obj)}`);
  })
  .listen(3500, function () {
    console.log(this.address().port);
  });
