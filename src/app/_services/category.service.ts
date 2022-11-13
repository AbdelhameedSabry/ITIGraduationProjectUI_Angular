import { Injectable } from '@angular/core';
import { Category } from '../_models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[]=[];


  constructor(private http:HttpClient) { }

  getAllCategory(){
    return this.http.get<Category[]>(environment.baseUrl + "Categories")
  }

  AddCategory(Cat:Category){
    this.categories.push()
  }

  getCategoryById(id:number){
    return this.categories[id-1]
  }

  deleteCategoryById(id:number){
    for(let i=0;i<this.categories.length;i++){
      if(this.categories[i].id==id){
         this.categories.splice(i,1);        
      }
    }
  }
}
