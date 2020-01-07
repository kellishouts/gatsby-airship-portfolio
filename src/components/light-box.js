import React, { useState } from "react"

const LightBox = ({ image, close }) => {

  return <>
    {image ? <div className="lightbox-modal">
      <div className="lightbox-content">
        <img className="lightbox-image" src={image} />
        <span onClick={close} className="lightbox-close-button">X</span>
      </div>
    </div> : null}
  </>
}

export default LightBox
