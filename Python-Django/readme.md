# Project Management API

## Description

The **Project Management API** is a RESTful API designed for training purposes, allowing users to manage projects, publications, and user profiles. This API provides endpoints for creating, reading, updating, and deleting (CRUD) resources. It implements authentication using JSON Web Tokens (JWT) to secure the endpoints.

## Features

- User authentication (register, login, logout)
- CRUD functionalities for users, projects, and publications
- JSON Web Token (JWT) for secure access
- Comprehensive API endpoints for integration and training

## Installation

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Docker (optional) for containerized setup
- MySQL database (if not using Docker)

### Clone the Repository

```bash
git clone https://github.com/RicManByakugan/dev-full-backend
cd  dev-full-backend/Python-Django/project-management
```

### Setup with Docker

1. **Build the Docker Image**

   ```bash
   docker build -t project-management-api .
   ```

2. **Run the Docker Container**

   ```bash
   docker run -d -p 8000:8000 --env-file .env project-management-api
   ```

3. **Run Migrations (if needed)**

   ```bash
   docker exec -it <container_id> python manage.py migrate
   ```

### Setup without Docker

1. **Install Dependencies**

   Set up a virtual environment and install the requirements:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   pip install -r requirements.txt
   ```

2. **Configure Environment Variables**

   Create a `.env` file in the project root:

   ```dotenv
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=3306
   ```

3. **Run Migrations**

   ```bash
   python manage.py migrate
   ```

4. **Start the Development Server**

   ```bash
   python manage.py runserver
   ```

Access the API at `http://localhost:8000`.
Users can use tests with Postman by importing the file: DEV_FULL_BACKEND.postman_collection.json."

## Usage

- **Authentication**: Use the login endpoint to authenticate and obtain a JWT token.
- **CRUD Operations**: Use the provided endpoints to manage users, projects, and publications.