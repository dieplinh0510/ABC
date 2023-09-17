import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callAPICoutry, decrement, increment, storeEntries } from "./action/couter";
import axios from "axios";

import { Link } from 'react-router-dom'

const CouterApp = () => {
  // Lấy giá trị từ store
  const counter = useSelector( ( state ) => state.counter.counter )
  const entries = useSelector( ( state ) => state.counter.entries )
  // Sử dụng dispatch để thực hiện gửi action tới nhà máy
  const dispatch = useDispatch();

  useEffect( () => {
    axios.get( "https://api.publicapis.org/entries" ).then( data => {
      dispatch(storeEntries(data.data.entries))
    })
  }, [])

  return <>
    <h1>Couter = { counter }</h1>

    <button type="button" onClick={ () => dispatch( increment( 5 )) }>Tăng</button>
    <button type="button" onClick={ () => dispatch( decrement( 5 ) ) }>Giảm</button>
    
    <div style={{marginTop: '100px'}}>
      <Link to="/">To Todo App</Link>
    </div>

    {/* <div>
      { entries.map( ( item, index ) => (
        <div key={index} style={{border: '1px solid gray'}}>
          <p>API: { item.API }</p>
          <p>Category: { item.Category }</p>
          <p>Description: {item.Description }</p>
        </div>
      ))}
    </div> */}
  </>
}

export default CouterApp;