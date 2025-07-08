#Using version 22.17 of Node JS with the Alpine OS.
FROM node:22.17-alpine
#Set the working directory in the container to be /app
WORKDIR /usr/src/app
#copy the .json files needed for node configuration into working directory
COPY ./package.json ./
#install the dependencies listed in the copied files
RUN npm install
#copy the rest of my application files
COPY . .
#Expose the port the app is running on
EXPOSE 8080
#Define the command to run my app
CMD [ "npm", "run", "dev"]