import { Injectable } from '@angular/core';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[]=[
    new Category (100 ,"Blose"),
    new Category (200,"Pantalon"),
    new Category (300,"Jeup"),
    new Category (400,"fff"),
    new Category (500,"ffff"),
    new Category (600,"dddd")
  ];

  getAllCategory(){
    return this.categories;
  }

  AddCategory(Cat:Category){
    this.categories.push(new Category(Cat.Id,Cat.CategoryName))
  }

  getCategoryById(id:number){
    return this.categories[id-1]
  }

  deleteCategoryById(id:number){
    for(let i=0;i<this.categories.length;i++){
      if(this.categories[i].Id==id){
         this.categories.splice(i,1);        
      }
    }
  }

  constructor() { }
}
