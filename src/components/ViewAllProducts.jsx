import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const ViewAllProducts = () => {
const [data,changeData]=useState([])
const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then(
        (response)=>{
            changeData(response.data)
        }
    ).catch()
}
useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table class="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Image</th>
                                <th scope="col">Rating</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            {
                                data.map(
                                    (value,index)=>{
                                        return <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.title}</td>
                                            <td>{value.price}</td>
                                            <td>{value.description}</td>
                                            <td>{value.category}</td>
                                            <td>{value.image}</td>
                                            <td>{value.rating.rate}</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAllProducts
