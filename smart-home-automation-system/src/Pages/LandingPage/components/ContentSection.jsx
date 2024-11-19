import React from "react";
import '../styles/ContentSection.css';

function ContentSection({ title, subtitle, description, imageSrc, isReversed = false, backgroundColor = '#022737'}){
    return(
        <div className={`content-section ${isReversed ? 'reversed' : ''}`} style={{ backgroundColor }}>
            <div className="text-section">
                <h2 className="title">{title}</h2>
                <h4 className="subtitle">{subtitle}</h4>
                <p className="description">{description}</p>
            </div>

            <div className="image-section">
                <img src={imageSrc} alt="" className="image"/>
            </div>
        </div>
    )
}

export default ContentSection