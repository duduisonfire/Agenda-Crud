exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
      return res.redirect('/404');
    }
  };
  
  exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

  exports.messages = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.accountSuccess = req.flash('accountCreateSuccess');
    console.log(res.locals.errors)
    next();
  };