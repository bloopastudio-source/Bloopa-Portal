import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Admissions() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const progressRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    message: ''
  });
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    // Calculate form progress
    const filled = Object.values(formData).filter(v => v !== '').length;
    const total = Object.keys(formData).length;
    setProgress((filled / total) * 100);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <section 
      ref={sectionRef}
      id="admissions" 
      className="relative py-24 px-4 md:px-8"
      style={{
        background: 'linear-gradient(135deg, #F4F1E8 0%, #ffffff 100%)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="font-marcellus text-4xl md:text-6xl font-bold mb-4 text-deep-grey">
            Admissions
          </h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-xl text-deep-grey/80 max-w-3xl mx-auto">
            Start your journey to becoming a professional pilot
          </p>
        </div>

        {/* Progress Bar (Runway Style) */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-deep-grey">Application Progress</span>
            <span className="text-sm font-semibold text-primary-gold">{Math.round(progress)}%</span>
          </div>
          <div className="relative h-3 bg-deep-grey/20 rounded-full overflow-hidden">
            {/* Runway markings */}
            <div className="absolute inset-0 flex items-center justify-around">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-2 bg-white/30"></div>
              ))}
            </div>
            {/* Progress */}
            <div 
              ref={progressRef}
              className="h-full bg-gradient-to-r from-primary-gold to-champagne-gold transition-all duration-500 rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg">
                ✈️
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border-2 border-primary-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-deep-grey font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-deep-grey font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-deep-grey font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-deep-grey font-semibold mb-2">Course of Interest *</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
              >
                <option value="">Select a course</option>
                <option value="cpl">CPL</option>
                <option value="dgca">DGCA Ground School</option>
                <option value="me">Multi Engine Rating</option>
                <option value="ir">Instrument Rating</option>
                <option value="airline">Airline Preparation</option>
              </select>
            </div>

            <div>
              <label className="block text-deep-grey font-semibold mb-2">Educational Qualification *</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors"
              >
                <option value="">Select qualification</option>
                <option value="12th">12th Grade (PCM)</option>
                <option value="diploma">Diploma</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Post Graduate</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-deep-grey font-semibold mb-2">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border-2 border-deep-grey/20 rounded-lg focus:border-primary-gold outline-none transition-colors resize-none"
              placeholder="Tell us about your aviation dreams..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary-gold to-champagne-gold text-soft-ivory font-marcellus text-xl rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Submit Application
          </button>
        </form>

        {/* Requirements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-soft-ivory/50 rounded-xl">
            <div className="text-4xl mb-3">📋</div>
            <h4 className="font-marcellus text-lg font-bold mb-2 text-deep-grey">Age Requirement</h4>
            <p className="text-deep-grey/80">Minimum 17 years old</p>
          </div>
          <div className="text-center p-6 bg-soft-ivory/50 rounded-xl">
            <div className="text-4xl mb-3">🎓</div>
            <h4 className="font-marcellus text-lg font-bold mb-2 text-deep-grey">Education</h4>
            <p className="text-deep-grey/80">12th Pass (PCM) with 50%</p>
          </div>
          <div className="text-center p-6 bg-soft-ivory/50 rounded-xl">
            <div className="text-4xl mb-3">🏥</div>
            <h4 className="font-marcellus text-lg font-bold mb-2 text-deep-grey">Medical</h4>
            <p className="text-deep-grey/80">Class 1 Medical Certificate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
