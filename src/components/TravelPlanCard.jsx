function TravelPlanCard({ plan, handleDeleteTrip, handleFavoriteTrip }) {
    return (
        <div className="trip-card">
            <div className="card-image">
                <img src={plan.image} />
            </div>
            <div className="card-content">
                <p className=" title bold">{plan.destination} ({plan.days} Days)</p>
                <p>{plan.description}</p>
                <p>
                    <span className="bold">Price: </span>
                    {plan.totalCost} €
                </p>

                <div className="pill-container">
                    <span className={`card-pill ${plan.totalCost >= 350 ? "blue-pill" : "green-pill"}`}>
                        {plan.totalCost >= 350 ? "Premium" : "Great Deal"}
                    </span>

                    {plan.allInclusive && (
                        <span className="card-pill blue-pill">All-inclusive</span>
                    )}
                </div>
                
                <div className="btn-component">
                    <button 
                        onClick={()=> {handleDeleteTrip(plan.id)}} 
                        className="btn-delete">
                            Delete
                    </button>

                    <button 
                        onClick={()=> {handleFavoriteTrip(plan.id)}}
                        className="btn-fav"
                    >
                        ♡
                    </button>
                </div>
               
            </div>
        </div>
    )
}

export default TravelPlanCard