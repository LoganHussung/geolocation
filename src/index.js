
function getGeo(){
  var x = new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve ({ lat: position.coords.latitude, long: position.coords.longitude
      })
    }, function(){
      reject ('error')
    });
  })
  return x;
};

getGeo().then(function(coords) {
  console.log('IF YOU DO NOT SEE ME IN CONSOLE, SOMETHING IS BROKEN');
  console.assert(typeof coords.lat === 'number');
  console.assert(typeof coords.long === 'number');
});
