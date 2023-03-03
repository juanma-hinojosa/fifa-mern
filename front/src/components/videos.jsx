import React from "react";

const Video = ({characters}) => {
    return(
        <iframe width="560" height="315" src={characters.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default Video;