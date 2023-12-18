// import { useEffect, useState } from "react";
// import { FaCartPlus } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom";
// import style from "../ProductItem/ProductItem.module.css";

// const Search = ({ setResult }) => {

//     const {shoseId} = useParams()
//   useEffect(() => {
//     fetch(`http://localhost:3030/data/catalog`)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setFilterData(data);
//       });
//   }, []);
//   const [filterData, setFilterData] = useState("");
//   const [data, setData] = useState([]);

//   const searchHandler = (value) => {
//     const res = filterData.filter((f) =>
//       f.sneacersName.toLowerCase().includes(value)
//     );
//     setData(res);
//   };

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search.."
//         onChange={(e) => searchHandler(e.target.value)}
//       />
//       <button type="submit">
//         <i className="fa fa-search"></i>
//       </button>

//       {data.map((item, i) => {
//         return (
//           <>
//             <div className={style["product-item"]}>
//               <span data-v-15daad44="" data-v-3f0d782d="" className="percent">
//                 -26%
//               </span>

//               <h3>{item.sneacersName}</h3>
//               <p>Mens sports shoes.</p>
//               <a href="productdetail.html">
//                 <img src={item.imageUrl} alt="Shose 2" />
//               </a>
//               <p className={style["price-item"]}>От {item.price} лв.</p>
//               <div className="buttons">
//                 <Link to={`/details/`} className="cart-buy">
//                   <FaCartPlus className="icons-cart"></FaCartPlus>
//                   <span style={{ fontSize: 13, letterSpacing: 2 }}>КУПИ</span>
//                 </Link>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </form>
//   );
// };

// export default Search;
