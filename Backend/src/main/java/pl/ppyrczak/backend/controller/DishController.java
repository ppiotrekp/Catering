package pl.ppyrczak.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ppyrczak.backend.model.Dish;
import pl.ppyrczak.backend.service.DishService;

import java.util.List;

@RestController
@RequestMapping("/api/catering")
@AllArgsConstructor
public class DishController {

  private final DishService dishService;

  @PostMapping("/dish")
  public Dish addDish(@RequestBody Dish dish) {
    return dishService.addDish(dish);
  }

  @GetMapping("/dishes")
  public List<Dish> getDishes() {
    return dishService.getDishes();
  }

  @GetMapping("/dish/{id}")
  public Dish getDish(@PathVariable String id) {
    return dishService.getDish(id);
  }
}
