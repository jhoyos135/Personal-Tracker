const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Customer = mongoose.model('customers')

module.exports = (app) => {

    app.post('/api/customers', requireLogin, async (req, res) => {
        const { firstname, lastname, email } = req.body;

        const customer = new Customer({
            _user: req.user.id,
            firstname: firstname,
            lastname: lastname,
            email: email

        });
        console.log(customer);

        try {
            
            await customer.save();
            const user = await req.user.save();
            res.send(user);

        } catch (err) {
            res.status(422).send(err);
        }
    })
}