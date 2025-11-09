# Fullstack Template

A modern fullstack starter built for speed, clarity, and repeatability. This monorepo includes a Spring Boot backend, a React frontend, and a PostgreSQL database — all containerized and wired together with Docker Compose.

Fork this repo to kickstart your next project with secure authentication, database migrations, and hot-reloading dev workflows.

---
# Table of Contents
- [What’s Inside](#whats-inside)
- [Getting Started](#getting-started)
- [Local Development Without Docker](#local-development-without-docker)
- [🛠 Customization Guide](#-customization-guide)
- [Where to Go Next](#where-to-go-next)

---

## What’s Inside

### Monorepo Layout

```
fullstack-template/
├── backend/     # Spring Boot 3.3 (Java 24, Gradle)
├── frontend/    # React + Vite + Tailwind
├── docker-compose.yml
└── .env         # Centralized config
```

### 🔐 Auth0 Integration

- JWT validation in backend
- Auth0 SDK in frontend
- Configurable via `.env`

### 🧬 Liquibase Migrations

- YAML changelogs
- Auto-applied on backend startup
- Ready for CI/CD and rollback

### 🐳 Dockerized Dev Environment

- PostgreSQL 16 container
- Spring Boot backend with Gradle hot-reload
- Vite frontend with live HMR
- All services networked via Compose

---

## Getting Started

### 1. Fork the repo

Click “Fork” on GitHub to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/fullstack-template.git
cd fullstack-template
```

### 3. Set up your `.env` file

Create a `.env` file in the root:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=changeme
POSTGRES_DB=appdb
AUTH0_DOMAIN=your-auth0-domain
AUTH0_AUDIENCE=your-auth0-audience
```

### 4. Start the app

```bash
docker compose up --build
```

- Frontend → http://localhost:5173
- Backend → http://localhost:8080
- Database → PostgreSQL on port 5432

---

## Local Development Without Docker

### Important:

- The dockerized Postgres db must be running for all setups.
- Only one instance of each service should be running at a time to avoid port conflicts.
- **Do not mix and match:** run either all services via Docker Compose or all on local.


**1. Start DB:**

```bash
docker compose up -d db
```

**2. Start backend (host JVM, uses application-local.yaml) from `backend/`:**

```bash
SPRING_PROFILES_ACTIVE=local ./gradlew bootRun
```
- Or IntelliJ Application run with VM option: `-Dspring.profiles.active=local`

**3. Start frontend (host) from `frontend/`:**

- Ensure frontend/.env.local contains `VITE_BACKEND_URL=http://localhost:8080`

```bash
npm install && npm run dev
```
**4. Verify:**

- Visit http://localhost:5173 and test API calls.
- Backend Swagger UI at http://localhost:8080/swagger-ui.html use default login details `admin` / `admin`.

---

## 🛠 Customization Guide

| Task                        | How to do it                                  |
|----------------------------|-----------------------------------------------|
| Change DB schema           | Edit Liquibase changelogs in `backend/src/main/resources/db/changelog` |
| Add new API routes         | Create controllers in `backend/src/main/java/.../controller` |
| Add frontend pages         | Add React components in `frontend/src/pages` |
| Customize Auth0            | Update `.env` and frontend `auth_config.json` |
| Deploy to cloud            | Add GitHub Actions or Dockerfile.prod         |

---

## Where to Go Next

- Add CI/CD with GitHub Actions
- Add Redis, Kafka, or other services via Compose
- Create a CLI to scaffold new apps from this template

