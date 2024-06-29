import { Button } from "@mui/material";
import style from "../checkOut/checkOut.module.css";
// import style from "../ProductItem/ProductItem.module.css";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import CheckItems from "./CheckItems";
import { useEffect, useState } from "react";
import * as userService from "../../services/commponentAddres";

const Check = () => {

    const { shoseId } = useParams();

    const [checks, setCheck] = useState([])

    const getData = useSelector((state) => state.cartreducer.carts);

    useEffect(() => {
        userService.cerateAddress()
            .then((response) => console.log(response))

    }, [getData])

    return (
        <div id="templatemo-main-details">
            <div id="content-details">
                <div className="content_half float_l">

                    {checks && getData.map((i, z) => {
                        return <CheckItems key={i._id} {...i} />

                    })}

                </div>
            </div>
        </div>
    );
};

export default Check;
