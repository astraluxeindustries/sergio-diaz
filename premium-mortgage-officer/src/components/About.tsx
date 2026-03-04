import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Sergio Diaz" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Sergio Diaz
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Sergio has proudly called Southern Utah home for more than 15 years and brings a strong understanding of the local housing market to every client he serves. Whether working with first time homebuyers, investors, or homeowners looking to refinance, Sergio is committed to guiding clients through the mortgage process with clarity, professionalism, and care. His goal is to make each transaction smooth, informed, and tailored to the unique needs of the people he works with.
              </p>
              <p>
                Sergio believes that education is one of the most important parts of the home financing process. He takes the time to walk clients through each step so they understand their loan options and feel confident in the decisions they are making. Buying or refinancing a home can feel overwhelming, but Sergio works to simplify the process and ensure his clients feel supported from the initial conversation all the way through closing.
              </p>
              <p>
                Fluent in both English and Spanish, Sergio is able to assist a wide range of clients within the community. He understands how important it is for people to discuss major financial decisions in the language they are most comfortable with, and he takes pride in making the mortgage process accessible and easy to understand for every family he serves.
              </p>
              <p>
                Above all, Sergio focuses on building trust and long term relationships with his clients. By combining strong local knowledge, responsive communication, and a commitment to exceptional service, he works hard to help each client achieve their homeownership goals while feeling confident and well informed throughout the entire process.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
