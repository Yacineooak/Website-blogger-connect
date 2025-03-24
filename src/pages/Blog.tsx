
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Tag, Calendar, User } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import Button from '@/components/shared/Button';
import { Card, CardContent, CardImage, CardTitle, CardDescription } from '@/components/shared/Card';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Literacy",
    excerpt: "Exploring how essential digital skills are evolving and why they matter more than ever in today's technology-driven world.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    date: "June 15, 2023",
    author: "Maria Rodriguez",
    category: "Digital Literacy",
    tags: ["education", "technology", "digital skills"]
  },
  {
    id: 2,
    title: "Building Inclusive Tech Communities",
    excerpt: "How we're working to ensure technology education is accessible to everyone, regardless of background or geographic location.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1573497019236-61f323342eb9",
    date: "May 28, 2023",
    author: "James Chen",
    category: "Inclusion",
    tags: ["diversity", "equity", "community"]
  },
  {
    id: 3,
    title: "From Student to Mentor: A Journey",
    excerpt: "The inspiring story of how one of our program graduates became a mentor to the next generation of technologists.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    date: "April 10, 2023",
    author: "Sarah Johnson",
    category: "Success Stories",
    tags: ["mentorship", "career growth", "inspiration"]
  },
  {
    id: 4,
    title: "Tech Skills for Non-Technical Careers",
    excerpt: "Why basic technology skills are becoming essential across all industries and how to develop them.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    date: "March 22, 2023",
    author: "David Park",
    category: "Career Development",
    tags: ["skills", "career", "professional development"]
  },
  {
    id: 5,
    title: "Launching our New Innovation Hub",
    excerpt: "Announcing the opening of our newest community innovation center in East Valley, providing resources and support for local innovators.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4",
    date: "March 5, 2023",
    author: "Jessica Williams",
    category: "News",
    tags: ["innovation", "community", "resources"]
  },
  {
    id: 6,
    title: "Teaching Coding to Kids: Best Practices",
    excerpt: "Insights and strategies for introducing children to programming in engaging and age-appropriate ways.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec ultricies nisl nisl nec nisl.",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    date: "February 18, 2023",
    author: "Michael Rodriguez",
    category: "Education",
    tags: ["kids", "coding", "education"]
  }
];

// Extract unique categories and tags
const categories = [...new Set(blogPosts.map(post => post.category))];
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter posts based on search term, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? '' : tag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
  };

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
                Our Blog
              </motion.h1>
              <motion.p 
                className="text-xl text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Insights, stories, and updates from the ThinkMinnt community
              </motion.p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  {/* Search Box */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Search</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => handleCategoryClick(category)}
                            className={`flex items-center w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              selectedCategory === category 
                                ? 'bg-thinkminnt-blue/10 text-thinkminnt-blue font-medium' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tags */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => handleTagClick(tag)}
                          className={`flex items-center px-3 py-1 rounded-full text-sm transition-colors ${
                            selectedTag === tag 
                              ? 'bg-thinkminnt-blue text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Reset Filters */}
                  {(searchTerm || selectedCategory || selectedTag) && (
                    <button
                      onClick={clearFilters}
                      className="text-thinkminnt-blue hover:text-thinkminnt-blue-dark font-medium text-sm"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-9">
                {/* Featured Post */}
                {filteredPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                  >
                    <Card hover className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-full min-h-[300px]">
                          <CardImage 
                            src={filteredPosts[0].image} 
                            alt={filteredPosts[0].title} 
                            className="h-full"
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <span className="inline-block bg-thinkminnt-blue/10 text-thinkminnt-blue text-xs font-medium px-2 py-1 rounded-full mb-4">
                            {filteredPosts[0].category}
                          </span>
                          <CardTitle className="text-2xl mb-4">{filteredPosts[0].title}</CardTitle>
                          <CardDescription className="mb-6">{filteredPosts[0].excerpt}</CardDescription>
                          <div className="flex items-center text-sm text-gray-600 mb-6">
                            <div className="flex items-center mr-4">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{filteredPosts[0].date}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{filteredPosts[0].author}</span>
                            </div>
                          </div>
                          <Button variant="ghost" className="self-start px-0 py-0">
                            Read More <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                )}
                
                {/* All Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                      >
                        <Card hover>
                          <CardImage src={post.image} alt={post.title} className="h-48" />
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block bg-thinkminnt-blue/10 text-thinkminnt-blue text-xs font-medium px-2 py-1 rounded-full">
                                {post.category}
                              </span>
                              <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                            <CardTitle className="mb-3">{post.title}</CardTitle>
                            <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">By {post.author}</span>
                              <Button variant="ghost" className="p-0">
                                Read More <ArrowRight size={16} className="ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                    <Button onClick={clearFilters} variant="outline">
                      Clear Filters
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        <span className="sr-only">Previous</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </Button>
                      <Button variant="primary" size="sm" className="w-9 p-0">1</Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">2</Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">3</Button>
                      <span className="px-2 text-gray-400">...</span>
                      <Button variant="outline" size="sm" className="w-9 p-0">8</Button>
                      <Button variant="outline" size="sm" className="w-9 p-0">
                        <span className="sr-only">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Button>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="section-title mb-4 text-thinkminnt-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Subscribe to Our Newsletter
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Stay updated with our latest articles, events, and opportunities
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-thinkminnt-blue focus:border-transparent"
                />
                <Button variant="primary">
                  Subscribe
                </Button>
              </motion.div>
              
              <motion.p 
                className="text-sm text-gray-500 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Blog;
