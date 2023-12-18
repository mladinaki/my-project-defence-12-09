// import { useEffect, useState } from "react";
// import ShopingCart from "../ShopingCart";

// import * as userService from "../../services/componentService";
// import { useDispatch } from "react-redux";
// import { ADD } from "../../redux/actions/action";

// const ShopingCartItem = () => {
//   const { cart, setShopCart } = useState([]);

// //   useEffect(() => {
// //     userService
// //       .getAll()
// //       .then((result) => setShopCart(result))
// //       .catch((error) => console.log(error));
// //   }, []);
  

//   const dispach = useDispatch();

//   const clickCart = (e) => {
//     dispach(ADD(e));
//   };

//   return (
//     <div className="templatemo_main_shop_cart">
//       <div id="content" className="float_r">
//         {cart.map((item) => {

//           return <ShopingCart key={item._id} {...item} item={item}  clickCart={clickCart}/>;
          
//         })}
        
//       </div>
//     </div>
//   );
// };

// export default ShopingCartItem;
