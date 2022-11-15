import { CardDetails } from "./CardDetails";

export class CardHeader{
    constructor(
        public id:number,
        public date:Date,
        public userid:number,
        public total:number,
        public notes:string,
        public cardproducts:CardDetails[]
    ){}
}