# FE-barbershop-booking

An app built for browsing, booking and paying for appointments with your local barber.

## Description

The app was built as a group project during the final phase of the Northcoders Software Development bootcamp which ran from October-22 to January-23. The goal was to built a fully-functioning software product using at least 2 new technologies that hadn’t been taught on the Bootcamp. These were chosen as MongoDB for the Back-end and React Native for the Front-end

The project ran over 3 weeks for the following phases :

- Week 1 - idea generation, spiking and RATs, task definition
- Week 2 - Back-end build using MongoDB. Start of Front-end design and build using React Native
- Week 3 - Front-end finalisation

The back-end is hosted

API's are hosted on cyclic. Check the server is up and running with the url :
https://rich-gold-basket-clam-cape.cyclic.app/api/health

## Getting Started

### Dependencies

React
React-native
React-navigation
Expo
Stripe
Axios
Date-fns
Dotenv
Formik
Yup
Lottie-react-native

### Installing

Fork and clone this repository for the front-end

Run `npm install` to install all dependencies

To run the app you will need to have one of the following already installed:
MacOS users: Xcode (search for Xcode on the app store or download from the [Apple developer website](https://developer.apple.com/xcode/))
Windows or Linux: [Android Studio](https://developer.android.com/studio)

### Executing the program

To start the app run `npm start` and choose an emulator to display the app (eg on macOS enter i to open an iOS emulator)

Browse appointments without logging in. To book and pay for an appointment you must log in.

Login as an existing user or create a new user

Login details
username | password
----------|----------
gs | password
nb | password
rn | password
rm | password

Select the date and time of the appointment

To pay using Stripe, the test credit card details are used:
Card Details | Input
Number | 4242 4242 4242 4242
Expiry | Any future month and year in the format MM/YY
CVC | Any 3 digit number
Postcode | Any UK postcode (or 5 digit number if country is USA)

## Help

## Authors

This app was made as a final project for the Northcoders full-stack software development bootcamp
The project team was :
Nasser Benashur
Robbie McDonough
Ryan Nolan
Gary Shaw @g4ry5haw
