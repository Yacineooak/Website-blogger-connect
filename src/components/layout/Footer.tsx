
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src="/lovable-uploads/ef48a8ab-9efa-4ae7-b5f9-627bca084039.png" 
                alt="ThinkMinnt Foundation" 
                className="h-10"
              />
            </Link>
            <p className="text-sm text-gray-600">
              Empowering lives through technology education, mentorship, and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-thinkminnt-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-thinkminnt-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-thinkminnt-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-thinkminnt-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Programs', 'Get Involved', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-600 hover:text-thinkminnt-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {[
                'Tech Education Workshops', 
                'Digital Literacy Training', 
                'Mentorship Programs', 
                'Innovation Hubs'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/programs"
                    className="text-sm text-gray-600 hover:text-thinkminnt-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-thinkminnt-blue mr-2 mt-0.5" />
                <span className="text-sm text-gray-600">
                  123 Innovation Drive, Tech Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-thinkminnt-blue mr-2" />
                <span className="text-sm text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-thinkminnt-blue mr-2" />
                <a 
                  href="mailto:info@thinkminnt.org" 
                  className="text-sm text-gray-600 hover:text-thinkminnt-blue transition-colors"
                >
                  info@thinkminnt.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} ThinkMinnt Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-gray-600 hover:text-thinkminnt-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-sm text-gray-600 hover:text-thinkminnt-blue transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
