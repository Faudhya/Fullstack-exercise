const db = require("../models");
const jwt = require("jsonwebtoken");
const event = db.Event;

module.exports = {
    createEvent: async (req, res) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(400).send("token unauthorized or expired");
        }

        try {
            const { name, date, venue, total_quota, price } = req.body;
            token = token.split(" ")[1];

            //mengambil id dari bearer token
            const verifiedUser = jwt.verify(token, "faud");
            console.log(verifiedUser);

            if (!name || !date || !venue || !total_quota || !price)
                throw "please complete your data";

            const result = await event.create({
                admin_id: verifiedUser.id,
                name,
                date,
                venue,
                total_quota,
                price,
            });

            res.status(200).send({
                status: true,
                data: result,
                message: "event successfully created",
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
};
