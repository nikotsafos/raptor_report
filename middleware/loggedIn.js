module.exports = function(req, res, next){
  if(!req.user){
    req.flash('error', 'Yougottalogin');
    res.redirect('/auth/login');
  }
  else {
    next();
  }
}
