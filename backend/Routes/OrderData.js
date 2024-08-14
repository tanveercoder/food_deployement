const express = require('express');
const router = express.Router();
const Order = require('../models/Orders'); // Ensure correct path to your model

router.post('/OrderData', async (req, res) => {
    const { email, order_data } = req.body;

    if (!email || !order_data || order_data.length === 0) {
        return res.status(400).json({ success: false, message: "Missing email or order data" });
    }

    try {
        let data = order_data;
        await data.splice(0, 0, { order_date: new Date().toISOString() }); // Use ISO format for date

        let eId = await Order.findOne({ email });

        if (!eId) {
            await Order.create({
                email,
                order_data: [data]
            });
            return res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email },
                { $push: { order_data: data } }
            );
            return res.json({ success: true });
        }
    } catch (error) {
        console.error("Server Error:", error.message);
        return res.status(500).send("Server Error: " + error.message);
    }
});

router.post('/myorderData', async (req, res) => {
    try {
        console.log(req.body.email);
        let eId = await Order.findOne({ 'email': req.body.email });
        if (!eId) {
            return res.status(404).json({ success: false, message: "No orders found for this email" });
        }
        // Log the fetched order data
        console.log('Fetched order data:', eId);
        res.json(eId);
    } catch (error) {
        console.error("Error fetching order data:", error.message);
        res.status(500).send("Error: " + error.message);
    }
});

module.exports = router;
