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
    next();
  };

  exports.activeSession = (req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.contacts = req.session.contacts;
    next();
  };