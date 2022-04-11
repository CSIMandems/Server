FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install 

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "run", "dev:docker" ]