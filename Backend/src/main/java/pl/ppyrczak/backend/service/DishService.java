package pl.ppyrczak.backend.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ppyrczak.backend.model.Dish;
import pl.ppyrczak.backend.repository.DishRepository;

@Service
@AllArgsConstructor
public class DishService {
  private final DishRepository dishRepository;

  public Dish addDish(Dish dish) {
    return dishRepository.insert(dish);
  }
}
