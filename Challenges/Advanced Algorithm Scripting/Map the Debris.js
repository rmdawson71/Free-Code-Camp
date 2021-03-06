/* Map the Debris

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Code by: Randell Dawson
http://www.freecodecamp.com/rmdawson71
*/

function transform(alt) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return Math.round(2*Math.PI*Math.pow(Math.pow(earthRadius+alt,3)/GM,0.5));
}

function orbitalPeriod(arr) {
  return arr.reduce( (transArr, obj) =>
    transArr.concat({obj.name, orbitalPeriod: transform(obj.avgAlt)}), []);
}


const orbitalPeriod = arr => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const calcOrbitalPeriod = alt => Math.round(2* Math.PI * Math.pow(Math.pow(earthRadius + alt, 3) / GM, 0.5));
  return arr.map(obj => ( {name: obj.name, orbitalPeriod: calcOrbitalPeriod(obj.avgAlt)} ));
};

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
