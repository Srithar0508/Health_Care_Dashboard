import React from 'react'
import { MdDashboardCustomize } from "react-icons/md";
import { LuHistory } from "react-icons/lu"
import { BsCalendar2Event } from "react-icons/bs"
import { FaSquarePlus } from "react-icons/fa6";
import { HiOutlineChartBar } from "react-icons/hi"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import HumanBody from '../assets/human-body.jpg';
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import dayjs from "dayjs";
// import { useNavigate } from 'react-router-dom';


// Barchat
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
} from 'recharts';

const data = [
    {
        name: 'Mon',
        teal: 20,
        blue: 30,
        gray: 50,
    },
    {
        name: 'Tues',
        teal: 50,
        blue: 40,
        gray: 60,
    },
    {
        name: 'Wed',
        teal: 35,
        blue: 20,
        gray: 40,
    },
    {
        name: 'Thurs',
        teal: 25,
        blue: 30,
        gray: 55,
    },
    {
        name: 'Fri',
        teal: 60,
        blue: 35,
        gray: 45,
    },
    {
        name: 'Sat',
        teal: 30,
        blue: 25,
        gray: 50,
    },
    {
        name: 'Sun',
        teal: 40,
        blue: 30,
        gray: 60,
    },
];

const defaultTimes = [
  ["10:00", "11:00", "12:00"],
  ["08:00", "09:00", "10:00"],
  ["12:00", "", "13:00"],
  ["10:00", "11:00*", "—"],
  ["—", "14:00", "16:00"],
  ["12:00*", "14:00", "15:00"],
  ["09:00", "10:00", "11:00"],
];

