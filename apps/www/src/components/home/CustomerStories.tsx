"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Award } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Asare",
    role: "CTO, Accra FinTech",
    avatar: "/avatars/kwame.jpg",
    quote: "Sendexa's direct MTN routes improved our OTP delivery from 82% to 99% in just two weeks.",
    logo: "/logos/accra-fintech.svg",
    rating: 5,
    highlight: "99% delivery rate"
  },
  {
    name: "Ngozi Eze",
    role: "Product Lead, Lagos",
    avatar: "/avatars/ngozi.jpg",
    quote: "Finally an API that understands African number formatting quirks. Reduced failed SMS by 65%.",
    logo: "/logos/lagos-tech.svg",
    rating: 4,
    highlight: "65% reduction"
  },
  {
    name: "Amina Diallo",
    role: "CEO, Dakar Logistics",
    avatar: "/avatars/amina.jpg",
    quote: "24/7 Accra-based support makes all the difference. Issues resolved in under 15 minutes.",
    logo: "/logos/dakar-logistics.svg",
    rating: 5,
    highlight: "15-minute response"
  },
  {
    name: "David Mbeki",
    role: "Head of Ops",
    avatar: "/avatars/david.jpg",
    quote: "The most reliable SMS gateway. 99.9% uptime over the last 6 months.",
    logo: "/logos/johannesburg-ops.svg",
    rating: 5,
    highlight: "99.9% uptime"
  },
  {
    name: "Fatou Bensouda",
    role: "Marketing Director, Abidjan",
    avatar: "/avatars/fatou.jpg",
    quote: "Sendexa's analytics dashboard gives us insights we never had before. Game changer for campaigns.",
    logo: "/logos/abidjan-marketing.svg",
    rating: 5,
    highlight: "Insightful analytics"
  },
  {
    name: "Samuel Okeke",
    role: "CTO, Nairobi Tech",
    avatar: "/avatars/samuel.jpg",
    quote: "Seamless integration with our existing systems. The API is well documented and easy to use.",
    logo: "/logos/nairobi-tech.svg",
    rating: 4,
    highlight: "Easy integration"
  }
];

export default function CustomerStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate how many slides to show based on screen size
  const slidesToShow = () => {
    if (typeof window === 'undefined') return 3;
    return window.innerWidth < 768 ? 1 : 3;
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const slides = slidesToShow();
        const maxIndex = Math.ceil(testimonials.length / slides) - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const nextTestimonial = () => {
    const slides = slidesToShow();
    const maxIndex = Math.ceil(testimonials.length / slides) - 1;
    setCurrentIndex(prev => (prev + 1) > maxIndex ? 0 : prev + 1);
  };

  const prevTestimonial = () => {
    const slides = slidesToShow();
    const maxIndex = Math.ceil(testimonials.length / slides) - 1;
    setCurrentIndex(prev => (prev - 1) < 0 ? maxIndex : prev - 1);
  };

  return (
    <section 
      className="py-13 bg-gray-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden px-2">
            <div className="flex transition-transform duration-300"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2 md:w-1/3"
                >
                  <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full">
                    <div className="flex gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="relative pl-5 mb-4">
                      <Quote className="absolute left-0 top-0 w-4 h-4 text-blue-500" />
                      <p className="text-gray-700">{testimonial.quote}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <div className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white p-2 rounded-full shadow hover:bg-gray-50 z-10 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white p-2 rounded-full shadow hover:bg-gray-50 z-10 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-1">
          {Array.from({ 
            length: Math.ceil(testimonials.length / slidesToShow()) 
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-600 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}