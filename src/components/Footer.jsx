export default function Footer() {
  return (
    <footer className="bg-deep-grey text-soft-ivory py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/cnjaa-logo.svg" alt="CNJAA" className="w-12 h-12" />
              <div>
                <div className="font-marcellus text-xl font-bold">CNJAA</div>
                <div className="text-xs text-champagne-gold">Aviation Academy</div>
              </div>
            </div>
            <p className="text-soft-ivory/80 text-sm leading-relaxed">
              India's premier airline-ready pilot training academy. DGCA approved, Captain-led, and safety-driven.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-marcellus text-lg font-bold mb-4 text-champagne-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-champagne-gold transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-champagne-gold transition-colors">Programs</a></li>
              <li><a href="#fleet" className="hover:text-champagne-gold transition-colors">Fleet</a></li>
              <li><a href="#admissions" className="hover:text-champagne-gold transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-marcellus text-lg font-bold mb-4 text-champagne-gold">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#programs" className="hover:text-champagne-gold transition-colors">CPL Training</a></li>
              <li><a href="#programs" className="hover:text-champagne-gold transition-colors">DGCA Ground School</a></li>
              <li><a href="#programs" className="hover:text-champagne-gold transition-colors">Multi Engine Rating</a></li>
              <li><a href="#programs" className="hover:text-champagne-gold transition-colors">Instrument Rating</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-marcellus text-lg font-bold mb-4 text-champagne-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-soft-ivory/80">
              <li>📍 Aerodrome Road, Mumbai</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@cnjaa.com</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center hover:bg-champagne-gold transition-colors">
                f
              </a>
              <a href="#" className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center hover:bg-champagne-gold transition-colors">
                in
              </a>
              <a href="#" className="w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center hover:bg-champagne-gold transition-colors">
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-ivory/20 pt-6 text-center text-sm text-soft-ivory/60">
          <p>© {new Date().getFullYear()} CNJAA - Capt. Nikkhiel Jadhav Aviation Academy Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2">DGCA Approved | Safety First | Excellence Always</p>
        </div>
      </div>
    </footer>
  );
}
