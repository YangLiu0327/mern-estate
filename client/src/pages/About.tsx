import React from "react";

export default function About() {
  const aboutPageData = [
    {
      id: 1,
      text: `🏠 YANG Estate is leading real estate agency
        that specializes in helping clients buy, sell, 
        and rent properties in the most desirable neighborhoods. 
        Our team of experienced agents is dedicated to providing
        exceptional service and making the buying and selling 
        process as smooth as possible.`,
      image: "src/assets/about_image1.jpeg",
    },
    {
      id: 2,
      text: `🎯 Our mission is to help our clients achieve their real 
        estate goals by providing expert advice, personalized 
        service, and a deep understanding of the local market. 
        Whether you are looking to buy, sell, or rent a property, 
        we are here to help you every step of the way.`,
      image: "src/assets/clients.jpeg",
    },
    {
      id: 3,
      text: `👪 Our team of agents has a wealth of experience and knowledge 
        in the real estate industry, and we are committed to providing 
        the highest level of service to our clients. 
        We believe that buying or selling a property 
        should be an exciting and rewarding experience, 
        and we are dedicated to making that a reality for each 
        and every one of our clients.`,
      image: "src/assets/service.jpeg",
    },
  ];
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About YANG Estate
      </h1>
      {aboutPageData.map((paragraph, index) => (
        <div
          key={paragraph.id}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } gap-4 mt-10 items-center flex-col md:flex-row`}
        >
          {index % 2 === 0 && (
            <img
              className="w-74 h-64 rounded-lg mr-4"
              alt="image"
              src={paragraph.image}
            />
          )}
          <p className="mb-4 text-slate-700">{paragraph.text}</p>
          {index % 2 !== 0 && (
            <img
              className="w-74 h-64 rounded-lg ml-4"
              alt="image"
              src={paragraph.image}
            />
          )}
        </div>
      ))}
    </div>
  );
}
