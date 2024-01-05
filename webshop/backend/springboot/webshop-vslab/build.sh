cd eshop_products
mvn package -DskipTests
docker build -t webshop-products .
cd ../eshop_categories
mvn package -DskipTests
docker build -t webshop-categories .