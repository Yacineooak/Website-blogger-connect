
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';
import { Card, CardContent } from '@/components/shared/Card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const officeLocations = [
    {
      name: "Headquarters",
      address: "123 Innovation Drive, Tech Valley, CA 94043",
      phone: "(123) 456-7890",
      email: "info@thinkminnt.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    {
      name: "East Coast Office",
      address: "456 Digital Lane, Innovate City, NY 10001",
      phone: "(456) 789-0123",
      email: "eastcoast@thinkminnt.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    {
      name: "Midwest Innovation Hub",
      address: "789 Tech Boulevard, Progress Town, IL 60007",
      phone: "(789) 012-3456",
      email: "midwest@thinkminnt.org",
      hours: "Mon-Fri: 10:00 AM - 6:00 PM"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-thinkminnt-blue text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-thinkminnt-blue-dark to-transparent" />
            <div className="w-full h-full" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="hero-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact Us
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Have questions or want to get involved? We'd love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card>
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6 text-thinkminnt-blue">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject*</label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                              required
                            />
                          </div>
                          
                          <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={6}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                              required
                            ></textarea>
                          </div>
                          
                          <div className="text-right">
                            <Button type="submit" variant="primary" className="flex items-center">
                              <Send size={16} className="mr-2" />
                              Send Message
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                
                {/* Contact Info */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <Card className="h-full">
                      <CardContent className="p-8 h-full flex flex-col">
                        <h2 className="text-2xl font-bold mb-6 text-thinkminnt-blue">Contact Information</h2>
                        
                        <div className="space-y-6 mb-8">
                          <div className="flex items-start">
                            <MapPin className="w-5 h-5 text-thinkminnt-blue mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-gray-900">Main Office</h3>
                              <p className="text-gray-700">123 Innovation Drive, Tech Valley, CA 94043</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Phone className="w-5 h-5 text-thinkminnt-blue mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-gray-900">Phone</h3>
                              <p className="text-gray-700">(123) 456-7890</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Mail className="w-5 h-5 text-thinkminnt-blue mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-gray-900">Email</h3>
                              <a 
                                href="mailto:info@thinkminnt.org" 
                                className="text-gray-700 hover:text-thinkminnt-blue transition-colors"
                              >
                                info@thinkminnt.org
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Clock className="w-5 h-5 text-thinkminnt-blue mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-medium text-gray-900">Hours</h3>
                              <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                              <p className="text-gray-700">Weekends: Closed</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="mt-auto">
                          <h3 className="font-medium text-gray-900 mb-3">Connect With Us</h3>
                          <div className="flex space-x-4">
                            {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                              <a 
                                key={platform}
                                href="#" 
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-thinkminnt-blue/10 flex items-center justify-center transition-colors"
                                aria-label={`Follow us on ${platform}`}
                              >
                                <img 
                                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform}.svg`} 
                                  alt={platform} 
                                  className="w-5 h-5 opacity-70"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="section-title mb-4 text-thinkminnt-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Locations
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Visit one of our offices or innovation hubs across the country
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">{office.name}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-thinkminnt-blue mr-3 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 text-thinkminnt-blue mr-3 flex-shrink-0" />
                          <p className="text-gray-700">{office.phone}</p>
                        </div>
                        
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 text-thinkminnt-blue mr-3 flex-shrink-0" />
                          <a 
                            href={`mailto:${office.email}`} 
                            className="text-gray-700 hover:text-thinkminnt-blue transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-thinkminnt-blue mr-3 flex-shrink-0" />
                          <p className="text-gray-700">{office.hours}</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white relative h-96">
          <div className="absolute inset-0 bg-gray-200">
            {/* Placeholder for map - would be replaced with actual map implementation */}
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-lg text-gray-600">Interactive Map Would Display Here</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="section-title mb-4 text-thinkminnt-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find quick answers to common questions
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How can I volunteer with ThinkMinnt Foundation?",
                    answer: "You can volunteer by filling out the application form on our Get Involved page. We have opportunities for teaching, mentoring, event support, and more."
                  },
                  {
                    question: "Do I need technical skills to volunteer?",
                    answer: "No, we welcome volunteers with all types of skills. While technical expertise is valuable for certain roles, we also need help with event planning, administration, marketing, and many other areas."
                  },
                  {
                    question: "How can my company partner with ThinkMinnt?",
                    answer: "We offer various partnership opportunities including employee volunteer programs, sponsorships, donation matching, and collaborative initiatives. Please contact our partnerships team at partnerships@thinkminnt.org."
                  },
                  {
                    question: "Are donations to ThinkMinnt tax-deductible?",
                    answer: "Yes, ThinkMinnt Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law."
                  },
                  {
                    question: "How can I attend one of your programs or workshops?",
                    answer: "Information about upcoming programs can be found on our Programs page. Many events require registration, which can be completed online through the individual event listings."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-700 mb-4">
                  Don't see your question here? Feel free to reach out directly.
                </p>
                <Button asLink to="#" variant="outline">
                  View All FAQs
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-thinkminnt-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Connect With Us?
              </motion.h2>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Whether you have questions, want to volunteer, or are interested in supporting our mission, 
                we'd love to hear from you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asLink to="#" variant="secondary" size="lg">
                  Get In Touch Today
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
