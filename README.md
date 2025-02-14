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

This application is deployed on Vercel Please check it out :smile: [here](https://mern-store-gold.vercel.app). This is from the original repo (https://github.com/mohamedsamara/mern-ecommerce)

## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)


## Pre-requisites

- Git is installed
- Node is installed
- MongoDB
  - Option A: Using Docker
  - Option B: Download and run it 

## Running Locally

### npm run dev
#### Install

`npm install` in the project root will install dependencies in both `client` and `server`. [See package.json](package.json)

Some basic Git commands are:

```
git clone -b mot https://github.com/zecarrera/mern-ecommerce.git
cd ${directory_name}
npm install
```

#### Environment Variables - ENV

Create `.env` file for both client and server. See examples:

[Frontend ENV](client/.env.example)

[Backend ENV](server/.env.example)

Set JWT_SECRET to a custom value (You can use an online tool to generate a new secret. Ex.: https://jwtsecret.com/generate)

#### Start mongo database server

**Docker:**
```
docker compose -f 'docker-compose.yml' up -d --build 'mongo'
```

**Without docker:**

1- Download the community version (https://www.mongodb.com/try/download/community)


2- Start server

#### Start development

```
npm run dev
```

## Running with Docker (app and database)

To run this project locally you can use docker compose provided in the repository. Here is a guide on how to run this project locally using docker compose.

Clone the repository
```
git clone https://github.com/mohamedsamara/mern-ecommerce.git
```

Edit the dockercompose.yml file and update the the values for MONGO_URI and JWT_SECRET

Then simply start the docker compose:

```
docker-compose build
docker-compose up
```

### Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](server/utils/seed.js)

```
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
```
