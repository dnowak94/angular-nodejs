package de.hska.iwi.eshop_product;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriBuilder;

import org.springframework.stereotype.Repository;

@Repository
public class CategoryManager {

    final WebTarget target;

    public CategoryManager() {
        Client client = ClientBuilder.newClient();
        target = client.target(UriBuilder.fromUri("http://webshop-category:8082/").build());
        // target = client.target(UriBuilder.fromUri("http://localhost:8082/").build());
    }

    public Category getById(int id) {
        return target
          .path("category/" + String.valueOf(id))
          .request(MediaType.APPLICATION_JSON)
          .get(Category.class);
    }
}
