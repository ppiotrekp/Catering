package pl.ppyrczak.backend;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.ppyrczak.backend.model.Dish;
import pl.ppyrczak.backend.service.DishService;

@RestController
@RequestMapping("/api/catering")
@AllArgsConstructor
public class DishController {

  private final DishService dishService;

  @PostMapping("/dish")
  public Dish addDish(@RequestBody Dish dish) {
    return dishService.addDish(dish);
  }
}
