// app/booking/page.tsx
"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaVideo,
  FaPhotoVideo,
  FaBroadcastTower,
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <main className="bg-gray-50">
      {/* Booking Hero */}
      <section className="py-20 bg-black text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book Our <span className="text-[#cb991e]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional media production services for events, documentaries, and creative projects. 
              Let's bring your vision to life with our expert team and equipment.
            </p>
          </div>
        </Container>
      </section>

      {/* Booking Process */}
      <section className="py-15 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex flex-col items-center ${step.active ? 'text-[#cb991e]' : 'text-gray-400'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${step.active ? 'border-[#cb991e] bg-[#cb991e] text-white' : 'border-gray-300'}`}>
                        {step.completed ? (
                          <FaCheckCircle className="text-lg" />
                        ) : (
                          <span className="font-semibold">{step.number}</span>
                        )}
                      </div>
                      <span className="text-sm mt-2 font-medium">{step.label}</span>
                    </div>
                    {index < bookingSteps.length - 1 && (
                      <div className={`w-24 h-1 mx-4 ${step.active ? 'bg-[#cb991e]' : 'bg-gray-300'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Service Selection */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-black mb-8">Select Your Service</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        selectedService === service.id
                          ? 'border-[#cb991e] bg-[#cb991e] bg-opacity-5'
                          : 'border-gray-200 hover:border-[#cb991e] hover:shadow-lg'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          selectedService === service.id ? 'bg-[#cb991e]' : 'bg-gray-100'
                        }`}>
                          <service.icon className={`text-lg ${
                            selectedService === service.id ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-3">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[#cb991e] font-bold">{service.price}</span>
                            <span className="text-sm text-gray-500">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Date & Time Selection */}
                {selectedService && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-2xl font-bold text-black mb-6">Select Date & Time</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <FaCalendarAlt className="inline mr-2 text-[#cb991e]" />
                          Select Date
                        </label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          <FaClock className="inline mr-2 text-[#cb991e]" />
                          Select Time
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                        >
                          <option value="">Choose a time</option>
                          <option value="08:00">8:00 AM</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900 text-white rounded-lg p-6 sticky top-6">
                  <h3 className="text-2xl font-bold mb-6">Booking Summary</h3>
                  
                  {selectedService ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                        <span className="text-gray-300">Service:</span>
                        <span className="font-semibold">
                          {services.find(s => s.id === selectedService)?.title}
                        </span>
                      </div>
                      
                      {selectedDate && (
                        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                          <span className="text-gray-300">Date:</span>
                          <span className="font-semibold">{selectedDate}</span>
                        </div>
                      )}
                      
                      {selectedTime && (
                        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                          <span className="text-gray-300">Time:</span>
                          <span className="font-semibold">{selectedTime}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-gray-300">Total:</span>
                        <span className="text-2xl font-bold text-[#cb991e]">
                          {services.find(s => s.id === selectedService)?.price}
                        </span>
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-all duration-300">
                        Continue to Details
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FaCalendarAlt className="text-4xl text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400">Select a service to see booking details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-15 bg-gray-900 text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#cb991e]">DS Online TV</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional media production with a passion for storytelling and cultural preservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#cb991e] rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-15 bg-gradient-to-r from-[#cb991e] to-[#e0b34e] text-black">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Have questions about our services or need a custom quote? 
              Contact our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 border-2 border-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

// Data for booking page
const bookingSteps = [
  { number: 1, label: "Service", active: true, completed: false },
  { number: 2, label: "Date & Time", active: false, completed: false },
  { number: 3, label: "Details", active: false, completed: false },
  { number: 4, label: "Confirmation", active: false, completed: false },
];

const services = [
  {
    id: "event-coverage",
    title: "Event Coverage",
    description: "Professional video coverage of your event with multi-camera setup",
    price: "From ₵2,500",
    duration: "4-8 hours",
    icon: FaVideo,
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    description: "Real-time streaming of your event to multiple platforms",
    price: "From ₵1,800",
    duration: "2-6 hours",
    icon: FaBroadcastTower,
  },
  {
    id: "documentary",
    title: "Documentary Production",
    description: "Complete documentary production from concept to final edit",
    price: "From ₵5,000",
    duration: "Custom",
    icon: FaPhotoVideo,
  },
  {
    id: "corporate-video",
    title: "Corporate Video",
    description: "Professional videos for businesses and organizations",
    price: "From ₵3,500",
    duration: "1-3 days",
    icon: FaUsers,
  },
];

const features = [
  {
    icon: FaVideo,
    title: "Professional Equipment",
    description: "State-of-the-art cameras, lighting, and audio equipment for superior quality"
  },
  {
    icon: FaUsers,
    title: "Expert Team",
    description: "Experienced producers, cinematographers, and editors passionate about storytelling"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Local Knowledge",
    description: "Deep understanding of Volta and Oti regions and their unique cultural contexts"
  }
];