import { IBasketItem } from "../models/basket_item";

const BasketItem:React.FC <IBasketItem> = ({item}) => {
  function intToFloat(num: number, decPlaces:number) { return num.toFixed(decPlaces); } // Add trailing 0s.
	return (
        <h1 className="font-semibold">{item.product_name}: £{intToFloat(item.selling_price, 2)}</h1>
	);
};

export default BasketItem;