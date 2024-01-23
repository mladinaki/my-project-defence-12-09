import { useContext, useEffect, useState } from "react";
import * as userService from "../../services/componentService";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE } from "../../redux/actions/action";
import AuthContext from "../../contexts/authContexts";
import { useNavigate, useParams } from "react-router-dom";

const Counter = ({_id}) => {
    const { shoseId } = useParams();
  const { isAuthenticated, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const [selectShose, setShose] = useState('');

  const getData = useSelector((state) => state.cartreducer.carts);
  const dispach = useDispatch();

  useEffect(() => {
    userService.getOne(shoseId).then((result) => setShose(result));
  }, [shoseId]);


  const sendRemove = (iteam) => {
    dispach(REMOVE(iteam));
  };
  
  const sendPrice = (item) => {
    dispach(ADD(item));
  };

    const isOwner = userId === selectShose._ownerId

    return (
        <div style={{
            display: 'inline',
            padding: 8,
            margin: 10,
            textAlign: 'center',
            float: 'left',
            marginTop: "11px",
            border: '1px solid black'
        }}>

            {getData.map((data, k) => {
                
                return (
                    <div>
                    <div style={{
                      display: 'inline',
                      padding: 8,
                      margin: 10,
                      textAlign: 'center',
                      float: 'left',
                      marginTop: "11px",
                      border: '1px solid black'
                    }}>
                      <span onClick={
                        data.quantity <= 1
                          ? () => DLT(k._id)
                          : () => sendRemove(data)
                      }>-</span>
                      <span>{data.quantity}</span>
                      <span style={{ marginRight: 30 }}
                        onClick={() => sendPrice(data)}>+</span>
                    </div>
                    </div>

                )
            })}

        </div>
    )

}
export default Counter