const Index = () => {
    // const navigate = useNavigate();
      const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf("month");
  const startDay = startOfMonth.day(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = currentMonth.daysInMonth();

  // Create an array of dates for the calendar
  const calendarDays = Array.from({ length: 7 }, (_, i) => {
    const dayDate = startOfMonth.date(i + 25); // Custom start for sample
    return {
      day: dayDate.format("ddd"),
      date: dayDate.date(),
      times: defaultTimes[i] || ["—", "—", "—"],
      inactive: dayDate.day() === 0, // Sunday inactive
    };
  });

  const handlePrev = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNext = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };


    return (
        <div>
            <div className='bg-[#ECF5FF] py-5 '>
                <div className='px-4 border-1.5 border-gray-500 '>
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_9fr] bg-white rounded-4xl p-4 min-h-screen">
                        {/* Sidebar */}
                        <div className=" md:block w-full bg-[#f6f9fc] rounded-t-4xl md:rounded-l-4xl p-6">
                            <h1 className="text-4xl font-semibold font-Montserrat text-[#29CCE5]">
                                Health<span className="text-indigo-800">care.</span>
                            </h1>
                            {/* Menu Content */}
                            <div className="mt-10">
                                <h5 className="font-bold text-xl font-Poppins text-[#5F5F5F] mb-4">General</h5>
                                <ul className="space-y-6 text-gray-500">
                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <MdDashboardCustomize />
                                        <span className="font-bold text-xl">Dashboard</span>
                                    </li>
                                    {/* <li className="flex items-center space-x-3 hover:text-indigo-800 font-semibold">
                                        <MdDashboardCustomize />
                                        <span
                                            onClick={() => navigate('/Dashboard')}
                                            className="font-bold text-xl cursor-pointer"
                                        >
                                            Dashboard
                                        </span>
                                    </li> */}

                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <LuHistory />
                                        <span className="font-bold text-xl">History</span>
                                    </li>
                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <BsCalendar2Event />
                                        <span className="font-bold text-xl">Calendar</span>
                                    </li>
                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <FaSquarePlus />
                                        <span className="font-bold text-xl">Appointments</span>
                                    </li>
                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <HiOutlineChartBar />
                                        <span className="font-bold text-xl">Statistics</span>
                                    </li>
                                </ul>

                                <h5 className="font-bold text-xl pt-10 font-Poppins text-[#5F5F5F] mb-4">Tools</h5>
                                <ul className="space-y-6 text-gray-500">
                                    <li className="flex items-center space-x-3 hover:text-indigo-800 font-semibold">
                                        <IoChatbubbleEllipsesSharp />
                                        <span className="font-bold text-xl">Chat</span>
                                    </li>
                                    <li className="flex items-center space-x-3 hover:text-indigo-800">
                                        <FaPhoneAlt />
                                        <span className="font-bold text-xl">Support</span>
                                    </li>
                                </ul>

                                <div className="mt-25">
                                    <li className="flex items-center space-x-3 text-gray-500 hover:text-indigo-800">
                                        <IoSettingsSharp />
                                        <span className="font-bold text-xl">Setting</span>
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className="px-4">
                            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5">
                                <div className="w-full md:w-1/2  p-4  rounded-lg">
                                    <div className='py-[5%]'>
                                        <div className="w-full max-w-2xl mx-auto px-4">
                                            <div className="flex items-center bg-white rounded-full shadow-sm  border-gray-400 px-4 py-2 w-full">
                                                {/* Search Icon */}
                                                <FiSearch className="text-gray-500 text-xl mr-2" />
                                                {/* Input Field */}
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
                                                />

                                                {/* Notification Icon */}
                                                <div className="ml-4">
                                                    <IoMdNotificationsOutline className="text-indigo-800 text-2xl" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex justify-between mx-auto p-4  '>
                                            <p className='text-4xl font-semibold text-indigo-800'>Dashboard</p>
                                            <section>
                                                <select class="border-none rounded px-4 py-2 text-indigo-800 text-sm font-bold">
                                                    <option>This Week</option>
                                                    <option>Last Week</option>
                                                    <option>This Month</option>
                                                </select>
                                            </section>
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-6 p-4 w-full">
                                            {/* Left Section - Body Illustration */}
                                            <div className="flex-1  rounded-3xl p-4 flex justify-center items-center relative">
                                                <img
                                                    src={HumanBody}
                                                    alt="Human Anatomy"
                                                    className="w-full max-w-[400px] object-contain"
                                                />

                                                {/* Heart Label */}
                                                <div className="absolute top-[20%] right-[-10%] bg-indigo-700 text-white text-sm px-4 py-2 rounded-full shadow">
                                                    ❤️ Healthy Heart
                                                </div>

                                                {/* Leg Label */}
                                                <div className="absolute bottom-[15%] left-[-10%] bg-cyan-400 text-white text-sm px-4 py-2 rounded-full shadow">
                                                    💪 Healthy Leg
                                                </div>
                                            </div>

                                            {/* Right Section - Status Cards */}
                                            <div className="flex-1 flex flex-col justify-center gap-6">
                                                {/* Card Template */}
                                                {[
                                                    {
                                                        icon: "🫁",
                                                        title: "Lungs",
                                                        date: "26 Okt 2021",
                                                        color: "bg-red-400",
                                                        progress: "w-[70%]",
                                                    },
                                                    {
                                                        icon: "🦷",
                                                        title: "Teeth",
                                                        date: "26 Okt 2021",
                                                        color: "bg-green-400",
                                                        progress: "w-[80%]",
                                                    },
                                                    {
                                                        icon: "🦴",
                                                        title: "Bone",
                                                        date: "26 Okt 2021",
                                                        color: "bg-orange-400",
                                                        progress: "w-[60%]",
                                                    },
                                                ].map((item, index) => (
                                                    <div key={index} className="bg-[#f8fafe] p-6 rounded-2xl shadow-md">
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-3xl">{item.icon}</div>
                                                            <div>
                                                                <h4 className="font-bold text-lg text-indigo-800">{item.title}</h4>
                                                                <p className="text-gray-500 text-sm">Date: {item.date}</p>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3 w-full h-2 bg-gray-200 rounded-full">
                                                            <div className={`${item.color} h-2 rounded-full ${item.progress}`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="text-right pr-2 pt-2 text-sm font-bold text-indigo-800 hover:underline cursor-pointer">Details →</div>
                                            </div>
                                        </div>
                                        <div className="bg-[#f8fafe] rounded-3xl p-4 w-full">
                                            <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-lg font-bold text-[#2d2a7c]">Activity</h2>
                                                <span className="text-sm font-bold text-gray-500">3 appointment on this week</span>
                                            </div>

                                            <ResponsiveContainer width="100%" height={140}>
                                                <BarChart data={data} barCategoryGap={5}>
                                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                                    <Tooltip />
                                                    <Bar dataKey="gray" stackId="a" fill="#e2e8f0" barSize={6} radius={[4, 4, 0, 0]} />
                                                    <Bar dataKey="teal" stackId="a" fill="#00e0ff" barSize={6} radius={[4, 4, 0, 0]} />
                                                    <Bar dataKey="blue" stackId="a" fill="#2d2a7c" barSize={6} radius={[4, 4, 0, 0]} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                </div>
                                <div className=''>
                                    <div className="w-full bg-[#f8fbff] py-[5%] rounded-4xl ">
                                        <div className="flex justify-end pt-2 px-3 pb-[3%] w-full ">
                                            {/* Right buttons */}
                                            <div className="w-full md:w-1/2 flex justify-end gap-2">
                                                {/* Emoji avatar */}
                                                <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center text-2xl">
                                                    😊
                                                </div>

                                                {/* Plus button */}
                                                <div className="w-10 h-10 bg-[#2d2a7c] text-white rounded-xl flex items-center justify-center">
                                                    <GoPlus size={20} className='w-9' />
                                                </div>
                                            </div>
                                        </div>
    <div className="p-4 rounded-lg w-full overflow-x-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#2d2a7c]">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <div className="flex gap-2">
          <button className="text-[#2d2a7c]" onClick={handlePrev}>
            <span className="text-xl">&#8592;</span>
          </button>
          <button className="text-[#2d2a7c]" onClick={handleNext}>
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-4 text-center text-sm font-medium">
        {calendarDays.map(({ day, date, times, inactive }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md"
          >
            <span
              className={`text-sm ${inactive ? "text-gray-400" : "text-[#2d2a7c]"}`}
            >
              {day}
            </span>
            <span
              className={`font-bold text-xl ${inactive ? "text-gray-400" : "text-[#2d2a7c]"}`}
            >
              {date}
            </span>
            {times.map((time, idx) => {
              const isHighlighted = time.includes("*");
              const cleanTime = time.replace("*", "");
              return (
                <div
                  key={idx}
                  className={`w-full text-sm py-1 px-2 rounded-lg ${
                    isHighlighted
                      ? "bg-[#b8b8f1] text-white"
                      : time === "—"
                      ? "text-gray-400"
                      : "text-[#2d2a7c]"
                  }`}
                >
                  {time === "" ? "—" : cleanTime}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>

                                        <div className="grid grid-cols-1 md:grid-cols-[4fr_8fr] gap-4 px-4 pbx-4">
                                            {/* Dentist Card - smaller */}
                                            <div className="bg-gradient-to-r from-[#2d2a7c] to-[#4b4baf] text-white rounded-[20px] p-4 flex flex-col justify-between shadow-lg">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Dentist</h3>
                                                    <span className="text-xl">🦷</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">09:00-11:00</div>
                                                <div className="text-sm font-semibold text-white mt-1">Dr. Cameron Williamson</div>
                                            </div>

                                            {/* Physiotherapy Card - wider */}
                                            <div className="bg-[#e7e9ff] text-[#2d2a7c] rounded-[20px] p-4 flex flex-col justify-between shadow-md">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Physiotherapy Appointment</h3>
                                                    <span className="text-xl">💪</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">11:00-12:00</div>
                                                <div className="text-md font-semibold mt-1 text-[#4b4baf]">Dr. Kevin Djones</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-lg font-bold text-[#2d2a7c] px-4 py-6'>The Upcoming Schedule</p>
                                        </div>
                                        <p className='text-lg font-bold text-[#5F5F5F] px-4 pb-2'>On Thursday</p>
                                        <div className="grid grid-cols-1 md:grid-cols-[8fr_4fr] gap-4 px-4 pbx-4">
                                            {/* Dentist Card - smaller */}

                                            <div className="bg-[#e7e9ff] text-[#2d2a7c] rounded-[20px] p-4 flex flex-col justify-between shadow-lg">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Health checkup complete </h3>
                                                    <span className="text-xl">💉</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">11:00 AM</div>
                                            </div>

                                            {/* Physiotherapy Card - wider */}
                                            <div className="bg-[#e7e9ff] text-[#2d2a7c] rounded-[20px] p-4 flex flex-col justify-between shadow-md">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Ophthalmologist</h3>
                                                    <span className="text-xl">👁️</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">14:00 PM</div>
                                            </div>
                                        </div>
                                        <p className='text-lg font-bold text-[#5F5F5F] px-4 py-4'>On Saturday</p>
                                        <div className="grid grid-cols-1 md:grid-cols-[4fr_4fr] gap-4 px-4 pbx-4">
                                            {/* Dentist Card - smaller */}

                                            <div className="bg-[#e7e9ff] text-[#2d2a7c] rounded-[20px] p-4 flex flex-col justify-between shadow-lg">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Cardiologist </h3>
                                                    <span className="text-xl">❤️</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">12:00 AM</div>
                                            </div>

                                            {/* Physiotherapy Card - wider */}
                                            <div className="bg-[#e7e9ff] text-[#2d2a7c] rounded-[20px] p-4 flex flex-col justify-between shadow-md">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-semibold text-xl">Neurologist</h3>
                                                    <span className="text-xl">🧑‍⚕️</span>
                                                </div>
                                                <div className="mt-2 text-md font-semibold">16:00 PM</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default Index