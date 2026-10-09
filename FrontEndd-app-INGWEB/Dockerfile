FROM node:20-alpine as builder

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar el resto del código
COPY . .

# Variables de entorno para el build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Construir la aplicación para producción
RUN npm run build

# Servir con Nginx
FROM nginx:alpine
# Copiar configuración custom de nginx para que las rutas SPA funcionen
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto de Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
