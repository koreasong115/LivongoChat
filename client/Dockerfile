FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

EXPOSE 3000

# add app
COPY . ./

CMD ["npm", "start"]
