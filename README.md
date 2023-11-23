# GudBuks

A simple book comments app to the distributed systems class

# How to run

## Backend

- Install the dependencies using `npm i`
- Create a `.env` by copying `.env.example`
- Run the database using `docker compose up -d`
- Run the migrations using `npx prisma migrate deploy`
- Run using `npm run dev`

## Gateway

⚠️ **Without the gateway the frontend can't access the backend**

- Install the dependencies using `npm i`
- Run using `npm run dev`

## Frontend

- Install the dependencies using `npm i`
- Run using `npm run dev`

## Mock

- Install the dependencies using `npm i`
- Run using `npm start`
