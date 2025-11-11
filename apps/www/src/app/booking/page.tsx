// app/booking/page.tsx
"use client"
import { useState } from "react";
//import Image from "next/image";
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
  FaCreditCard,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
} from "react-icons/fa";
import { Container } from "@/layout/Container";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    description: "",
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleCustomerDetailsChange = (field: string, value: string) => {
    setCustomerDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateDeposit = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return "₵0";
    
    // Extract numeric value from price string (e.g., "From ₵2,500" -> 2500)
    const priceMatch = service.price.match(/₵([\d,]+)/);
    if (!priceMatch) return "₵0";
    
    const price = parseInt(priceMatch[1].replace(/,/g, ''));
    const deposit = price * 0.7; // 70% deposit
    return `₵${deposit.toLocaleString()}`;
  };

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
            {/* Progress Steps - Mobile Responsive */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                {bookingSteps.map((step, index) => (
                  <div key={index} className="flex items-center w-full sm:w-auto">
                    <div className={`flex flex-col items-center flex-1 sm:flex-initial ${
                      currentStep >= step.number ? 'text-[#cb991e]' : 'text-gray-400'
                    }`}>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 ${
                        currentStep > step.number 
                          ? 'border-[#cb991e] bg-[#cb991e] text-white' 
                          : currentStep === step.number
                          ? 'border-[#cb991e] bg-white text-[#cb991e]'
                          : 'border-gray-300 bg-white'
                      }`}>
                        {currentStep > step.number ? (
                          <FaCheckCircle className="text-lg" />
                        ) : (
                          <span className="font-semibold text-sm sm:text-base">{step.number}</span>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm mt-2 font-medium text-center hidden sm:block">
                        {step.label}
                      </span>
                      <span className="text-xs mt-2 font-medium text-center sm:hidden">
                        {step.mobileLabel}
                      </span>
                    </div>
                    {index < bookingSteps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 sm:mx-4 sm:w-24 ${
                        currentStep > step.number ? 'bg-[#cb991e]' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div>
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

                    <div className="flex justify-end">
                      <button
                        onClick={nextStep}
                        disabled={!selectedService}
                        className="px-8 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all duration-300"
                      >
                        Continue to Date & Time
                        <FaArrowRight className="ml-2 inline" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-8">Select Date & Time</h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
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
                            min={new Date().toISOString().split('T')[0]}
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

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-8 py-3 border-2 border-gray-300 hover:border-[#cb991e] text-gray-700 hover:text-[#cb991e] font-semibold rounded-lg transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!selectedDate || !selectedTime}
                        className="px-8 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all duration-300"
                      >
                        Continue to Details
                        <FaArrowRight className="ml-2 inline" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Customer Details */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-8">Your Details</h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaUser className="inline mr-2 text-[#cb991e]" />
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={customerDetails.firstName}
                            onChange={(e) => handleCustomerDetailsChange('firstName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaUser className="inline mr-2 text-[#cb991e]" />
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={customerDetails.lastName}
                            onChange={(e) => handleCustomerDetailsChange('lastName', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaEnvelope className="inline mr-2 text-[#cb991e]" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={customerDetails.email}
                            onChange={(e) => handleCustomerDetailsChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaPhone className="inline mr-2 text-[#cb991e]" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={customerDetails.phone}
                            onChange={(e) => handleCustomerDetailsChange('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                            placeholder="+233 24 123 4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Type *
                          </label>
                          <select
                            value={customerDetails.eventType}
                            onChange={(e) => handleCustomerDetailsChange('eventType', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                          >
                            <option value="">Select event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="festival">Festival</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="documentary">Documentary</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FaMapMarkerAlt className="inline mr-2 text-[#cb991e]" />
                            Event Location *
                          </label>
                          <input
                            type="text"
                            value={customerDetails.location}
                            onChange={(e) => handleCustomerDetailsChange('location', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e]"
                            placeholder="Hohoe, Volta Region"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <FaFileAlt className="inline mr-2 text-[#cb991e]" />
                          Project Description *
                        </label>
                        <textarea
                          value={customerDetails.description}
                          onChange={(e) => handleCustomerDetailsChange('description', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb991e] resize-vertical"
                          placeholder="Tell us about your event or project..."
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-8 py-3 border-2 border-gray-300 hover:border-[#cb991e] text-gray-700 hover:text-[#cb991e] font-semibold rounded-lg transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={!customerDetails.firstName || !customerDetails.lastName || !customerDetails.email || !customerDetails.phone || !customerDetails.eventType || !customerDetails.location || !customerDetails.description}
                        className="px-8 py-3 bg-[#cb991e] hover:bg-[#d8aa3a] disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-all duration-300"
                      >
                        Continue to Payment
                        <FaArrowRight className="ml-2 inline" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Payment & Confirmation */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-3xl font-bold text-black mb-8">Payment & Confirmation</h2>
                    
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <div className="text-center mb-8">
                        <FaCreditCard className="text-4xl text-[#cb991e] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-black mb-2">70% Deposit Required</h3>
                        <p className="text-gray-600">
                          To confirm your booking, please pay a 70% deposit. The remaining balance is due 7 days before your event.
                        </p>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <FaCreditCard className="text-yellow-600 text-xl" />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-semibold text-yellow-800">Payment Information</h4>
                            <p className="text-sm text-yellow-700 mt-1">
                              Deposit: <strong>{calculateDeposit()}</strong> (70% of total)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                          <span className="text-gray-700">Mobile Money</span>
                          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300">
                            Pay Now
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                          <span className="text-gray-700">Bank Transfer</span>
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                            Get Details
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                          <span className="text-gray-700">Cash Payment</span>
                          <button className="px-4 py-2 bg-[#cb991e] hover:bg-[#d8aa3a] text-black font-semibold rounded-lg transition-colors duration-300">
                            Schedule
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={prevStep}
                        className="px-8 py-3 border-2 border-gray-300 hover:border-[#cb991e] text-gray-700 hover:text-[#cb991e] font-semibold rounded-lg transition-all duration-300"
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => alert('Booking confirmed! We will contact you shortly.')}
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300"
                      >
                        Confirm Booking
                      </button>
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
                        <span className="font-semibold text-right">
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
                      
                      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                        <span className="text-gray-300">Total Price:</span>
                        <span className="text-xl font-bold text-[#cb991e]">
                          {services.find(s => s.id === selectedService)?.price}
                        </span>
                      </div>

                      {currentStep >= 4 && (
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-gray-300">Deposit (70%):</span>
                          <span className="text-lg font-bold text-green-400">
                            {calculateDeposit()}
                          </span>
                        </div>
                      )}
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
      <section className="py-15 bg-black text-white">
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
              Questions About Booking?
            </h2>
            <p className="text-xl mb-8">
              Contact our team for personalized assistance and custom quotes.
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
  { number: 1, label: "Service Selection", mobileLabel: "Service", active: true, completed: false },
  { number: 2, label: "Date & Time", mobileLabel: "Date/Time", active: false, completed: false },
  { number: 3, label: "Your Details", mobileLabel: "Details", active: false, completed: false },
  { number: 4, label: "Payment", mobileLabel: "Payment", active: false, completed: false },
];

const services = [
  {
    id: "event-coverage",
    title: "Event Coverage",
    description: "Professional video coverage of your event with multi-camera setup",
    price: "₵2,500",
    duration: "4-8 hours",
    icon: FaVideo,
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    description: "Real-time streaming of your event to multiple platforms",
    price: "₵1,800",
    duration: "2-6 hours",
    icon: FaBroadcastTower,
  },
  {
    id: "documentary",
    title: "Documentary Production",
    description: "Complete documentary production from concept to final edit",
    price: "₵5,000",
    duration: "Custom",
    icon: FaPhotoVideo,
  },
  {
    id: "corporate-video",
    title: "Corporate Video",
    description: "Professional videos for businesses and organizations",
    price: "₵3,500",
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