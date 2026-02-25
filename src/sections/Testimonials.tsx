import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote: "Alex transformed our digital presence completely. His attention to detail and creative vision exceeded all our expectations. The results speak for themselves—our engagement increased by 200%.",
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc',
      avatar: '/images/avatar-1.jpg',
    },
    {
      id: 2,
      quote: "Working with Alex was an absolute pleasure. He understood our vision from day one and delivered a website that perfectly captures our brand essence. Highly recommended!",
      name: 'Michael Torres',
      role: 'Founder, Design Co',
      avatar: '/images/avatar-2.jpg',
    },
    {
      id: 3,
      quote: "Alex's ability to blend aesthetics with functionality is unmatched. He doesn't just design—he creates experiences that resonate with users and drive real business results.",
      name: 'Emily Watson',
      role: 'Marketing Director, Brandify',
      avatar: '/images/avatar-3.jpg',
    },
    {
      id: 4,
      quote: "From concept to execution, Alex demonstrated exceptional skill and professionalism. Our new platform has received overwhelmingly positive feedback from our users.",
      name: 'David Kim',
      role: 'CTO, AppWorks',
      avatar: '/images/avatar-4.jpg',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.testimonials-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Card stack animation
      gsap.fromTo(
        '.testimonial-card',
        { z: -500, opacity: 0, rotateX: 30 },
        {
          z: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.testimonials-container',
            start: 'top 75%',
          },
        }
      );

      // Navigation
      gsap.fromTo(
        '.testimonial-nav',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: '.testimonials-container',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="testimonials-header text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-red font-medium tracking-wider uppercase mb-4">
            (Testimonials)
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Client Words
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="testimonials-container relative max-w-4xl mx-auto">
          {/* Cards Stack */}
          <div className="relative h-[400px] sm:h-[350px] perspective-1000">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              const isPrev = offset === -1 || (activeIndex === 0 && index === testimonials.length - 1);
              const isNext = offset === 1 || (activeIndex === testimonials.length - 1 && index === 0);

              return (
                <div
                  key={testimonial.id}
                  className={`testimonial-card absolute inset-0 transition-all duration-500 ease-expo-out ${
                    isActive ? 'z-30' : isPrev || isNext ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: isActive
                      ? 'translateX(0) scale(1)'
                      : isPrev
                      ? 'translateX(-30px) scale(0.95)'
                      : isNext
                      ? 'translateX(30px) scale(0.95)'
                      : `translateX(${offset * 50}px) scale(0.9)`,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                    filter: isActive ? 'blur(0px)' : 'blur(4px)',
                  }}
                >
                  <div className="h-full p-8 sm:p-12 bg-dark-100 border border-white/10 rounded-3xl">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-red/30 mb-6" />

                    {/* Quote Text */}
                    <blockquote className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-red/30"
                      />
                      <div>
                        <div className="font-display font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-white/50">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="testimonial-nav flex items-center justify-center gap-6 mt-8">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:text-white hover:border-red/50 hover:bg-red/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-red rounded-full'
                      : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:text-white hover:border-red/50 hover:bg-red/5"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
