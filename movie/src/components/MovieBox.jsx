import React from "react";
import './style.css';

const MovieBox = ({movies:{Year, Poster, Title, Type }}) =>{
    return(
        <div className="component">

            <div className="year">{Year}</div>

            <img className="poster" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />

            <div className="bottom">
                <div className="mvetype">{Type}</div>
                <div className="mvename">{Title}</div>
            </div>

        </div>
    );
}

export default MovieBox;