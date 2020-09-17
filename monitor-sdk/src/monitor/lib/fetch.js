const constantMock = window.fetch;
 window.fetch = function() {
     // Get the parameter in arguments
     // Intercept the parameter here
    return constantMock.apply(this, arguments)
 }
