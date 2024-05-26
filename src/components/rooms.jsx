import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Rooms() {
    
    let navigate = useNavigate()
    const [rooms,setRooms] = useState([]);
    let getRoomsInfo = async()=>{ 
        try{
            let result = await axios.get('https://hotel-backend-tol3.onrender.com/rooms/getrooms');
            setRooms(result.data);
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(function(){ getRoomsInfo()},[])
          
  return (
    <div>
    <h1 className='display-3 fw-bolder p-2 border border-top-0 border-bottom-1 border-warning'>Rooms</h1>

{
    rooms.length==0 ? <div className='d-flex justify-content-center mt-5'>
        <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div> 
  <p> please wait the backend is hosted for free and hence slow </p>
  </div>
  :
            <div className="container">
               <div className='row'>

              
                   
                        {
                            rooms.map(function(room){


                                return(
                                    <div className='col-sm-4'>
                                    <div className='card P-3 px-3' onClick={()=>{navigate(`../updaterooms/${room.roomId}/${room.available}/${room.guestId}/${room.stars}/${room.capacity}`)}} role='button'>
                                        <h3 className='card-header'>{room.roomId}</h3>
                                        <h5> Available: {room.available ? 'available':'not available' }</h5>
                                        <h5>Stars: {room.stars}</h5> 
                                        <h5>Capacity: {room.capacity}</h5>
                                        <h5> Guest Id: {room.guestId?room.guestId:'Null'}</h5>
                                        <h5><button className='btn btn-warning'>update</button></h5>
                                    </div>
                                    </div>
                                ) 
                            })
                        }
                 

                    </div>
            </div>
                    }
    </div>
  )
}


