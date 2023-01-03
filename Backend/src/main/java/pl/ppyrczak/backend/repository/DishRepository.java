package pl.ppyrczak.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.ppyrczak.backend.model.Dish;

@Repository
public interface DishRepository extends MongoRepository<Dish, String> {
}
