import React from 'react'

export default function Card({womanImage,middleStatement,bottomStatement}) {
  return (
    <div className="card">
            
            <div className="top-card">
                <img src={womanImage} alt="image of a woman" />
            </div>
            <div className="middle-card">
                {middleStatement}
            </div>
            <div className="bottom-card">
                {bottomStatement}           
            </div>



          </div>
  )
}
