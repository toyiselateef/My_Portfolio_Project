import basicAuth from "basic-auth";

var BasicAuthentication2 = function (request, response, next) {
  function unauthorized(response) {
    response.set("WWW-Authenticate", "Basic realm=Authorization Required");
    return response.send(401);
  }

  var user = basicAuth(request);

  if (!user || !user.name || !user.pass) {
    return unauthorized(response);
  }

  if (
    user.name === "TrulyAmbitious" &&
    user.pass === "09876543211234567890Predator"
  ) {
    return next();
  } else {
    return unauthorized(response);
  }
};

export default BasicAuthentication2;
