
FROM --platform=linux/amd64 node:18-alpine

# create a non-root user and add permission for the /app folder
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app
COPY package.json package-lock.json ./

RUN chown -R appuser:appgroup /app
USER appuser

# install dependen
RUN npm install

# copy the core logic
COPY server.js ./

# live on port 8080
EXPOSE 8080

# run the image
CMD ["node", "server.js"]
