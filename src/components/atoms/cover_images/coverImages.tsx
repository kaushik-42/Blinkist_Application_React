import React from "react";
import ImageFile from "./../../../Assets/images/cover_images/2.png";

interface coverImagesInterface{
    url:string;
    class:string;
}

export const CoverImages = (props:coverImagesInterface) => {
    var classVal = "cover-image "+props.class;
    return (
        <div>
            <img className={classVal} src={props.url} alt="Book Cover" />
        </div>
    )
}

