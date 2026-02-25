import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Code, Monitor, Sparkles, Layout, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that delight users.',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      description: 'Crafting memorable brand visuals and comprehensive guidelines.',
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Building responsive and performant websites with modern tech.',
    },
    {
      icon: Layout,
      title: 'Motion Design',
      description: 'Adding life through animation and smooth transitions.',
    },
    {
      icon: Code,
      title: 'Frontend Dev',
      description: 'Writing clean, maintainable code with best practices.',
    },
    {
      icon: Compass,
      title: 'Creative Direction',
      description: 'Guiding projects from concept to successful completion.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.services-header',
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

      // Center hexagon first
      gsap.fromTo(
        '.service-card:nth-child(1)',
        { scale: 0, rotate: -180 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
          },
        }
      );

      // Surrounding hexagons ripple out
      gsap.fromTo(
        '.service-card:not(:nth-child(1))',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%',
          },
        }
      );

      // Connecting lines
      gsap.fromTo(
        '.connecting-line',
        { strokeDashoffset: 100 },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'smooth',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 65%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="services-header text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-red font-medium tracking-wider uppercase mb-4">
            (Services)
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What I Do
          </h2>
          <p className="text-lg text-white/60">
            I offer a comprehensive range of creative services to help your brand 
            stand out in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group relative p-8 bg-dark-100/50 border border-white/5 rounded-2xl transition-all duration-500 hover:bg-dark-100 hover:border-red/30 hover:shadow-glow cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white group-hover:scale-110">
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 mb-4">Have a project in mind?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-white font-medium rounded-full transition-all duration-300 hover:shadow-glow-lg"
          >
            <span>Let&apos;s Discuss</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
