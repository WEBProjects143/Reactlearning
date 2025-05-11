From node:20-alpine
WORKDIR /Backend
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 4000
CMD ["nodejs", "index.js"]