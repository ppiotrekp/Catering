package pl.ppyrczak.backend.util;

public enum Cuisine {
  POLISH("polish"), ITALIAN("italian"), INDIAN("indian"), FRENCH("french"), INTERNATIONAL("international");

  private final String name;

  Cuisine(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return this.name;
  }
}
