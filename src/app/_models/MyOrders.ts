import { CardDetails } from "./CardDetails"

export class MyOrders {
    constructor(
        public id: number,
        public date: Date,
        public userid: number,
        public notes: string,
        public total: number,
        public cardproducts: CardDetails[]) { }
} 
