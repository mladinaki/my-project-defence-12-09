import { Button } from "@mui/material";
import style from "../checkOut/checkOut.module.css";
// import style from "../ProductItem/ProductItem.module.css";


const CheckItems = ({ _id, sneacersName, imageUrl, price, addres, area }) => {
  console.log(addres);

  return (
    <div id="templatemo_main-check">
    <div className="che-output-container">

    <table>
      <tr>
        <td><img src={imageUrl} style={{ width: 50 }} /></td>
      </tr>

      <tr>
        <td>{sneacersName}</td>
      </tr>

      <tr>
        <td>Addres: {addres}</td>
      </tr>

      <tr>
        <td>Area: {area}</td>
      </tr>

      <tr>
        <td>{price}лв.</td>
      </tr>
      
    </table>

  </div>
  <table>

      <tr>
        <td>Addres: {addres}</td>
      </tr>

      <tr>
        <td>Area: {area}</td>
      </tr>

    </table>

    </div>
  );
};

export default CheckItems;
