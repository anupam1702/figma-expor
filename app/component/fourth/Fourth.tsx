import React from 'react';
import { GiCheckedShield } from "react-icons/gi";

const Fourth = () => {
    const services = [
        { name: 'Security Testing', description: 'Determining if an information...' },
        { name: 'Data Forensics', description: 'Focused on data investigations...' },
        { name: 'Penetration Testing', description: 'Simulating security threats...' },
        { name: 'Red Team', description: 'Collaborative testing efforts...' },
        { name: 'Digital Hardening', description: 'Strengthening digital security...' },
        { name: 'Source Code Audit', description: 'Reviewing source code security...' },
        { name: 'Software Development', description: 'Building software solutions...' },
        { name: 'Cloud Security', description: 'Ensuring cloud infrastructure safety...' },
    ];

    return (
        <div>
            <section className="bg-gray-50 p-8">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Explore Our Data <span className="text-blue-500">Services</span>
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Data analysis software as a type of software tool used for data analysis and <br /> reporting. It is designed to help businesses and organizations.
                </p>
                <div className="flex flex-wrap justify-between gap-y-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/4 px-4"
                        >
                            <div className="border border-gray-300 bg-white p-6 rounded-lg hover:shadow-lg transition">
                                <GiCheckedShield className="text-blue-500 text-2xl mb-4" />
                                <h3 className="text-lg font-semibold mb-2 text-gray-700">
                                    {service.name}
                                </h3>
                                <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Fourth;
