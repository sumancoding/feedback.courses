import React, {useState} from 'react'
import {Button} from './Button.js'

const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
  <>
  <div>
   <Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
       
      
  </div>
  
      
     {
       good || neutral || bad !== 0 ? (
           <div>
             
      <h3> Statistics </h3>
      <div>
        <tabel>
          <tr>
            <td> Good : </td>
            <td> {good}</td>
          </tr>
           <tr>
            <td> Neutral : </td>
            <td> {neutral}</td>
          </tr>
           <tr>
            <td> Bad : </td>
            <td> {bad}</td>
          </tr>
           <tr>
            <td> Average :  </td>
            <td> <strong> {((good - bad) / (good+neutral+bad)).toFixed(2)}</strong> </td>
          </tr>
           <tr>
            <td> Percentage Increase :   </td>
            <td> <strong>{((good) / (good+neutral+bad)* 100).toFixed(2)}%</strong> </td>
          </tr>
        </tabel>
      </div>
     
    </div>
       ) : 
         <h2>You havenot given any feedback yet!!</h2>
       
     }
  </>
  )
}

export default Statistics

