import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #5D5B58 0%, #3a3937 100%)'
      }}
    >
      {/* 3D Hangar Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[400px]">
          ✈️
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-soft-ivory">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-soft-ivory/80 max-w-3xl mx-auto">
            Ready to start your aviation journey? Get in touch with us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-soft-ivory/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
            <h3 className="font-marcellus text-2xl font-bold mb-6 text-deep-grey">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-deep-grey font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-deep-grey font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-deep-grey font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-deep-grey font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-gold to-champagne-gold text-soft-ivory font-marcellus text-xl rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-soft-ivory/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h4 className="font-marcellus text-xl font-bold mb-2 text-deep-grey">Address</h4>
                    <p className="text-deep-grey/80">
                      CNJAA Aviation Academy<br />
                      Aerodrome Road, Mumbai<br />
                      Maharashtra, India - 400001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-soft-ivory/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h4 className="font-marcellus text-xl font-bold mb-2 text-deep-grey">Phone</h4>
                    <p className="text-deep-grey/80">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-soft-ivory/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h4 className="font-marcellus text-xl font-bold mb-2 text-deep-grey">Email</h4>
                    <p className="text-deep-grey/80">
                      info@cnjaa.com<br />
                      admissions@cnjaa.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-soft-ivory/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h4 className="font-marcellus text-xl font-bold mb-2 text-deep-grey">Office Hours</h4>
                    <p className="text-deep-grey/80">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
