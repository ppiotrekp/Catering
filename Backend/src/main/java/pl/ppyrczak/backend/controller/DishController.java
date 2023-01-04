package pl.ppyrczak.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ppyrczak.backend.model.Dish;
import pl.ppyrczak.backend.service.DishService;

import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/api/catering")
@AllArgsConstructor
public class DishController {

  private final DishService dishService;

  @ResponseStatus(CREATED)
  @PostMapping("/dish")
  public Dish addDish(@RequestBody Dish dish) {
    return dishService.addDish(dish);
  }

  @ResponseStatus(OK)
  @GetMapping("/dishes")
  public List<Dish> getDishes() {
    return dishService.getDishes();
  }

  @ResponseStatus(OK)
  @GetMapping("/dishes/page")
  public List<Dish> getAllDishes(@RequestParam(required = false) int page) {
    return dishService.getAllDishes(page);
  }

  @ResponseStatus(OK)
  @GetMapping("/dish/{id}")
  public Dish getDish(@PathVariable String id) {
    return dishService.getDish(id);
  }

  @ResponseStatus(NO_CONTENT)
  @DeleteMapping("/dish/{id}")
  public void removeDish(@PathVariable String id) {
    dishService.removeDish(id);
  }
}
