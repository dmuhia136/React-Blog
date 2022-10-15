const userModel = require("../model/user")
const rounds = 10;
const jwt = require("jsonwebtoken");
const tokenSecret = process.env.JWT_SECRECT;
const bcrypt = require("bcrypt");
function generateToken(user) {
    return jwt.sign(
        {
            data: user,
        },
        tokenSecret,
        { expiresIn: "90d" }
    );
}
exports.signup = async (req, res) => {
    console.log(req.body);
    try {
        var data = await userModel.find({ email: req.body.email });
        if (data.length != 0) {
            res.json({ status: false, message: "A user with that email already exists" })
        } else {
            bcrypt.hash(req.body.password, rounds, (error, hash) => {
                if (error) {
                    res.status(500).json({ error: "there was an error" });
                } else {
                    const newuser = new userModel({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        phoneNumber: req.body.phone
                    });
                    newuser
                        .save()
                        .then(async (user) => {
                            res.json({
                                status: true,
                                token: generateToken(user),
                                body: user,
                            });
                        })
                }
            });
        }

    } catch (error) {
        res.json({ status: false, message: error.message })
    }

}

exports.signin = async (req, res) => {
    try {
      userModel
        .findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
  
            res.json({ status: false, error: "No user with that email found" });
          } else {
            bcrypt.compare(req.body.password, user.password, async (error, match) => {
              if (error) {
                res.json({ status: false, message: error.message });
              } else if (match) {
                res.json({ status: true, token: generateToken(user), body: user });
              } else {
                res.status(403).json({ error: "password did not match" });
              }
            });
          }
        })
  
    } catch (error) {
      res.json({ status: false, message: error.message })
    }
  }