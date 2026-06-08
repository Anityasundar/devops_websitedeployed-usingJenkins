FROM node:22-alpine

WORKDIR /app

# copy package files correctly
COPY backend/package*.json ./

RUN npm install --production

# copy backend code
COPY backend/ ./

# copy frontend correctly (from root context)
COPY frontend ./frontend

EXPOSE 3000

CMD ["npm", "start"]
