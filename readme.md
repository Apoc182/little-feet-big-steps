
# Little Feet Big Steps

## Prerequisites

- Docker
- Docker Compose

## Setup Instructions

### Clone the Repository

```bash
git clone [your-repository-url]
cd little_feet_big_steps
```

### Create empty database file
```bash
touch little-feet-big-steps/db.sqlite3
```

### Build and Run with Docker Compose

```bash
docker compose up -d --build
```

This command builds the Docker images and starts the containers as defined in your `docker-compose.yml`.

### Create a Django Superuser

```bash
docker exec -it [container_name] python manage.py createsuperuser
```

Follow the command prompts to complete the superuser creation.

### Local Development

To refresh your development environment, use:

```bash
./dev-start.bat
```

This script will take down the running Docker containers, remove the static volume, and rebuild and rerun the containers.

## Nginx Configuration

Here's a basic `nginx.conf` setup for serving Django static files and proxying to your Django app.

```nginx
server {
    listen 80;
    server_name localhost; # Adjust as per your production domain

    location / {
        proxy_pass http://web:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static/ {
        alias /app/staticfiles/;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
```

### Docker Compose File Example

Below is an excerpt of the `docker-compose.yml` necessary for defining the services, volumes, and other configurations.

```yaml
version: "3"
services:
  web:
    build: 
      context: ./little_feet_big_steps
    volumes:
      - static_volume:/app/staticfiles
      - media_volume:/media/
      - ./db.sqlite3:/app/db.sqlite3
    command: >
      sh -c "python manage.py migrate && gunicorn little_feet_big_steps.wsgi:application --bind 0.0.0.0:8000"


  nginx:
    image: nginx
    volumes:
      - ./data/certbot/conf:/etc/letsencrypt
      - ./data/certbot/www:/var/www/certbot
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - static_volume:/app/staticfiles
    ports:
      - "80:80"
volumes:
  static_volume:
  media_volume:
```

## Accessing the Application

Navigate to `http://localhost` or the domain set in your `nginx.conf` to access your Django application. Admin features are accessible at `http://localhost/admin`.

## Maintenance

- **Updating Containers:** To update the application or dependencies:

  ```bash
  docker compose up -d --build
  ```

- **Applying Django Migrations:**

  ```bash
  docker exec -it [container_name] python manage.py migrate
  ```


