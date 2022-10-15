const mongo = require("mongoose");

mongo.connect(process.env.MONGO_URL);
exports.connect = () => {
    mongo.connection
        .once("open", function () {
            console.log("Mongodb connected");
        })
        .on("error", function (error) {
            console.log("Mongodb error:", error);
        });
}

