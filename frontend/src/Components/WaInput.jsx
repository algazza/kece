import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

const WaInput = ({handleModal}) => {
  return (
    <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed z-40">
    <div
      className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50 backdrop-blur-sm"
      onClick={handleModal}
    >
      <div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={handleModal}
        >
          <CloseIcon />
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QfhNO1_GSEM?si=XYAIDIf6xs0zuBg6"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-[18rem] h-[11rem] sm:w-[40rem] sm:h-[22rem]"
        ></iframe>
      </div>
    </div>
  </div>
  )
}

export default WaInput