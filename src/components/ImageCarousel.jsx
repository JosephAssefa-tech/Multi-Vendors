import React, { useState, useEffect } from "react"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

export default function ImageCarousel() {
  const images = [
    "./src/assets/easter.jpg",
    "./src/assets/kitchen.jpg",
    "./src/assets/shop_.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }


  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }


  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 2000)

    return () => clearInterval(interval) 
  }, [])

  return (
    <div className="w-full h-full  overflow-hidden rounded-lg mt-4">
    
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

  
<button
  onClick={prevImage}
  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
>
  <ArrowBackIosNewIcon />
</button>

<button
  onClick={nextImage}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
>
  <ArrowForwardIosIcon />
</button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}