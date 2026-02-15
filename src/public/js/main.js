document.addEventListener('DOMContentLoaded', () => {
    const bookingButtons = document.querySelectorAll('.booking-button');

    bookingButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const roomId = event.target.dataset.roomId;
            window.location.href = `/booking_form?roomId=${roomId}`;
        });
    });
});