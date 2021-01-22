# pull official base image
FROM node:12.19.0

# set working directory
WORKDIR /reactbeerbook

# add `/app/node_modules/.bin` to $PATH
ENV PATH /reactbeerbook/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.3 -g --silent

# add app
COPY . ./

# start app client
CMD ["npm", "start"]
