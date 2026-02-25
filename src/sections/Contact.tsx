import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram,  } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'manogya57@gmail.com', href: 'mailto:manogya57@gmail.com' },
    { icon: Phone, label: 'Phone', value: '9869060945', href: '' },
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/_manogya/', label: 'Instagram' },
                { icon: Twitter, href: 'https://x.com/manogya69', label: 'Twitter' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/manogya-manandhar-060b14225/', label: 'LinkedIn' },
                // { icon: Dribbble, href: '#', label: 'Dribbble' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.contact-header',
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

      // Contact info stagger
      gsap.fromTo(
        '.contact-info-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
          },
        }
      );

      // Social icons
      gsap.fromTo(
        '.social-link',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.08,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: '.social-links',
            start: 'top 85%',
          },
        }
      );

      // Form container
      gsap.fromTo(
        '.form-container',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.form-container',
            start: 'top 80%',
          },
        }
      );

      // Form fields
      gsap.fromTo(
        '.form-field',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: 'smooth',
          scrollTrigger: {
            trigger: '.form-container',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red/10 to-transparent" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="contact-header text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm text-red font-medium tracking-wider uppercase mb-4">
            (Contact)
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-white/60">
            Have a project in mind? Let&apos;s talk about how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            {/* Contact Details */}
            <div className="contact-info space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="contact-info-item group flex items-center gap-4 p-4 bg-dark-100/50 border border-white/5 rounded-xl transition-all duration-300 hover:bg-dark-100 hover:border-red/30"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">{item.label}</div>
                    <div className="text-white group-hover:text-gradient transition-all duration-300">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">
                Follow Me
              </h3>
              <div className="social-links flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="social-link w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:text-red hover:border-red/50 hover:bg-red/5"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="form-field relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-4 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all duration-300"
                    placeholder="Name"
                  />
                  <label className="absolute left-4 -top-2.5 px-1 bg-black text-sm text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red">
                    Name
                  </label>
                </div>

                <div className="form-field relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-4 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all duration-300"
                    placeholder="Email"
                  />
                  <label className="absolute left-4 -top-2.5 px-1 bg-black text-sm text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red">
                    Email
                  </label>
                </div>
              </div>

              {/* Subject */}
              <div className="form-field relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-4 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all duration-300"
                  placeholder="Subject"
                />
                <label className="absolute left-4 -top-2.5 px-1 bg-black text-sm text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red">
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="form-field relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="peer w-full px-4 py-4 bg-dark-100 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-red/50 focus:ring-2 focus:ring-red/10 transition-all duration-300 resize-none"
                  placeholder="Message"
                />
                <label className="absolute left-4 -top-2.5 px-1 bg-black text-sm text-white/40 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-red">
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-field group relative w-full sm:w-auto px-8 py-4 bg-red text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-glow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
                <span className="absolute inset-0 bg-red-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
