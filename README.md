# LivongoChat
A one night project for fun 

# Tech Stack
1. Java, Postgres, Springboot
2. React, Material UI, Styled Components, Typescript

# How to install and run the backend
1. `cd server`
2. `mvn clean install`
3. `docker-compose build`
4. `docker-compose up`
Now the springboot backend application and postgres database should be up and running

# How to install and run the frontend
1. `cd client`
2. `yarn install` or `npm install`
3. `yarn start` or `npm start`
Now the front end React application should be up and running

# How it works
1. You should be greeted with a Home Page on port 3000 that has a button in the middle
2. Click on the button to enter the chat room
3. Once in the chat type a message and try it out

# Things that were not done
Since this was built in one evening + night, there are a littany of things to improve (the below is by no means comprehensive)
1. The backend has a built in delete (Delete) and update (Patch) endpoint but the frontend does not leverage these apis
2. There's no security/SSL, logging, nor unit testing in the backend or frontend
3. The UI/UX itself can be improved
4. Ensuring correct JSON data being passed
