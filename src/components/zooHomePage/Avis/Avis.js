import React from 'react'
import './Avis.css'

const Avis = () => {
  return (
    <div>
      <div className='ticketDisplay'>
        <img src='jungle.jpg' alt="" className='jng'></img>
        
        <h1 className='ticketH1'>SUPPORT US</h1>
      </div>

      <div className="reviews">
        <h2>Visitor feedback</h2>
        <div className="review">
            <div className="review-card">
                <img src="agent.png" alt="Avatar" className="avatar"></img>
                <div className="review-content">
                    <h3>Peter</h3>
                    <span className="visitor">Visiteur</span>
                    <p>I had an amazing time at Arcadia Zoo. The educational programs were engaging, and my kids loved the interactive exhibits!</p>
                    <div className="stars">★★★★★</div>
                </div>
            </div>
            <div className="review-card">
                <img src="agent2.png" alt="Avatar" className="avatar"></img>
                <div className="review-content">
                    <h3>Emilie</h3>
                    <span className="visitor">Visiteur</span>
                    <p>Arcadia Zoo is a paradise for wildlife enthusiasts! The habitats are beautifully designed, and the animals seem so well cared for.</p>
                    <div className="stars">★★★★★</div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Avis