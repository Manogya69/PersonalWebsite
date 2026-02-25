import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      category: 'Brand Identity',
      title: 'Hotel Drishya',
      description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
      image: '/images/project-1.jpg',
      link: '#',
    },
    {
      id: 2,
      category: 'Graphic Designs',
      title: 'Modern Logo Designs',
      description: 'Modern logos made for clients according to their brand identity.',
      image: '/images/logo designs.png',
      link: '#',
    },
    {
      id: 3,
      category: 'App Development',
      title: 'Password Generator',
      description: 'Easy to use password generator with various input options available.',
      image: '/images/project-3.jpg',
      link: '#',
    },
    {
      id: 4,
      category: 'Development',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern shopping experience.',
      image: '/images/project-4.jpg',
      link: '#',
    },
    {
      id: 5,
      category: 'Graphic Designs',
      title: 'Social Media Posts',
      description: 'Designs made for various events ready to be posted without any additional hassle.',
      image: '/images/socialmedia designs.png',
      link: '#',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.projects-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        '.project-card',
        { x: 100, opacity: 0, rotateY: 15 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );

      // Image scale reveal
      gsap.fromTo(
        '.project-image',
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1,
          ease: 'smooth',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="projects-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-sm text-red font-medium tracking-wider uppercase mb-4">
              (Projects)
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Featured Work
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-white/60 hover:text-red transition-colors duration-300"
          >
            <span className="text-sm font-medium">View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className={`project-card group relative block overflow-hidden rounded-2xl bg-dark-100 border border-white/5 transition-all duration-500 hover:border-red/30 hover:shadow-glow ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* View Project Button */}
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                {/* Category */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-red bg-red/10 rounded-full">
                  {project.category}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/50 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.description}
                </p>

                {/* Link */}
                <div className="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-red transition-colors duration-300">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
