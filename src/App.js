import React, { useState } from "react";


const GeoLocation = () => {
  const [details, setDetails] = useState(false);

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  

  return (
    <>
      <div>
        <div>
          
          <center>
          <h1 className="font-semibold text-4xl mt-9" >Find Your Data</h1>
          </center>
          
          <div>
            <center>
            <button className="m-10  p-3 rounded-lg bg-[#487f63] text-white" onClick={getUserGeolocationDetails}>Find Data </button>
            </center>
            
          

           
            <div  className="m-11 border-4 p-11 ml-4 mr-4 xl:ml-96 xl:mr-96 md:ml-10 md:mr-10" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div>
                {details && (
                  <ul>
                    <li  style={{marginBottom:'18px'}}>
                      <kbd className="bg-slate-200 p-2 rounded-lg ">Country:</kbd>{" "}
                      {` ${details.country_name}(${details.country_code})`}
                    </li>
                    <li   style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >State:</kbd> {details.state}
                    </li>
                    <li  style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >City:</kbd> {details.city}
                    </li>
                   
                    <li  style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >Postal:</kbd> {details.postal}
                    </li>
                    <li   style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >Latitude:</kbd> {details.latitude}
                    </li>
                    <li   style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >Longitude:</kbd> {details.longitude}
                    </li>
                    <li   style={{marginBottom:'18px'}}>
                      {" "}
                      <kbd className="bg-slate-200 p-2 rounded-lg " >IP:</kbd> {details.IPv4}
                    </li>
                  
                  </ul>
                )}
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
