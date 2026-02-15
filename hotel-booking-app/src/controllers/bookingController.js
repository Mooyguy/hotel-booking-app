class BookingController {
    constructor(db) {
        this.db = db;
    }

    async submitBooking(req, res) {
        const { name, email, roomType, checkInDate, checkOutDate } = req.body;

        try {
            const booking = {
                name,
                email,
                roomType,
                checkInDate,
                checkOutDate
            };

            await this.db.run(`INSERT INTO bookings (name, email, roomType, checkInDate, checkOutDate) VALUES (?, ?, ?, ?, ?)`, 
                [booking.name, booking.email, booking.roomType, booking.checkInDate, booking.checkOutDate]);

            res.redirect('/booking-confirmation');
        } catch (error) {
            console.error("Error submitting booking:", error);
            res.status(500).send("Internal Server Error");
        }
    }

    async getBookingConfirmation(req, res) {
        const { name, email, roomType, checkInDate, checkOutDate } = req.query;

        res.render('booking_confirmation', {
            name,
            email,
            roomType,
            checkInDate,
            checkOutDate
        });
    }
}

module.exports = BookingController;