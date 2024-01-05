export class Product {
    private _id: number = -1;
    public get id(): number {
        return this._id;
    }
    private _name: string = '';
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _description: string = '';
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    private _price: number = -1;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    private _category_id: number = -1;
    public get category_id(): number {
        return this._category_id;
    }
    public set category_id(value: number) {
        this._category_id = value;
    }
    
    constructor(name:string, description:string, price:number, category_id:number) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category_id = category_id;
    }
}