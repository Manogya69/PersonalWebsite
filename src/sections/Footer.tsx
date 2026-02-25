import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer reveal
      gsap.fromTo(
        footerRef.current,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          },
        }
      );

      // Logo
      gsap.fromTo(
        '.footer-logo',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          },
        }
      );

      // Nav links
      gsap.fromTo(
        '.footer-nav-link',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.08,
          ease: 'smooth',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Divider
      gsap.fromTo(
        '.footer-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-16 bg-black border-t border-white/5"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center mb-12">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="footer-logo group mb-8"
            >
              <span className="font-display text-4xl sm:text-5xl font-bold text-white transition-all duration-300 group-hover:text-gradient">
                Manogya<span className="text-red">.</span>
              </span>
            </a>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="footer-nav-link relative text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-red transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </nav>

            {/* Tagline */}
            <p className="text-white/40 text-sm max-w-md">
              Creating digital experiences that inspire and engage.
            </p>
          </div>

          {/* Divider */}
          <div className="footer-divider w-full h-px bg-white/10 mb-8 origin-left" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div>
              &copy; {new Date().getFullYear()} Manogya Manandhar. All rights reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Designed & Built with</span>
              <Heart className="w-4 h-4 text-red fill-red animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
