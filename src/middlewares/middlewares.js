exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.redirect('/404/');
    }
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

  exports.loginErrors = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    console.log(res.locals.errors)
    next();
  };