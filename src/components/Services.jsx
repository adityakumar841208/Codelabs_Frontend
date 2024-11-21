import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        title: 'Web Development',
        description: 'Build high-quality, responsive websites and applications tailored to your needs.',
        link: '/services/web-development'
    },
    {
        title: 'Mobile App Development',
        description: 'Create intuitive and powerful mobile applications for iOS and Android.',
        link: '/services/mobile-app-development'
    },
    {
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility and search rankings with our SEO services.',
        link: '/services/seo-optimization'
    },
    {
        title: 'Digital Marketing',
        description: 'Reach your target audience with effective digital marketing strategies.',
        link: '/services/digital-marketing'
    }
];

const ServicesPage = () => {
    return (
        <>
            <div>
                <div className="flex items-center justify-center min-h-screen text-white">
                    <div className="w-full max-w-2xl p-8">
                        <h2 className="text-2xl font-bold text-center text-primary mb-6">Our Services</h2>

                        <div className="space-y-6">
                            {servicesData.map((service, index) => (
                                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                                    <p className="text-gray-300 mb-4">{service.description}</p>
                                    <Link to={service.link}>
                                        <button className="bg-primary text-gray-900 py-2 px-4 rounded hover:bg-primaryHover transition">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
