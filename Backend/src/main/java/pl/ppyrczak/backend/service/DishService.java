package pl.ppyrczak.backend.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ppyrczak.backend.model.Dish;
import pl.ppyrczak.backend.repository.DishRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class DishService {
  private final DishRepository dishRepository;

  public Dish addDish(Dish dish) {
    return dishRepository.insert(dish);
  }

  public List<Dish> getDishes() {
    return dishRepository.findAll();
  }

  public Dish getDish(String id) {
    return dishRepository.findById(id).get();
  }

  public void removeDish(String id) {
    dishRepository.deleteById(id);
  }
}
