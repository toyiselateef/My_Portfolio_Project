import basicAuth from "basic-auth";

var BasicAuthentication = function (request, response, next) {
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
    user.pass === "Predator09876543211234567890"
  ) {
    return next();
  } else {
    return unauthorized(response);
  }
};

export default BasicAuthentication;
