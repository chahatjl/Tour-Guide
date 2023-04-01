import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const[tours,SetTours]=useState(data);

  function removeTour(id)
  {
     const newTours=tours.filter(tour=>tour.id!==id);
     SetTours(newTours);
  }


  if(tours.length===0)
  {
    return (

      <div className="refresh">
       <h2>No Tours Left</h2>
       <button className="reset" onClick={()=>SetTours(data)}>Refresh</button>
      </div>

    );
  }

  return (
    <div >
      
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
