import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const skills = [
    'UI/UX Design',
    'Brand Identity',
    'Web Development',
    'Motion Design',
    'Frontend Dev',
    'Creative Direction',
    'Graphic Design',
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '2+', label: 'Years Experience' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section label animation
      gsap.fromTo(
        '.about-label',
        { x: -50, y: 50, opacity: 0 },
        {
          x: 0,
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

      // Heading animation
      gsap.fromTo(
        '.about-heading',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Paragraphs animation
      gsap.fromTo(
        '.about-paragraph',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'smooth',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Image reveal
      gsap.fromTo(
        '.about-image',
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        {
          clipPath: 'circle(100% at 50% 50%)',
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-card',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        '.skill-tag',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 85%',
          },
        }
      );

      // Parallax for image
      gsap.to('.about-image', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red/5 to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <span className="about-label inline-block text-sm text-red font-medium tracking-wider uppercase transform -rotate-6">
              (About)
            </span>

            {/* Heading */}
            <h2 className="about-heading font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Who I Am
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="about-paragraph text-lg text-white/70 leading-relaxed">
                I&apos;m a creative professional with over 2 years of experience 
                bridging the gap between design and development. 
                {/* Based in kathmandu, I work 
                with startups and established brands to create digital experiences that leave 
                lasting impressions. */}

              </p>
              <p className="about-paragraph text-lg text-white/70 leading-relaxed">
                My approach combines strategic thinking with meticulous craftsmanship. Whether 
                I&apos;m designing a brand identity or building a complex web application, I bring 
                the same level of dedication and attention to detail.
              </p>
            </div>

            {/* Skills */}
            <div className="skills-container">
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 transition-all duration-300 hover:bg-red/10 hover:border-red/30 hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="about-image relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/about me.jpg"
                alt="About Manogya Manandhar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <div ref={statsRef} className="absolute -bottom-8 -left-8 right-8 flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-card flex-1 min-w-[120px] px-6 py-4 bg-dark-100 border border-white/10 rounded-xl backdrop-blur-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-red/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
