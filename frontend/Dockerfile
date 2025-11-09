# frontend/Dockerfile
FROM node:22
WORKDIR /app
COPY .env.docker .env
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
