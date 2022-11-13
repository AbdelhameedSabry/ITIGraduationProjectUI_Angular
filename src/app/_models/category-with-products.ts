import { Product } from "./product";

export interface CategoryWithProducts {
    id:number;
    cateogoryName:string;
    image:ArrayBuffer;
    products:Product[];
}
