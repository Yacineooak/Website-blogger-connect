
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookUser, Lightbulb, Globe, Award, CheckCircle } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';
import { Card, CardContent, CardImage, CardTitle, CardDescription } from '@/components/shared/Card';

const Programs = () => {
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
                Our Programs & Initiatives
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive solutions designed to empower communities through technology.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-6 text-thinkminnt-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Program Overview
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                At ThinkMinnt Foundation, we offer a range of programs to address the technology education 
                and innovation needs of diverse communities. Each initiative is carefully designed to 
                maximize impact and create lasting change.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Main Programs Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
              {/* Tech Education Workshops */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 inline-block">
                    <span className="bg-thinkminnt-blue/10 text-thinkminnt-blue text-sm font-medium px-3 py-1 rounded-full">
                      Flagship Program
                    </span>
                  </div>
                  <h2 className="section-title mb-4 text-thinkminnt-blue">Tech Education Workshops</h2>
                  <p className="text-gray-700 mb-4">
                    Our hands-on workshops provide accessible entry points into technology 
                    for learners of all ages and skill levels. From coding fundamentals to 
                    advanced web development, our curriculum is designed to build practical skills.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Interactive, project-based learning approach",
                      "Small class sizes with personalized attention",
                      "Industry-relevant curriculum updated regularly",
                      "Flexible scheduling with evening and weekend options",
                      "Available both in-person and online"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-thinkminnt-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asLink to="/get-involved" variant="primary">
                    Join a Workshop
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1516321497487-e288fb19713f" 
                      alt="Tech Education Workshop" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Digital Literacy Training */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-2 lg:order-1"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1484807352052-23338990c6c6" 
                      alt="Digital Literacy Training" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-1 lg:order-2"
                >
                  <div className="mb-4 inline-block">
                    <span className="bg-thinkminnt-blue/10 text-thinkminnt-blue text-sm font-medium px-3 py-1 rounded-full">
                      Core Program
                    </span>
                  </div>
                  <h2 className="section-title mb-4 text-thinkminnt-blue">Digital Literacy Training</h2>
                  <p className="text-gray-700 mb-4">
                    Our digital literacy program focuses on essential skills needed to navigate 
                    today's digital world. We cover everything from basic computer operations to 
                    online safety, helping bridge the digital divide.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Beginner-friendly curriculum with no prerequisites",
                      "Practical skills for everyday technology use",
                      "Focus on online security and privacy protection",
                      "Access to computers and internet during sessions",
                      "Available in multiple languages"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-thinkminnt-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asLink to="/get-involved" variant="primary">
                    Enroll in Training
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </div>

              {/* Mentorship Programs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4 inline-block">
                    <span className="bg-thinkminnt-blue/10 text-thinkminnt-blue text-sm font-medium px-3 py-1 rounded-full">
                      High Impact Program
                    </span>
                  </div>
                  <h2 className="section-title mb-4 text-thinkminnt-blue">Mentorship Programs</h2>
                  <p className="text-gray-700 mb-4">
                    Our mentorship initiative connects aspiring technologists with experienced 
                    professionals for personalized guidance, career advice, and support. This 
                    one-on-one relationship can be transformative for career development.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Program Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Carefully matched mentor-mentee pairings",
                      "Structured program with regular check-ins",
                      "Goal-setting and progress tracking",
                      "Access to industry events and networking",
                      "Both short-term and long-term options available"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-thinkminnt-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-4">
                    <Button asLink to="/get-involved" variant="primary">
                      Find a Mentor
                    </Button>
                    <Button asLink to="/get-involved" variant="outline">
                      Become a Mentor
                    </Button>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad" 
                      alt="Mentorship Program" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Innovation Hubs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-2 lg:order-1"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" 
                      alt="Innovation Hub" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="order-1 lg:order-2"
                >
                  <div className="mb-4 inline-block">
                    <span className="bg-thinkminnt-blue/10 text-thinkminnt-blue text-sm font-medium px-3 py-1 rounded-full">
                      Community Initiative
                    </span>
                  </div>
                  <h2 className="section-title mb-4 text-thinkminnt-blue">Innovation Hubs</h2>
                  <p className="text-gray-700 mb-4">
                    Our Innovation Hubs are physical spaces equipped with technology, resources, 
                    and support staff where community members can learn, create, and collaborate. 
                    These spaces foster creativity and entrepreneurship.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Hub Resources:</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "High-speed internet access and computer workstations",
                      "3D printers, electronics, and maker equipment",
                      "Collaborative workspaces and meeting rooms",
                      "Regular workshops, hackathons, and events",
                      "Expert staff available for technical assistance"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-thinkminnt-green mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asLink to="/get-involved" variant="primary">
                    Visit a Hub
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Calendar */}
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
                Upcoming Program Events
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Check out these opportunities to get involved
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Intro to Web Development",
                  type: "Workshop",
                  date: "June 15, 2023",
                  time: "6:00 PM - 8:00 PM",
                  location: "Tech Hub Downtown",
                  description: "Learn the basics of HTML, CSS, and JavaScript in this hands-on workshop for beginners."
                },
                {
                  title: "Digital Security for Seniors",
                  type: "Training",
                  date: "June 18, 2023",
                  time: "10:00 AM - 12:00 PM",
                  location: "Community Center",
                  description: "Special digital literacy session focused on online safety for senior citizens."
                },
                {
                  title: "Tech Career Fair",
                  type: "Networking",
                  date: "June 25, 2023",
                  time: "1:00 PM - 5:00 PM",
                  location: "Innovation Hub West",
                  description: "Connect with mentors and employers in the technology sector. Bring your resume!"
                },
                {
                  title: "Mobile App Development",
                  type: "Workshop Series",
                  date: "July 1-22, 2023",
                  time: "Saturdays, 2:00 PM - 4:00 PM",
                  location: "Tech Hub East",
                  description: "Four-week series covering the fundamentals of building mobile applications."
                },
                {
                  title: "Women in Tech Mixer",
                  type: "Networking",
                  date: "July 12, 2023",
                  time: "6:30 PM - 8:30 PM",
                  location: "Downtown Office",
                  description: "Networking event specifically for women and non-binary individuals in technology."
                },
                {
                  title: "Youth Hackathon",
                  type: "Competition",
                  date: "July 15-16, 2023",
                  time: "9:00 AM - 5:00 PM",
                  location: "Innovation Hub Central",
                  description: "Two-day coding competition for students ages 13-18. No experience necessary!"
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                >
                  <Card hover>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block bg-thinkminnt-blue/10 text-thinkminnt-blue text-xs font-medium px-2 py-1 rounded-full mb-2">
                            {event.type}
                          </span>
                          <CardTitle className="mb-1">{event.title}</CardTitle>
                        </div>
                      </div>
                      <div className="mb-4">
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                      <div className="border-t border-gray-100 pt-4 text-sm">
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{event.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{event.location}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="mt-4 w-full justify-center">
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asLink to="/get-involved" variant="outline">
                View Full Calendar
              </Button>
            </div>
          </div>
        </section>

        {/* Success Stories */}
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
                Program Success Stories
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Real examples of how our programs have transformed lives
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-eab10e6a4eea" 
                      alt="Success story - Maria" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block bg-thinkminnt-blue/10 text-thinkminnt-blue text-xs font-medium px-2 py-1 rounded-full mb-2">
                      Tech Education Program
                    </span>
                    <h3 className="text-xl font-semibold mb-3">Maria's Journey</h3>
                    <p className="text-gray-700 mb-4">
                      "After losing my job during the pandemic, I joined ThinkMinnt's coding bootcamp. 
                      Six months later, I landed a position as a junior developer, earning twice my previous salary."
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      Maria now mentors new students in our program, giving back to the community.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                      alt="Success story - James" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block bg-thinkminnt-blue/10 text-thinkminnt-blue text-xs font-medium px-2 py-1 rounded-full mb-2">
                      Innovation Hub
                    </span>
                    <h3 className="text-xl font-semibold mb-3">James' Startup</h3>
                    <p className="text-gray-700 mb-4">
                      "The Innovation Hub provided me with all the resources I needed to develop my 
                      app idea. The mentorship and equipment access were invaluable. My startup 
                      just secured its first round of funding!"
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      James' app now helps hundreds of local businesses with scheduling.
                    </p>
                  </div>
                </div>
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
                Ready to Transform Your Future?
              </motion.h2>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Enroll in a program, volunteer as a mentor, or support our initiatives through a donation.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asLink to="/get-involved" variant="secondary" size="lg">
                  Join a Program
                </Button>
                <Button asLink to="/get-involved" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Support Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Programs;
