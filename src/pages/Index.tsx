
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookUser, Lightbulb, Globe, Award } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';
import { Card, CardContent, CardImage, CardTitle, CardDescription } from '@/components/shared/Card';

const Index = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-thinkminnt-blue-light/20 to-thinkminnt-green-light/10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="hero-title mb-6 text-balance">
                  <span className="text-thinkminnt-blue">Empowering Lives</span> Through Technology
                </h1>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
                  We're building a future where technology education, mentorship, and innovation 
                  are accessible to everyone, fostering a more inclusive and skilled society.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button asLink to="/get-involved" size="lg">
                    Join Us
                  </Button>
                  <Button variant="secondary" asLink to="/get-involved" size="lg">
                    Donate Now
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full h-[500px]">
                  <motion.div 
                    className="absolute top-0 right-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                      alt="Students learning technology" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-2xl"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      delay: 0.5 
                    }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998" 
                      alt="Technology innovation" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <motion.div 
              initial={{ y: -10, opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              <a 
                href="#mission" 
                aria-label="Scroll down" 
                className="text-thinkminnt-blue"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section id="mission" className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-6 text-thinkminnt-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 mb-8 text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                At ThinkMinnt Foundation, we believe in the power of technology to transform lives. 
                Our mission is to provide accessible technology education, mentorship, and 
                innovation resources to underserved communities, fostering inclusion, 
                skill development, and a brighter future for all.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asLink to="/about" variant="outline" className="flex items-center mx-auto">
                  Learn More About Us
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
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
                What We Offer
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover our comprehensive suite of programs designed to empower individuals through technology
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookUser,
                  title: "Tech Education",
                  description: "Interactive workshops and courses on coding, digital skills, and tech literacy"
                },
                {
                  icon: Lightbulb,
                  title: "Mentorship",
                  description: "One-on-one guidance from industry professionals to support career development"
                },
                {
                  icon: Globe,
                  title: "Innovation Hubs",
                  description: "Community spaces with resources for collaborative learning and innovation"
                },
                {
                  icon: Award,
                  title: "Scholarships",
                  description: "Financial support for motivated learners pursuing technology education"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-thinkminnt-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-7 h-7 text-thinkminnt-blue" />
                      </div>
                      <CardTitle className="mb-3">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asLink to="/programs" variant="primary">
                Explore Our Programs
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="section-padding bg-thinkminnt-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 
                className="section-title mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Impact
              </motion.h2>
              <motion.p 
                className="text-lg text-blue-100 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Since our founding, we've been making a real difference in communities
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Students Taught" },
                { number: "500+", label: "Mentorship Matches" },
                { number: "25", label: "Innovation Hubs" },
                { number: "85%", label: "Program Success Rate" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="glass-dark p-6 rounded-xl">
                    <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                    <p className="text-blue-100">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Success Stories
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hear from individuals whose lives have been transformed through our programs
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Tech Education Graduate",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  testimonial: "The coding workshops completely changed my career path. I went from knowing nothing about programming to landing a job as a junior developer within a year."
                },
                {
                  name: "David Chen",
                  role: "Mentorship Program Participant",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  testimonial: "Having a mentor who was already established in the tech industry gave me insights and guidance I couldn't have found anywhere else. It made all the difference."
                },
                {
                  name: "Maria Rodriguez",
                  role: "Innovation Hub Member",
                  image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
                  testimonial: "The Innovation Hub provided the resources, community, and support I needed to turn my idea into a viable startup. I'm forever grateful for this opportunity."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Join Our Mission Today
              </motion.h2>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Whether you're looking to learn, mentor, volunteer, or donate, there's a place for you at ThinkMinnt Foundation.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asLink to="/get-involved" variant="secondary" size="lg">
                  Get Involved
                </Button>
                <Button asLink to="/contact" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Blog Section */}
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
                Latest Articles
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover insights, success stories, and updates from our community
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Future of Digital Literacy",
                  excerpt: "Exploring how essential digital skills are evolving and why they matter more than ever.",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
                  date: "June 15, 2023"
                },
                {
                  title: "Building Inclusive Tech Communities",
                  excerpt: "How we're working to ensure technology education is accessible to everyone, regardless of background.",
                  image: "https://images.unsplash.com/photo-1573497019236-61f323342eb9",
                  date: "May 28, 2023"
                },
                {
                  title: "From Student to Mentor: A Journey",
                  excerpt: "The inspiring story of how one of our program graduates became a mentor to the next generation.",
                  image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
                  date: "April 10, 2023"
                }
              ].map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card hover>
                    <CardImage src={article.image} alt={article.title} className="h-48" />
                    <CardContent className="p-6">
                      <div className="text-sm text-thinkminnt-blue mb-2">{article.date}</div>
                      <CardTitle className="mb-3">{article.title}</CardTitle>
                      <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                      <Button asLink to="/blog" variant="ghost" className="p-0">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asLink to="/blog" variant="outline">
                View All Articles
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
