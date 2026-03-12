const validateUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email, role: "admin" });

  // if user not found
  if (!user) {
    return res.render("auth/login", { error: "Invalid user" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  // if password wrong
  if (!isMatch) {
    return res.render("auth/login", { error: "Incorrect password" });
  }

  // login success
  req.session.user = user;

  res.redirect("/store");
};