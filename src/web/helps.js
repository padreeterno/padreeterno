exports.cookieCreate = function(data, expire, path) {
  try {
    document.cookie = data.id + "=" + data.response + ";expires=" + new Date(expire).toUTCString() + ";path=" + path;
    return true;
  } catch (error) {
    if (error) {
      return false;
    }
  }
};
exports.cookieDelete = function( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
exports.localmemoriacrear = function(named, data) {
  window.localStorage.setItem(named, data);
  return;

};
exports.localmemoriabtener = function(named) {
  var result = localStorage.getItem(named);
  return new Promise(function(done,reject){
    result ? done(result) : reject({status : false})
  })
};
exports.cookieVerifi = function(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  //return false;
  return new Promise(function(done,reject){
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          const este = c.substring(name.length, c.length);
          done(este);
        }
      }
      reject({
          status : false
      })
  })

};
//ACCION DATOS
exports.makeRequest = function(url, method) {
  // Create the XHR request
  var request = new XMLHttpRequest();
  // Return it as a Promise
  return new Promise(function(resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function() {
      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        resolve(request);
      } else {
        // If failed
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };

    // Setup our HTTP request
    request.open("GET", url, true);
    //Set Header Method
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Server",window.location.host);
    // Send the request
    request.send();
  });
};
exports.makeposting = function(url, data, method) {
  // Create the XHR request
  var request = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise(function(resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function() {
      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        resolve(request);
      } else {
        // If failed
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };

    // Setup our HTTP request
    request.open("POST", url, true);
    //Set Header Method
    request.setRequestHeader("Content-Type", "application/json");
    // Send the request
    request.send(data);
  });
};
//HTML
exports.htmlEscape = function(str) {
    return String(str)
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/&copy;/g, '©')
            .replace(/&NTILDE;/g, 'Ñ')
            .replace(/&ntilde;/g, 'ñ')
            .replace(/&otilde;/g, 'ó')
            .replace(/>/g, '&gt;');
}
/*
.then(result => {
      if (!result) {
        throw Error("not found");
      }
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });
*/
