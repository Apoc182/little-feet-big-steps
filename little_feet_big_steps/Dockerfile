FROM node:21.3.0 as build

WORKDIR /app

COPY ./frontend/src ./frontend/src
COPY ./package.json ./webpack.config.js .babelrc ./

RUN npm install

RUN npm run build

# Use an official Python runtime as a parent image
FROM python:3.11

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Set work directory
WORKDIR /app

# Upgrade pip
RUN pip install --upgrade pip

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt


# Copy the current directory contents into the container at /app/
WORKDIR /app

COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

COPY --from=build /app/webpack-stats.json /app/webpack-stats.json
COPY --from=build /app/frontend/static/frontend ./staticfiles/frontend

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define command to start your application
CMD gunicorn little_feet_big_steps.wsgi:application --bind 0.0.0.0:8000
