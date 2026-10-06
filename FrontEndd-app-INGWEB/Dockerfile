FROM oven/bun:1 as builder

WORKDIR /app

# Copiar dependencias
COPY package.json bun.lock* ./
RUN bun install

# Copiar el resto del código
COPY . .

# Variables de entorno para el build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Construir la aplicación para producción
RUN bun run build

# Servir con Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto de Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
