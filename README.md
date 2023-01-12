# FE-barbershop-booking

An app built for browsing, booking and paying for appointments with your local barber.

## Description

The app was built as a group project during the final phase of the Northcoders Software Development bootcamp which ran from October-22 to January-23. The goal was to build a fully-functioning software product using at least 2 new technologies that hadn’t been taught on the Bootcamp. These were chosen as MongoDB for the back-end and React Native for the front-end

The project was phased over 3 weeks:

- Week 1 - idea generation, spiking and RATs, defining tasks on kanban board using Trello
- Week 2 - build the back-end using MongoDB. Start of the front-end build using React Native
- Week 3 - finalisation of the front-end

The front-end and back-end are in 2 separate repositories. The corresponding back-end repo can be accesed [here](https://github.com/g4ry5haw/BE-barbershop-booking).

The back-end incldues a hosted MongoDB Atlas database.

The API's are hosted on cyclic. You can check the server is up and running [here](https://rich-gold-basket-clam-cape.cyclic.app/api/health)

## Getting Started

### Dependencies

- React
- React-native
- React-navigation
- Expo
- Stripe
- Axios
- Date-fns
- Dotenv
- Formik
- Yup
- Lottie-react-native

### Installing

Fork and clone this repository for the front-end

Run `npm install` to install all dependencies

To run the app you will need to have one of the following already installed:

**MacOS users:** Xcode

> _search for Xcode on the app store or download from the [Apple developer website](https://developer.apple.com/xcode/)_

**Windows or Linux users:** [Android Studio](https://developer.android.com/studio)

### Pre-requisites for using your own back-end

If you wish to create your own back-end you will need to follow the instructions in the 'README.md` in the [back-end repo](https://github.com/g4ry5haw/BE-barbershop-booking).

You will also need to replace the `STRIPE_PUBLIC_KEY` in the file `app.js` with the Publishable key from your own [Stripe account](https://dashboard.stripe.com/register)

```javascript
const STRIPE_PUBLIC_KEY = "pk_test.....";
```

### Executing the program

To start the app run `npm start` and choose an emulator to display the app

> e.g. on macOS enter `i` to open an iOS emulator)

Users can select the _browse_ tab to view appointments without logging in.

To book and pay for an appointment you must log in as an existing user or create a new user.

Existing user login details that can be used :

| **username** | **password** |
| ------------ | :----------: |
| gs           |   password   |
| nb           |   password   |
| rn           |   password   |
| rm           |   password   |

To book an appointment and pay using Stripe, the test credit card details can be used:

| Card Details | Input                                             |
| ------------ | ------------------------------------------------- |
| Number       | 4242 4242 4242 4242                               |
| Expiry       | Any **future** month and year in the format MM/YY |
| CVC          | Any 3 digit number                                |
| Postcode     | Any UK postcode (or 5 digit number for USA)       |

## Authors

This app was made as a final project for the Northcoders full-stack software development bootcamp

The project team was :

- Nasser Benashur
- Robbie McDonough
- Ryan Nolan
- Gary Shaw
