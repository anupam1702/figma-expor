'use client';

import React, { useEffect, useState } from 'react';

const Sixth: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);
  
  

  const daysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDaysArray = (): (number | null)[] => {
    const days: (number | null)[] = [];
    const firstDay = firstDayOfMonth(currentDate);
    const totalDays = daysInMonth(currentDate);

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)));
  };

  const daysArray = getDaysArray();
  const dayLabels: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (

<div>
<h2 className="text-3xl font-bold text-center mb-4">
          One to One <span className="text-blue-500">Call</span>
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Data analyst software is a type of software tool used for data analysis and <br /> reporting. It is designed to help business organizations.
        </p>
    
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-1/4 h-1/3">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <button
              onClick={handlePrevMonth}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
            >
              &#8592;
            </button>
            <span className="text-lg font-semibold mx-4">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dayLabels.map((label) => (
            <div key={label} className="text-center text-gray-500 font-medium text-sm">
              {label}
            </div>
          ))}
          {daysArray.map((day, index) => {
            const isToday =
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <div
                key={index}
                className={`text-center py-2 rounded-md ${day ? 'cursor-pointer hover:bg-gray-100' : ''} ${
                  isToday ? 'bg-blue-200 font-bold' : ''
                } ${day ? 'text-gray-700' : 'text-gray-300'}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sixth;
