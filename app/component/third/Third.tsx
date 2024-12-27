import React from 'react'

const Third = () => {
  return (
    <div>
      <header className="bg-white p-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: 8M+ Users */}
        <div className="flex items-center space-x-4">
          <p className="text-2xl font-bold">8M+ Users</p>
          <div className="bg-blue-500 w-8 h-8"></div>
        </div>

        {/* Middle: Video */}
        <div className="flex-1 flex justify-center">
          <video
            className="w-full max-w-lg border border-blue-500"
            controls
          >
            <source src="video-placeholder.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right: Description */}
        <div className="flex items-center">
          <p className="text-sm text-gray-700 max-w-sm">
            Use <span className='text-blue-500'>CS</span>Explained powerful automation tools effortlessly.
          </p>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Third
