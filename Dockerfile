# Usa la imagen oficial de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto para el servidor de desarrollo de Vue
EXPOSE 8080

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "serve"]
