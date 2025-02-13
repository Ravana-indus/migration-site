import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Reusable Card Component
const FeatureCard = ({ image, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2">
    <img src={image} alt={title} className="w-20 h-20 mx-auto mb-4 object-contain" />
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ quote, initials, name }) => (
  <div className="bg-white p-6 rounded-xl">
    <p className="text-gray-600 mb-4">{quote}</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-medium text-gray-600 mr-3">
        {initials}
      </div>
      <span className="font-medium text-gray-700">{name}</span>
    </div>
  </div>
);

const Home = () => {
  const features = [
    {
      image: "./img/paper.png",
      title: "Agreement is everything!",
      description: "You won't pay a penny without signing the service agreement! You are SAFE - we are SAFE!"
    },
    {
      image: "./img/money-back.png",
      title: "No Visa? Get your money back!*",
      description: "Our uncompromising refund policy allows you to get 100% of your professional fees within 14 working days!*"
    },
    {
      image: "./img/museum.png",
      title: "Bank Transfer Only!",
      description: "We don't accept cash payment and you will receive invoice for all your payments!"
    },
    {
      image: "./img/achievement-award.png",
      title: "99% Success rate!*",
      description: "If you are qualified we are 100% sure we can get you there! - Proven with our 99% success rate!"
    }
  ];

  const moreReasons = [
    {
      image: "./img/lawyer.png",
      title: "Handled by Immigration Lawyers",
      description: "All your applications are handled by seasoned immigration lawyers who reside in the destination countries."
    },
    {
      image: "./img/reduce-cost.png",
      title: "Less than 1.5 Million in cost(LKR)*",
      description: "Yes not 15 Million, You will not spend more than 1.5 million in professional fees! It's a promise!"
    },
    {
      image: "./img/agreement.png",
      title: "No hidden costs!",
      description: "Only pay what's on the agreement, nothing more, maybe less!"
    },
    {
      image: "./img/website.png",
      title: "Best In Class Portal",
      description: "No black box - You will be provided with a state of the art web and mobile portal to manage your application!"
    }
  ];

  const testimonials = [
    {
      quote: "Thank you very much Ravana industries for handling my student visa for a tuition free public university in Germany. I received my visa in a week. I highly recommend them.",
      initials: "JK",
      name: "Jey Kison"
    },
    {
      quote: "I got the assistance of Ravana Industries in obtaining my student visa for Germany. I appreciate their commitment and quick responses. They were always reachable and responded to us very calmly.",
      initials: "TP",
      name: "Tharani Paramasivam"
    },
    {
      quote: "Ravana industry suggested by my brother for my future plan. At the start I'd a little bit fear but as I travelled with them through the process it's all disappeared.",
      initials: "ST",
      name: "Sanjeevan Thavachelvam"
    },
    {
      quote: "Its good place for germany student visa service. I got the visa within 3 days. Honest talk and fast reply for your messages.",
      initials: "SV",
      name: "Sivakiri Varunikan"
    }
  ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ravana Migration Pvt Ltd',
    description: 'The Premiere Germany Visa Consultant in Sri Lanka',
    url: 'https://ravanamigration.com',
    logo: 'https://ravanamigration.com/img/logo.png',
    sameAs: [
      'https://www.facebook.com/ravanamigration',
      'https://www.linkedin.com/company/ravana-migration'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Sri Lanka'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ravana Migration',
    url: 'https://ravanamigration.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ravanamigration.com/blog/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to study in Germany?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Studying in Germany is more affordable than at a private university in Sri Lanka. Public universities in Germany are tuition-free, with students only paying semester fees ranging from €150-€350.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is your success rate for German student visas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We maintain a 99% success rate for qualified applicants applying for German student visas through our service.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer a money-back guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a 100% refund of professional fees within 14 working days if the visa application is unsuccessful.'
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ravana Migration - Sri Lanka's No 1 German Visa Consultant by Ravana Industries Pvt Ltd</title>
        <meta name="description" content="Expert German student visa consultancy in Sri Lanka. Get free education in Germany with 99% visa success rate. Professional guidance for Sri Lankan students." />
        <meta name="keywords" content="German student visa Sri Lanka, study in Germany, Germany education consultant, free education Germany, visa consultancy Colombo" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravana Migration - Sri Lanka's No 1 German Visa Consultant by Ravana Industries Pvt Ltd" />
        <meta property="og:description" content="Expert German student visa consultancy in Sri Lanka. Get free education in Germany with 99% visa success rate. Professional guidance for Sri Lankan students." />
        <meta property="og:image" content="https://www.ravanamigration.com/img/meta-image.png" />
        <meta property="og:url" content="https://www.ravanamigration.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Study in Germany - Free Education & Expert Visa Consultancy" />
        <meta name="twitter:description" content="Expert German student visa consultancy in Sri Lanka. Get free education in Germany with 99% visa success rate." />
        <meta name="twitter:image" content="https://www.ravanamigration.com/img/meta-image.png" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://www.ravanamigration.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <img src="../img/logo.png" alt="Ravana Migration Logo" className="w-full max-w-4xl mx-auto h-64 object-contain mb-5" />
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Welcome to Ravana Migration 🛫</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">The Premiere Germany Visa Consultant in Sri Lanka!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/studentform" className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              Click Here To Apply Now!
            </Link>
          </div>
        </div>

        {/* Germany Section */}
        <div className="text-center mb-16">
          <img src="./img/germany.png" alt="Germany Flag" className="w-full max-w-5xl mx-auto h-48 object-contain" />
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">"Studying in Germany is more affordable than at a private university in Sri Lanka."*</h2>
          <p className="text-xl text-gray-600 mb-8">Affordable Study Abroad: Free or Low-Cost Bachelor's Degrees in Germany vs. Sri Lankan Private Universities (Avg. 4-Year Cost: 3-7 Million LKR)</p>
          <Link to="/whygermany" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all">
            Learn More!
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Why should you choose us?</h2>
          <p className="text-lg text-gray-600 mb-12">Let us give you the top 4 reasons!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* More Reasons Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Still not convinced?</h2>
          <p className="text-lg text-gray-600 mb-12">Here are 4 more reasons..</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreReasons.map((reason, index) => (
              <FeatureCard key={index} {...reason} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">We Have 99% Success Rate!</h2>
          <p className="text-lg text-gray-600 mb-12">What our clients say about us in Google Reviews! (There are more)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Let's Get Started ✈️</h2>
          <p className="text-xl text-gray-600 mb-8">Your future in your dream country starts here!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/studentform" className="inline-block px-6 py-3 bg-gray-800 text-white border-2 border-gray-800 rounded-lg hover:bg-gray-700 transition-all">
              Click Here To Apply Now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;