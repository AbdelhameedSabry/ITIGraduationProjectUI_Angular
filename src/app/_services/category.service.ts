import { Injectable } from '@angular/core';
import { Category } from '../_models/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryWithProducts } from '../_models/category-with-products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[]=[];


  constructor(private http:HttpClient) { }

  getAllCategory(){
    return this.http.get<Category[]>(environment.baseUrl + "Categories")
  }

  getCategoryById(id:number){
    return this.http.get<CategoryWithProducts>(environment.baseUrl + "Categories/" + id)
  }

}
