FROM node:14-alpine
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install
RUN npm install -g nodemon
EXPOSE 5000
CMD ["nodemon"]