import React  from 'react'


export const Button = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
    
  return (
     <>
     
     <button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        {" "}
        Good{" "}
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        {" "}
        Neutral{" "}
      </button>
      <button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
      
        Bad
      </button>
     </>
  )
}