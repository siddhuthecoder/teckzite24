import React, { useEffect, useState } from 'react';
import sponcercard from '../../assets/img/Sponcercard.webp';
import Animation from '../../components/Animation';

const SponsorsCard2 = () => {
  const [sponsorsData, setSponsorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('https://tzm-1.onrender.com/api/sponsors');
        const data = await response.json();

        // Group sponsors by their 'type'
        const groupedData = data.reduce((acc, sponsor) => {
          const { type, name, image } = sponsor;
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push({ name, img: image });
          return acc;
        }, {});

        // Convert grouped data into an array with headings
        const formattedData = Object.keys(groupedData).map((key) => ({
          heading: key,
          sponsors: groupedData[key],
        }));

        setSponsorsData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sponsors data:', error);
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div
      className="absolute top-0 w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/sponsers.bg.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Animation title="Sponsors" />

      <div className="relative">
        {sponsorsData.map((section, index) => (
          <div key={index} className="pb-[70px]">
            <div className="text-center font-bruno text-[white] text-2xl md:text-3xl">
              {section.heading}
            </div>
            <div className="w-full flex items-center justify-center flex-wrap">
              {section.sponsors.map((sponsor, i) => (
                <div className="relative mt-5 w-64 cursor-pointer" key={i}>
                  <img src={sponcercard} width="100%" alt="Sponsor Card" />
                  <img
                    src={sponsor.img}
                    className="w-[140px] h-[80px] absolute left-[25%] top-[40%] [clip-path:polygon(88%_0,_100%_17%,_100%_100%,_10%_100%,_0_81%,_0_0)]"
                    alt={sponsor.name}
                  />
                  <h2 className="absolute top-14 text-white text-center w-[85%] text-md pl-4">
                    {sponsor.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsCard2;
