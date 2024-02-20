import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Foods() {
    const [foods,setfoods] = useState([]);

    let getFoodsInfo = async()=>{ 

        try{
            let result = await axios.get('food.json');
            setfoods(result.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(function(){getFoodsInfo()},[])
          
  return (
    <div>
            <h1 className='display-3 fw-bolder p-2 border border-top-0 border-bottom-1 border-warning'>foods</h1>

            <div className="container">
                <table className="table text-center">
                    <thead className='bg-warning'>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Serving size</th>
                        <th>origin</th>
                    </thead>
                    <tbody>
                        {
                            foods.map(function(food){
                                return(
                                    <tr>
                                        <td>{food.name}</td>
                                        <td>{food.price }</td>
                                        <td>{food.serving_size}</td>
                                        <td>{food.origin}</td>
                                    
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}
