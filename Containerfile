FROM nginx:alpine
COPY html /usr/share/nginx/html
RUN echo 'location /files/ {\n    autoindex on;\n}' > /etc/nginx/conf.d/files.conf
