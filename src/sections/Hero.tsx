import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Instagram, Twitter, Linkedin, } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Headline animations
      tl.fromTo(
        '.headline-line',
        { y: 100, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.8, stagger: 0.15 },
        0.3
      );

      // Portrait animation
      tl.fromTo(
        portraitRef.current,
        { opacity: 0, rotateY: 30, scale: 0.9 },
        { opacity: 1, rotateY: 0, scale: 1, duration: 1.2 },
        0.4
      );

      // Subheadline
      tl.fromTo(
        '.subheadline',
        { y: 40, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.6 },
        1
      );

      // CTA buttons
      tl.fromTo(
        '.cta-button',
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'elastic.out(1, 0.5)' },
        1.2
      );

      // Social icons
      tl.fromTo(
        '.social-icon',
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.7)' },
        1.4
      );

      // Background grid animation
      gsap.to('.bg-grid-hero', {
        backgroundPosition: '50px 50px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect for portrait
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(portraitRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!portraitRef.current) return;
    gsap.to(portraitRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
    >
      {/* Background Grid */}
      <div className="bg-grid-hero absolute inset-0 bg-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div ref={contentRef} className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Headline */}
            <div ref={headlineRef} className="space-y-1 mb-8">
              <div className="overflow-hidden">
                <h1 className="headline-line font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                  Creative
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="headline-line font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                  Designer
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="headline-line font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                  <span className="text-white">& </span>
                  <span className="text-gradient">Developer</span>
                </h1>
              </div>
            </div>

            {/* Subheadline */}
            <p className="subheadline text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
              I craft digital experiences that blend stunning visuals with powerful functionality. 
              Let&apos;s build something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#projects')}
                className="cta-button group relative px-8 py-4 bg-red text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow-lg flex items-center gap-2"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-red-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="cta-button px-8 py-4 border border-white/20 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5 hover:border-white/40"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/_manogya/', label: 'Instagram' },
                { icon: Twitter, href: 'https://x.com/manogya69', label: 'Twitter' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/manogya-manandhar-060b14225/', label: 'LinkedIn' },
                // { icon: Dribbble, href: '#', label: 'Dribbble' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:text-red hover:border-red/50 hover:bg-red/5"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative perspective-1000 preserve-3d"
            >
              {/* Portrait Frame */}
              <div className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-red/30 to-transparent rounded-2xl blur-xl opacity-50" />
                
                {/* Image */}
                <img
                  src="/images/hero-portrait.JPG"
                  alt="Manogya Manandhar"
                  className="relative w-full h-full object-cover rounded-2xl"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-dark-100 border border-white/10 rounded-full animate-float">
                <span className="text-sm font-medium text-white">2+ Years Experience</span>
              </div>

              {/* Floating Stats */}
              {/* <div className="absolute -top-4 -right-4 px-4 py-2 bg-red rounded-full animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-bold text-white">50+ Projects</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
