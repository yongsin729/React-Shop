import React,{useEffect, useState} from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import './Detail.scss';

let box1=styled.div`
    padding:20px
`;
let 제목=styled.h4`
    font-size:25px;
`;

function Detail(props){

    
    let [modal,modal변경]=useState(true);
    let {id}=useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id==id
    });
    
    useEffect(()=>{
        let timer=setTimeout(()=>{
            modal변경(false);
        },2000);
        
    });
    let history=useHistory();
    return (
        <div className="container">
            <box1>
                <제목 className='red'>Detail</제목>
            </box1>
           
        {
            modal===true ?
            <Modal></Modal>
            : null
        }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(찾은상품.id+1)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.push('/')
          }}>뒤로가기</button> 
        </div>
      </div>
</div> 
    )
    function Modal(){
        return (
            <div className='my-alert-yellow'>
            <p>재고가 얼마 남지 않았습니다</p>
        </div>
        )
    }
}

export default Detail;