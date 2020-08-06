const Event = require('../model/Event');

module.exports = {
  eventController: (req, res) => {
    const { firstName, lastName, email, date } = req.body.eventData;

    if (!firstName || !lastName || !email || !date) {
      return res.status(400).json({ error: "Incomplete request" })
    }

    const eventData = new Event({
      firstName,
      lastName,
      email,
      date
    });

    eventData.save((err, event) => {
      if (err) {
        return res.status(500).json({ error: err.message || "Erro while saving to DB" });
      }

      res.json(req.body.eventData);
    });
  }
}