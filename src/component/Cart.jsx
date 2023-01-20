import React from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from '../store'

function Cart(){

    // Reduxdp store에 있던 모든 state가 들어옴
    let states = useSelector((state)=>{ return state })
    console.log(states)
    console.log(states.user)
    console.log(states.stock)

    let cart = useSelector((state) => state.cart);



    return(
        <>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>상품명</th>
                            <th>수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((a, idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.count}</td>
                                    </tr>
                                )
                                
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
        </>
    )
}

export default Cart;