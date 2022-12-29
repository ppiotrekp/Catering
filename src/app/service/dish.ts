import {Cuisine} from "./cuisine";
import {Meal} from "./meal";

export class Dish {
  id: string = '';
  imageUrl: string= '';
  name: string= '';
  cuisine: Cuisine = Cuisine.FRENCH;
  meal: Meal= Meal.MAIN;
  ingredients:Array<string>= [''];
  limit:number = 0;
  price: any;
  description: string = '';
  amount: number = 0;
}
