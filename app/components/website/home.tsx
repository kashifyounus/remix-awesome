import CountryCard from "./country-card";
import Footer from "./footer";
import Navbar from "./navbar";

const HomePage = () => {
  const countries = [
    {
      name: "Saudi Arabia",
      flag: "https://flagcdn.com/w640/sa.png",
      code: "SA",
      whatsappNumber: "+1234567890",
    },
    {
      name: "United Arab Emirates",
      flag: "https://flagcdn.com/w640/ae.png",
      code: "GB",
      whatsappNumber: "+1234567891",
    },
    {
      name: "Bahrain",
      flag: "https://flagcdn.com/w640/bh.png",
      code: "CA",
      whatsappNumber: "+1234567892",
    },
    {
      name: "Qatar",
      flag: "https://flagcdn.com/w640/qa.png",
      code: "AU",
      whatsappNumber: "+1234567893",
    },
    {
      name: "Kuwait",
      flag: "https://flagcdn.com/w640/kw.png",
      code: "NZ",
      whatsappNumber: "+1234567894",
    },
    {
      name: "Oman",
      flag: "https://flagcdn.com/w640/om.png",
      code: "JP",
      whatsappNumber: "+1234567895",
    },
    // add more arabs countries
    {
        name : "Jordan",
        flag : "https://flagcdn.com/w640/jo.png",
        code : "JO",
        whatsappNumber : "+1234567896"
    },
    {
        name : "Lebanon",
        flag : "https://flagcdn.com/w640/lb.png",
        code : "LB",
        whatsappNumber : "+1234567897"
    },
    {
        name : "Egypt",
        flag : "https://flagcdn.com/w640/eg.png",
        code : "EG",
        whatsappNumber : "+1234567898"
    },
    {
        name : "Iraq",
        flag : "https://flagcdn.com/w640/iq.png",
        code : "IQ",
        whatsappNumber : "+1234567899"
    },
    {
        name : "Syria",
        flag : "https://flagcdn.com/w640/sy.png",
        code : "SY",
        whatsappNumber : "+1234567800"
    }
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section id="locations" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Locations</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Connect with our offices worldwide for personalized business
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <CountryCard key={index} {...country} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
