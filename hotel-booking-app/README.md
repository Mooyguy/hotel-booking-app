# Hotel Booking Application

## Overview
This is a Node.js hotel booking application that allows users to view hotel rooms, make bookings, and manage their reservations. The application features a user-friendly interface and is built using Express.js, SQLite, and EJS for templating.

## Features
- Home page displaying a grid of hotel room images with prices and booking buttons.
- About Us page providing information about the hotel.
- Booking form page to capture user details and store them in a SQLite database.
- Booking confirmation page to display the submitted booking details.
- Privacy policy page outlining user data handling practices.

## Project Structure
```
hotel-booking-app
├── src
│   ├── app.js
│   ├── config
│   │   └── database.js
│   ├── routes
│   │   ├── index.js
│   │   ├── bookings.js
│   │   └── pages.js
│   ├── controllers
│   │   ├── bookingController.js
│   │   └── pageController.js
│   ├── models
│   │   └── booking.js
│   ├── db
│   │   ├── schema.sql
│   │   └── migrations
│   │       └── create_bookings_table.sql
│   ├── views
│   │   ├── layouts
│   │   │   └── main.ejs
│   │   ├── index.ejs
│   │   ├── about.ejs
│   │   ├── booking_form.ejs
│   │   ├── booking_confirmation.ejs
│   │   └── privacy.ejs
│   └── public
│       ├── css
│       │   └── styles.css
│       ├── js
│       │   └── main.js
│       └── images
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hotel-booking-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Database
The application uses SQLite for data storage. The database schema and migrations are located in the `src/db` directory.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.