import { Link } from "react-router-dom";

const Card = () =>{
    return(
        <Link to='/article' className="card">
            <div className="car-img"></div>
            <div className="card-info">
                <h2>These are the fastest-selling used vehicles of 2023</h2>
                <p>Used car sales have accelerated while new models are moving slower off dealers' lots</p>
                <span>Chris Teagus</span>
            </div>
        </Link>
    )
}

export default Card;