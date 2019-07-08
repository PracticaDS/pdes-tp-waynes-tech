#base image
FROM node

# set working directory
RUN mkdir /usr/src/app

#copy all files from current directory to docker
COPY . /usr/src/app

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app
RUN npm run build

# start app
CMD ["npm", "start"]
