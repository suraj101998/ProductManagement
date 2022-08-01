export class Product {
    constructor(public id: number,
        public sku: string,
        public name: string,
        public description: string,
        public unitprice: number,
        public imageurl: string,
        public unitsofstock: number,
        public datecreated: string,
        public lastupdated: string,
        public categoryid: number){}
}
