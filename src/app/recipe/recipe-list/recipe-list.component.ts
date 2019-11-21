import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('Chicken','Using this recipe you can make your delicious food in a few minutes which is more tasty and  want to eat more',
  'https://welaughwecrywecook.files.wordpress.com/2013/05/spa-bath-005.jpg'),
  
  new Recipe('Egg','Using this recipe you can make your delicious food in a few minutes which is more tasty and  want to eat more',
  'https://cdn2.stylecraze.com/wp-content/uploads/2014/07/1538_Top-15-Tasty-Indian-Egg-Recipes-For-Dinner_422789110.jpg')
];


  constructor() { }
  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe);

  }

}
