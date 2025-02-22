# MERN Ecommerce

## Description

An ecommerce store built with MERN stack, and utilizes third party API's. This ecommerce store enable three main different flows or implementations:

1. Buyers browse the store categories, products and brands
2. Sellers or Merchants manage their own brand component
3. Admins manage and control the entire store components 

### Features:

  * Node provides the backend environment for this application
  * Express middleware is used to handle requests, routes
  * Mongoose schemas to model the application data
  * React for displaying UI components
  * Redux to manage application's state
  * Redux Thunk middleware to handle asynchronous redux actions

## Demo

The application is deployed on Render -> https://mern-ecommerce-ui.onrender.com/  
*Note:* Some requests may take longer, since we're hosting on render's free tier, therefore application is configured to sleep if inactive for a long period. 

An alternative is to use the version from the [original repo](https://github.com/mohamedsamara/mern-ecommerce), which is deployed on [Vercel](https://mern-store-gold.vercel.app).

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)

## Running with Docker

To run this project locally you can use docker compose provided in the repository. Here is a guide on how to run this project locally using docker compose.

Clone the repository
```
git clone https://github.com/mohamedsamara/mern-ecommerce.git
```

Edit the docker-compose.yml file and update the the values for MONGODB_URI and JWT_SECRET

Then simply start the docker compose:

```
docker compose build
docker compose up
```

## Running without docker

### Pre-requisites

- Node
- MongoDB

### Install

`npm install` in the project root will install dependencies in both `client` and `server`. [See package.json](package.json)

Some basic Git commands are:

```
git clone -b mot https://github.com/zecarrera/mern-ecommerce.git
cd ${directory_name}
npm install
```

### Environment Variables - ENV

Create `.env` file for both client and server. See examples:

[Frontend ENV](client/.env.example)

[Backend ENV](server/.env.example)

Set JWT_SECRET to a custom value (You can use an online tool to generate a new secret. Ex.: https://jwtsecret.com/generate)

### Start mongo database server

1 - Create a free [MongoDB Atlas Account](https://www.mongodb.com/)  
2 - Configure your cluster and your application user  
3 - Add your IP to the network whitelist  
4 - Set your username and password in the MONGODB_URI on the .env server file  
Example `mongodb+srv://<db_username>:<db_password>@<clusterName>.mongodb.net/?retryWrites=true&w=majority`  
*MongoDB Compass:* If needed

#### Start application

```
npm run dev
```

### Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](server/utils/seed.js)

```
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
```
