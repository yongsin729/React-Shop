import React from 'react';
import {Table} from 'react-bootstrap';
import { connect,Button } from 'react-redux';

function Cart(props){
    return (
        <div>
            <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경</th>
    </tr>
  </thead>
  <tbody>
        {props.state.map(function(a,i){
            return (
                <tr key={i}>
                <td>{props.state[i].id}</td>
                <td>{props.state[i].name}</td>
                <td>{props.state[i].quan}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    props.dispatch({type : '수량증가'})
                }}>+</button>  &nbsp;
                <button className="btn btn-danger" onClick={()=>{
                    props.dispatch({type : '수량감소'})
                }}>-</button>
                </td>
              </tr>
            )
        })}
{/* 
    <tr>
      <td>1</td>
      <td>{props.state[0].name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>
        </div>

    )
}

function 함수명(state){
    return{
        state : state

    }
}

export default connect(함수명)(Cart)