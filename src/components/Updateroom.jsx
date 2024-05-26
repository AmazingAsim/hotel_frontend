import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Updateroom() {


  let param = useParams()
  const roomId = param.roomId;
  const [room, setRoom] = useState([]);
  const [available, setAvailable] = useState(param.available);
  const [guestId, setGuestId] = useState(param.guestId)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  let navigate  = useNavigate();
  
  let submitdata = async (data) => {
    try {
      let result =await axios.post('https://hotel-backend-tol3.onrender.com/rooms/updateroom',
        { ...data, available,roomId }, { headers: { 'Content-Type': "application/json" } });
     if(result.status==200){
      alert('data updated successfully');
      navigate('/rooms')
     }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            {/* starting of the form */}
            <form onSubmit={handleSubmit(submitdata)}>
            
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-check form-switch">


                      <input  style={{fontSize:'8vw',position:'relative',left:'18vw'}}  onChange={
                        (event) => {

                          setAvailable(event.target.checked ? 1 : 0);
                          event.target.checked ? setGuestId(null) : setGuestId(param.guestId);
                     
                        }
                      }
                        className="form-check-input" type="checkbox"
                        role="switch" id="f"
                        defaultChecked={available == 1 ? true : false} />



                      <label style={{fontSize:'4vw',position:"relative", top:"20vh"}}
                       className="form-check-label" htmlFor="f">
                        {available == 1 ? 'available' : 'not available'}</label>

                        
                    </div>

                  </div>
                  <div className="col">

                    {/* guest id */}

                    {
                      available == 1
                        ?

                        null
                        :
                        <input  disabled={false}{...register('guestId', { value: param?.guestId })} type="text"
                          className="form-control" placeholder='guestId' defaultValue={guestId} />
                    }

    
                    {/* starts */}
                    <input {...register('stars', { value: room?.stars })} type="text"
                      className="form-control" placeholder='stars' defaultValue={param?.stars} />

                     {/* capacity */}
                    <input {...register('capacity', { value: param?.capacity })} type="text" className="form-control"
                      placeholder='capacity' defaultValue={param?.capacity} />
                    <button className='btn btn-success' type="submit">submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

