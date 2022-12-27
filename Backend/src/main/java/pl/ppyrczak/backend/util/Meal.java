package pl.ppyrczak.backend.util;

public enum Meal {
  VEGAN("vegan"), MEAT("meat"), SOUP("soup"),
  MAIN("main"), SALAD("salad"), STARTER("starter"),
  SUPPER("supper"), BREAKFAST("breakfast");

  private final String name;

  Meal(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return this.name;
  }
}
