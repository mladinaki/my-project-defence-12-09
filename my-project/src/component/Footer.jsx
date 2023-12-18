import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div id="templatemo_footer">
      <p>
        <a href="#">Начало</a> | <a href="#">Продукт</a> 
        | <Nav.Link as={Link} to="/checout">Прегледай</Nav.Link> |{" "}
        <a href="#">Контакти</a>
      </p>
      Copyright © 2022{" "}
      <a href="#">SoftUni defence React-exam. All rights reserved</a>
    </div>
  );
};

export default Footer;
