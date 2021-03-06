import React from 'react';
import {Table} from 'react-bootstrap';
import { connect,Button, useSelector, useDispatch } from 'react-redux';
import './App.css';

function Cart(props){

let state=useSelector((state)=>state);
let dispatch=useDispatch();
let total=0;
    return (
        <div>
            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>수량변경</th>
      <th>가격</th>
    </tr>
  </thead>
  <tbody>
        {state.reducer.map(function(a,i){
            let tmp=0;
            
            tmp+=state.reducer[i].price*state.reducer[i].quan;
            total+=tmp;
            return (
                <tr key={i}>
                <td>{state.reducer[i].id}</td>
                <td>{state.reducer[i].name}</td>
                <td>{state.reducer[i].quan}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    dispatch({type : '수량증가',data:i})
                }}>+</button>  &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    dispatch({type : '수량감소',data:i})
                }}>-</button>
                </td>
                <td>₩{state.reducer[i].price}</td>
              </tr>
              
            )
           

        })}

  </tbody>
  
</Table>
<div className='cart-buy'>
    <p>Total Price : ₩{total}</p>
  <button className='btn btn-danger buy-button'>Purchase</button>
  </div>
{
    props.alertOpen===true
    ?
    <div className="my-alert1">
        <p>지금 구매하시면 20% 할인</p>
        <button onClick={()=>{
            props.dispatch({type:'닫기'})
        }}>닫기</button>
    </div>
    :null}
        </div>

    )
}

// function 함수명(state){
//     return{
//         state : state.reducer,
//         alertOpen:state.reducer2

//     }
// }

// export default connect(함수명)(Cart)
export default Cart;