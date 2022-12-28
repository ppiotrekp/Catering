import {Cuisine} from "./cuisine";
import {Meal} from "./meal";

export interface Dish {
  id: string;
  imageUrl: string;
  name: string;
  cuisine: Cuisine;
  meal: Meal;
  ingredients:Array<string>;
  limit:number;
  price: any;
  description: string;
}
