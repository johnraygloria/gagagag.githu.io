import React from 'react';
import './typehealthcare.css'

import { Link } from 'react-router-dom';

function Type () {
  return(
    <>
    <div className="second_search">
    <h1>Search again:</h1>

    <div className="third_search">
   <Link><input className="typemoko_second" type="text" placeholder="Type your healthcare center here." name="search2" /></Link>
    </div> 
    <p className="fourth_para">Let us take a look at what we have found:</p>

    <div className="brgy_info">

    </div>
</div>
</>
  );
}

export default Type;