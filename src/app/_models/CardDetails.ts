export class CardDetails {
    constructor(public productId: number,
        public headerId: number,
        public Name: string,
        public image: ArrayBuffer,
        public colorId: number,
        public sizeId: number,
        public price: number,
        public amount: number,
        public total: number) { }
}
