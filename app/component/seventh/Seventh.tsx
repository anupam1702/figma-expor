// pages/index.tsx (Example usage)


import React from 'react'
import InfoCard from './InfoCard';

const Seventh = () => {
 
        return (
    <div className="bg-gradient-to-r from-black-900 to-purple-900 min-h-screen flex justify-center items-center w-full">
      <InfoCard
        title="Know More About CSExplained"
        rating={4.5}
        totalStudents="01k+"
        description="Stract is very important because of some security throats and cyber-attacks. This software protects the data. Cybersecurity is important because not only it helps to secure information but also our system from virus attack. Cybersecurity is important because not only it helps to secure information but also our system."
        imageSrc="/image.jpg" 
      />
    </div>
      
   
  )
}

export default Seventh
