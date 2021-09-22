export interface IProduct {
	product_id: number,
	product_name: string,
	selling_price: number,
	category: number,
	img: string;
	setbasket: (item: IProduct) => void
}