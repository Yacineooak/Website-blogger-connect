import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Heart, Users, Lightbulb } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';
import { Card, CardContent, CardTitle } from '@/components/shared/Card';
import { useToast } from '@/hooks/use-toast';

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interests: '',
    message: ''
  });
  
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'volunteer' | 'donate'>('volunteer');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDonationAmountClick = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setCustomAmount(value);
      setDonationAmount('custom');
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      interests: '',
      message: ''
    });
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    console.log('Donation form submitted:', { amount });
    toast({
      title: "Thank You for Your Donation!",
      description: `Your $${amount} donation will make a real difference in our programs.`,
    });
    // Reset form
    setDonationAmount('');
    setCustomAmount('');
  };

  return (
    <PageTransition>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-thinkminnt-green text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-thinkminnt-green-dark to-transparent" />
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
                Get Involved
              </motion.h1>
              <motion.p 
                className="text-xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our mission to empower lives through technology. 
                Whether you volunteer, donate, or spread the word, your support makes a difference.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Ways to Help Section */}
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
                Ways You Can Help
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                There are many ways to support our mission and make an impact
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Volunteer",
                  description: "Share your time and skills as a teacher, mentor, or event helper."
                },
                {
                  icon: Heart,
                  title: "Donate",
                  description: "Support our programs financially. Every dollar makes a difference."
                },
                {
                  icon: Lightbulb,
                  title: "Become a Mentor",
                  description: "Guide aspiring technologists on their career journey."
                },
                {
                  icon: Award,
                  title: "Corporate Partnership",
                  description: "Engage your business in meaningful community impact."
                }
              ].map((way, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card variant="glass">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-thinkminnt-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <way.icon className="w-7 h-7 text-thinkminnt-blue" />
                      </div>
                      <CardTitle className="mb-3">{way.title}</CardTitle>
                      <p className="text-gray-700">{way.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer & Donate Forms Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex justify-center flex-wrap gap-2">
                  <Button 
                    variant={activeTab === 'volunteer' ? 'primary' : 'outline'} 
                    className="min-w-[150px]"
                    onClick={() => setActiveTab('volunteer')}
                  >
                    Volunteer
                  </Button>
                  <Button 
                    variant={activeTab === 'donate' ? 'primary' : 'outline'} 
                    className="min-w-[150px]"
                    onClick={() => setActiveTab('donate')}
                  >
                    Donate
                  </Button>
                </div>
              </div>

              {/* Volunteer Form */}
              {activeTab === 'volunteer' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="subsection-title mb-6 text-thinkminnt-blue">Volunteer Application</h3>
                    <form onSubmit={handleVolunteerSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="skills" className="block text-gray-700 font-medium mb-2">Skills & Expertise*</label>
                          <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            placeholder="e.g., teaching, coding, event planning"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Availability*</label>
                          <select
                            id="availability"
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                            required
                          >
                            <option value="">Select availability</option>
                            <option value="weekday-mornings">Weekday Mornings</option>
                            <option value="weekday-afternoons">Weekday Afternoons</option>
                            <option value="weekday-evenings">Weekday Evenings</option>
                            <option value="weekends">Weekends</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="interests" className="block text-gray-700 font-medium mb-2">Program Interests*</label>
                          <select
                            id="interests"
                            name="interests"
                            value={formData.interests}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                            required
                          >
                            <option value="">Select program</option>
                            <option value="tech-education">Tech Education Workshops</option>
                            <option value="digital-literacy">Digital Literacy Training</option>
                            <option value="mentorship">Mentorship Program</option>
                            <option value="innovation-hub">Innovation Hub</option>
                            <option value="general">General Volunteering</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer?</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                        ></textarea>
                      </div>
                      
                      <div className="text-right">
                        <Button type="submit" variant="primary">
                          Submit Application
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

              {/* Donation Form */}
              {activeTab === 'donate' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="subsection-title mb-6 text-thinkminnt-blue">Make a Donation</h3>
                    <form onSubmit={handleDonationSubmit}>
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Select Donation Amount</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                          {['25', '50', '100', '250'].map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              className={`py-3 px-4 border ${donationAmount === amount ? 'border-thinkminnt-blue bg-thinkminnt-blue/10 text-thinkminnt-blue' : 'border-gray-300 hover:border-thinkminnt-blue/50'} rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-thinkminnt-blue`}
                              onClick={() => handleDonationAmountClick(amount)}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="text"
                            className={`w-full pl-8 pr-4 py-3 border ${donationAmount === 'custom' ? 'border-thinkminnt-blue ring-2 ring-thinkminnt-blue/50' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent`}
                            placeholder="Custom Amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            onClick={() => setDonationAmount('custom')}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Donation Frequency</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            className="py-3 px-4 border border-thinkminnt-blue bg-thinkminnt-blue/10 text-thinkminnt-blue rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-thinkminnt-blue"
                          >
                            One-time Donation
                          </button>
                          <button
                            type="button"
                            className="py-3 px-4 border border-gray-300 hover:border-thinkminnt-blue/50 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-thinkminnt-blue"
                          >
                            Monthly Donation
                          </button>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-4">Your Impact</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-1 gap-3">
                            {[
                              { amount: '$25', impact: 'provides digital literacy training for one person' },
                              { amount: '$50', impact: 'supplies teaching materials for a workshop' },
                              { amount: '$100', impact: 'sponsors a student for a full coding course' },
                              { amount: '$250', impact: 'helps equip our innovation hubs with new technology' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-thinkminnt-green mr-2 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-700">
                                  <span className="font-medium">{item.amount}</span> {item.impact}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Button 
                          type="submit" 
                          variant="secondary"
                          disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
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
                Other Ways to Support
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Beyond volunteering and donating, there are many ways to help our cause
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Partnerships",
                  description: "Engage your company in meaningful social impact through sponsorships, employee volunteering, or skill-sharing programs.",
                  button: "Become a Partner"
                },
                {
                  title: "Equipment Donations",
                  description: "Donate computers, tablets, or other technology that can be refurbished and used in our programs or by program participants.",
                  button: "Donate Equipment"
                },
                {
                  title: "Spread the Word",
                  description: "Follow us on social media, share our content, and help us reach more people who can benefit from our programs.",
                  button: "Connect With Us"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <CardTitle className="mb-3">{item.title}</CardTitle>
                      <p className="text-gray-700 mb-6 flex-grow">{item.description}</p>
                      <Button variant="outline" className="mt-auto w-full">
                        {item.button}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
                Volunteer Experiences
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hear from those who have dedicated their time and talents to our mission
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Volunteering as a coding instructor has been incredibly rewarding. Seeing students' faces light up when they create their first program is priceless.",
                  name: "Michael Chen",
                  role: "Tech Education Volunteer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
                },
                {
                  quote: "I've gained as much as I've given through mentoring. Helping young professionals navigate the tech industry has been a highlight of my career.",
                  name: "Sarah Williams",
                  role: "Mentorship Program Volunteer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card variant="glass">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-r from-thinkminnt-blue to-thinkminnt-blue-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Join Us in Making a Difference
              </motion.h2>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Every contribution, big or small, helps us create a more inclusive and 
                technologically empowered future.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button onClick={() => setActiveTab('volunteer')} variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Volunteer Today
                </Button>
                <Button onClick={() => setActiveTab('donate')} variant="secondary" size="lg">
                  Make a Donation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default GetInvolved;
