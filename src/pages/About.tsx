
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Shield } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';

const About = () => {
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
                About ThinkMinnt Foundation
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Empowering communities through technology education, 
                mentorship, and innovation since 2015.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-2 lg:order-1"
              >
                <h2 className="section-title mb-6 text-thinkminnt-blue">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  ThinkMinnt Foundation was born from a simple observation: 
                  despite the rapid advancement of technology, many communities 
                  lack access to quality tech education and resources.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded in 2015 by a group of tech professionals passionate about 
                  giving back, we started with a single coding workshop in an 
                  underserved community center. The response was overwhelming, 
                  revealing a tremendous hunger for technology education.
                </p>
                <p className="text-gray-700 mb-6">
                  Since then, we've grown to serve thousands of individuals across 
                  multiple locations, expanding our programs to include mentorship, 
                  innovation hubs, and digital literacy training. Through it all, 
                  our mission remains the same: to empower lives through technology.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                      alt="ThinkMinnt foundation team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-thinkminnt-green rounded-xl p-4 shadow-lg">
                    <p className="text-white font-bold text-xl">est. 2015</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass p-8 rounded-xl"
              >
                <div className="w-14 h-14 bg-thinkminnt-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-thinkminnt-blue" />
                </div>
                <h3 className="subsection-title mb-4 text-thinkminnt-blue">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accessible technology education, mentorship, and innovation 
                  resources to underserved communities, fostering inclusion, skill 
                  development, and a brighter future for all.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <div className="w-14 h-14 bg-thinkminnt-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-thinkminnt-blue" />
                </div>
                <h3 className="subsection-title mb-4 text-thinkminnt-blue">Our Vision</h3>
                <p className="text-gray-700">
                  A world where everyone, regardless of background or circumstances, 
                  has the opportunity to harness the power of technology to improve 
                  their lives and communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
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
                Our Core Values
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                The principles that guide everything we do
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Empathy",
                  description: "We listen deeply to understand the unique needs of each community we serve."
                },
                {
                  icon: Users,
                  title: "Inclusivity",
                  description: "We are committed to making technology accessible to everyone, regardless of background."
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "We strive for the highest quality in our programs, resources, and community impact."
                },
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We operate with transparency, honesty, and ethical responsibility in all we do."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="w-14 h-14 bg-thinkminnt-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-thinkminnt-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Passionate professionals dedicated to our mission
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer Chen",
                  role: "Executive Director",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                  bio: "Former tech executive with 15+ years of experience, Jennifer leads our strategic initiatives with passion and vision."
                },
                {
                  name: "Michael Rodriguez",
                  role: "Director of Education",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                  bio: "With a PhD in Computer Science and years of teaching experience, Michael develops our educational programs."
                },
                {
                  name: "Sarah Johnson",
                  role: "Community Outreach Manager",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                  bio: "Sarah bridges the gap between our foundation and the communities we serve, ensuring our programs meet real needs."
                },
                {
                  name: "David Park",
                  role: "Mentorship Program Lead",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  bio: "David brings a decade of experience in professional development to our mentorship initiatives."
                },
                {
                  name: "Aisha Williams",
                  role: "Innovation Hub Director",
                  image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
                  bio: "A serial entrepreneur and tech innovator, Aisha manages our innovation spaces and entrepreneurship programs."
                },
                {
                  name: "Carlos Mendez",
                  role: "Development Director",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                  bio: "Carlos leads our fundraising and partnership efforts, helping us grow our impact year after year."
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                  className="relative group"
                >
                  <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-sm text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-thinkminnt-blue/90 rounded-xl p-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                      <p className="text-sm text-white/80 mb-4">{member.role}</p>
                      <p className="text-white">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
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
                Our Partners
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Organizations that help us make a difference
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="flex items-center justify-center p-4"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Partner {index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-thinkminnt-green text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Join Our Community
              </motion.h2>
              <motion.p 
                className="text-xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Be part of our mission to transform lives through technology education and innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asLink to="/get-involved" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Get Involved Today
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
