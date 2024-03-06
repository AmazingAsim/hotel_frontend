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

            <div className="container">
                <table className="table text-center table-hover">

                    <thead className='bg-warning'>
                        <th>Room Id</th>
                        <th>Available</th>
                        <th>Stars</th>
                        <th>Capacity</th>
                        <th>Guest Id</th>
                    </thead>

                    <tbody>
                        {
                            rooms.map(function(room){


                                return(
                                    <tr onClick={()=>{navigate(`../updaterooms/${room.roomId}/${room.available}/${room.guestId}/${room.stars}/${room.capacity}`)}} role='button'>
                                        <td>{room.roomId}</td>
                                        <td>{room.available ? 'available':'not available' }</td>
                                        <td>{room.stars}</td> 
                                        <td>{room.capacity}</td>
                                        <td>{room.guestId?room.guestId:'Null'}</td>
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
