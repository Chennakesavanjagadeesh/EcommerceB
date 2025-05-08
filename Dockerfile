FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests
FROM  openjdk:17-jdk-slim
COPY --from=build/target/e-commmerce strore App-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT [ "java","-jar","e-commmerce strore App.jar" ]