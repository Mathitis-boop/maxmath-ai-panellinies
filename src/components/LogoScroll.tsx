import React from 'react';

const LogoShowcase = () => {
  const logos = [
    {
      src: '/ntua.svg',
      alt: 'Εθνικό Μετσόβιο Πολυτεχνείο',
      width: 200,
      height: 90,
    },
    {
      src: '/nkua.png',
      alt: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών',
      width: 200,
      height: 90,
    },
    {
      src: '/AUEBEMBLEM.png',
      alt: 'Οικονομικό Πανεπιστήμιο Αθηνών',
      width: 180,
      height: 90,
    },
    {
      src: '/banner-horizontal-300ppi-1-768x253.png',
      alt: 'Banner Horizontal',
      width: 180,
      height: 90,
    },
    {
      src: '/logo4.png',
      alt: 'Λογότυπο 4',
      width: 180,
      height: 90,
    },
    {
      src: '/University_of_Patras_(seal).png',
      alt: 'Πανεπιστήμιο Πατρών',
      width: 180,
      height: 90,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Οι μαθητές μας πέρασαν...
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-gray-100 px-8 py-4 transition-transform duration-300 hover:scale-105 group"
              style={{ minWidth: 140, minHeight: 90 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain transition-all duration-300"
                style={{ maxHeight: 70, maxWidth: 160 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase; 