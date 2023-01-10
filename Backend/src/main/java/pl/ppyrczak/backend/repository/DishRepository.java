package pl.ppyrczak.backend.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import pl.ppyrczak.backend.model.Dish;

import java.util.List;

@Repository
public interface DishRepository extends MongoRepository<Dish, String> {
  @Query("select d from Dish d")
  List<Dish> findAllDishes(Pageable pageable);
}
