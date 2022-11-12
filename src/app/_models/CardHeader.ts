import { CardDetails } from "./CardDetails";

export class CardHeader{
    constructor(
        public Id:number,
        public CustomerId:number,
        public totalPrice:number,
        public allCardDetails:CardDetails[]
    ){}
}