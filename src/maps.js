import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function Maps() {
 const[searchQuery,setsearchQuery] = useState("");

function handleSearch(event){
    setsearchQuery(event.target.value);
    console.log(event.target.value);
}

async function getLocation (){
    console.log ("clicked");
    const response = await axios.get(`https://eu1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`
    );
    console.log (response)
}
  return (
    <div>
        <h3>maps</h3>
        <input type="text" onChange={handleSearch}></input>;
        <button onClick={getLocation}> Seach Location!</button>
        </div>
  )}

