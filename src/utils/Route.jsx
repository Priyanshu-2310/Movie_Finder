import React from 'react'
import { Routes } from 'react-router-dom'

const Route = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/" element={<Movies />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default Route