# WEBSHOP
cloned from https://github.com/neinkob15/webshop-vslab
## Getting Started
### docker compose
1. build
run build script:
```
./build.sh
```
or:
```
cd eshop_products
mvn package -DskipTests
docker build -t webshop-products .
cd ../eshop_categories
mvn package -DskipTests
docker build -t webshop-categories .
``````
2. run
```
docker compose up -d
```
### Kubernetes
1. Minikube starten
2. In Ordner "kubernetes" wechseln
3. kubectl apply -f ./ --recursive
4. Um den Webshop aus der Minikube-Umgebung freizugeben: ```minikube service legacywebshop```
5. Im Webbrowser die URL um diesen Pfad ergänzen .../EShop-1.0.0/