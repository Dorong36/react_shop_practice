import React from "react";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from '../store'

import {setName, setCount} from '../store';

function Cart(){

    // Redux store에 있던 모든 state가 들어옴
    let states = useSelector((state)=>{ return state })
    console.log(states)
    console.log(states.user)
    console.log(states.stock)

    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();



    return(
        <>
            {
                states.user
            }의 장바구니
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>변경</th>
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
                                        {/* <td><Button variant="warning" onClick={()=>{
                                            dispatch(setName());
                                        }}>Edit</Button></td> */}
                                        <td><Button variant="warning" onClick={()=>{
                                            dispatch(setCount());
                                        }}>+</Button></td>
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