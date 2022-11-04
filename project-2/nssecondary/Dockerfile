FROM node:alpine AS builder

# Declaring env
#ENV NODE_ENV production

# Setting up the work directory
WORKDIR /

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm i

EXPOSE 3000

# runs the production server
ENTRYPOINT ["npm"]
CMD ["run", "dev"]
