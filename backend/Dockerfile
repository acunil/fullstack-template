# backend/Dockerfile
# 1) Build stage
FROM openjdk:24-slim AS builder
WORKDIR /app
COPY gradlew gradlew
COPY gradle gradle
RUN chmod +x gradlew
COPY . .
RUN ./gradlew clean bootJar --no-daemon

# 2) Runtime stage
FROM eclipse-temurin:24-jre
WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
