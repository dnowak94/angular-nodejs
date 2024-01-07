FROM openjdk:11-jdk-buster
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY target/eshop_product-0.0.1-SNAPSHOT.jar eshop_product.jar
EXPOSE 8080
ENTRYPOINT exec java $JAVA_OPTS -jar eshop_product.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar eshop_product.jar
