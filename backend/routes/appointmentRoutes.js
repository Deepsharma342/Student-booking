import express from 'express';
import Appointment from '../models/Appointment.js'; // now this works!

const router = express.Router();

// Book appointment
router.post('/book', async (req, res) => {
  console.log(req.body);

    try {
        const { student, teacher, date, time } = req.body;

        if (!student || !teacher || !date || !time) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const appointment = new Appointment({ student, teacher, date, time });
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked', appointment });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;
