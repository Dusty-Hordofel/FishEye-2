const getUrlParameter = (parameterName) => {
  // retrieve parameter from url
  let parameters = new URLSearchParams(window.location.search);
  // check if parameter exists
  if (parameters.has(parameterName)) {
    return parameters.get(parameterName);
  }
  // return error message if parameter doesn't exist
  return `The ${parameterName} parameter doesn't exist!`;
};
