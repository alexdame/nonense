import React, { useState } from 'react';
import {
  Menu,
  X,
  Building2,
  Code,
  Utensils,
  Sofa,
  Shirt,
  MapPin,
  Mail,
  Phone,
  Target,
  Eye,
  Rocket
} from 'lucide-react';

// Main App component that manages the page state and renders the site
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  // A component for the navigation bar
  const Navbar = ({ isHomePage }) => {
    return (
      <nav className="p-4 bg-white shadow-lg fixed w-full z-20 transition-all duration-300 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
          {/* Logo and brand name. The logo is larger on the homepage. */}
          <div className="flex items-center space-x-2">
            <Building2 className={`text-indigo-600 ${isHomePage ? 'w-16 h-16' : 'w-10 h-10'}`} />
            <button onClick={() => navigateTo('home')} className={`text-2xl font-bold text-gray-800 focus:outline-none ${isHomePage ? 'text-4xl' : ''}`}>
              DAART-CHAS
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => navigateTo('home')} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Home</button>
            <button onClick={() => navigateTo('media')} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Media</button>
            <button onClick={() => navigateTo('food')} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Food & Hotels</button>
            <button onClick={() => navigateTo('furniture')} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Furniture & Interiors</button>
            <button onClick={() => navigateTo('clothes')} className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium">Clothes</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-b-xl shadow-lg p-4 transition-all duration-300">
            <button onClick={() => navigateTo('home')} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 font-medium">Home</button>
            <button onClick={() => navigateTo('media')} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 font-medium">Media</button>
            <button onClick={() => navigateTo('food')} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 font-medium">Food & Hotels</button>
            <button onClick={() => navigateTo('furniture')} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 font-medium">Furniture & Interiors</button>
            <button onClick={() => navigateTo('clothes')} className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-300 font-medium">Clothes</button>
          </div>
        )}
      </nav>
    );
  };

  // Footer component with contact information
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
            {/* Logo and company info */}
            <div className="flex items-center space-x-4">
              <Building2 className="text-indigo-600 w-12 h-12" />
              <div>
                <p className="text-xl font-bold text-white">DAART-CHAS GROUP</p>
                <p className="text-sm text-gray-500">The holding company</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-2">
              <p className="font-semibold text-white mb-2">Contact Us</p>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <MapPin className="text-indigo-500 w-5 h-5" />
                <span>NO.9, Admiralty estaate, ibuzo express road, Asaba, Delta state</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <MapPin className="text-indigo-500 w-5 h-5" />
                <span>NO.16, Jeremiah Useni estate, Gwagwalada, FCT, Abuja.</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <Phone className="text-indigo-500 w-5 h-5" />
                <span>09073703141</span>
              </div>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <Mail className="text-indigo-500 w-5 h-5" />
                <span>daartchasgroup@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            &copy; 2025 DAART-CHAS GROUP. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };

  // Component for the main landing page
  const HomePage = () => {
    const companyCards = [
      {
        id: 'media',
        icon: <Code className="w-10 h-10 text-indigo-600" />,
        title: 'DAART-CHAS MEDIA'
      },
      {
        id: 'food',
        icon: <Utensils className="w-10 h-10 text-indigo-600" />,
        title: 'DAART-CHAS FOODS, HOTELS & HOME MANAGEMENT'
      },
      {
        id: 'furniture',
        icon: <Sofa className="w-10 h-10 text-indigo-600" />,
        title: 'DAART-CHAS FURNITURE, INTERIOR AND FINISHINGS'
      },
      {
        id: 'clothes',
        icon: <Shirt className="w-10 h-10 text-indigo-600" />,
        title: 'DAART-CHAS CLOTHES'
      }
    ];

    return (
      <div className="pt-24 bg-gray-50 min-h-screen">
        <header className="py-20 text-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              DAART - CHAS INTEGRATED GROUP
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              IS THE HOLDING COMPANY for the diversified companies/subsidiaries under the umbrella of DAART-CHAS GROUP.
            </p>
          </div>
        </header>

        {/* About Us section */}
        <section id="about" className="py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="p-6 bg-white rounded-xl shadow-lg w-full md:w-1/2">
                  <div className="flex items-center justify-center mb-4">
                    <Target className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">OUR MISSION</h3>
                  <p className="text-gray-600">
                    To provide very innovative services in all the various areas of businesses we run. To provide cutting edge services, at very cost effective Prices.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg w-full md:w-1/2">
                  <div className="flex items-center justify-center mb-4">
                    <Eye className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">OUR VISION</h3>
                  <p className="text-gray-600">
                    To be a leading brand in the core areas of our various businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company list section */}
        <section id="companies" className="py-16 bg-gray-100 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Our Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyCards.map((company) => (
                <button
                  key={company.id}
                  onClick={() => navigateTo(company.id)}
                  className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-6 transition-all duration-300 group-hover:bg-indigo-200">
                      {company.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">
                      {company.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Component for DAART-CHAS MEDIA page
  const MediaPage = () => {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <header className="py-16 text-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">DAART-CHAS MEDIA</h1>
        </header>
        <div className="container mx-auto p-8">
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <p>Daart-chas media is a multimedia brand. We handle brand development, management, and promotions.</p>
            <p>We handle all aspects of "BRANDING & PACKAGING" A BRAND./POLITICIAN. These include:</p>
            <ul className="list-disc list-inside">
              <li>Conceptualizing the ideas.</li>
              <li>Designing and printing of business cards, files & folders, marketing fliers, receipts and invoices, company seals, office and company vehicles branding.</li>
            </ul>
            <p>We provide strategies consulting for both people in businesses and politics. We design unique, cutting-edge brand promotions, marketing, and marketing strategies. We come up with innovative brand development strategy and techniques.</p>
            <p>We offer very cost-effective brand/business and political campaigns management strategies.</p>
            <p>We work diligently with our clients, be they businesses or people in politics, to design very innovative and practical, easy-to-implement route-to-market (RTM); for start-ups and new products or emerging brands. We also coordinate effective political campaigning drives for those in politics.</p>
          </div>
        </div>
      </div>
    );
  };

  // Component for DAART-CHAS FOODS page
  const FoodPage = () => {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <header className="py-16 text-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">DAART-CHAS FOODS, HOTELS & HOME MANAGEMENT</h1>
        </header>
        <div className="container mx-auto p-8">
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">DAART-CHAS SOUPS SHOP:</h3>
            <p>Where you can buy your POTS of SOUPS and STEW ALL @ A RIDICULOUSLY LOW PRICES; Starting from N12,500 for a Pot of soup with over a dozen pieces of beef! We can also order your lunch and dinner from us for as low as N1500. We are simply "Crazy"😃...</p>
            <p>Our company is designed to help the business-minded men and women/the busy executives to live more easily at very little cost.</p>
            <p>We take care of all your domestic needs, so you can focus wholly on that which brings you money— your work and businesses. We simply do all the 'dirty works' just so you can be more productive!!!</p>
            <p>With us, you can save money and your life from the risk of hiring domestic help you know little or nothing about their backgrounds. Or eating out, or taking your clothes to an expensive laundry shop, where you're not even aware of how well and hygienically they handle your clothes. For instance, I once saw a laundry man, washing a customer's clothes with a huge iron brush... the reason, your clothes wear out in no time, and you would usually blame it on the maker of the clothes, while your "wack" laundry man is responsible for it!</p>
            <p>We can come over to your homes to thoroughly clean your homes, wash all your clothing, including underwear, and even cook you bulk food, which you can fridge. We can also fumigate your homes.</p>
            <p>Yea, it can only be Daart-chas, the brand wey no dey follow crowd.</p>
          </div>
        </div>
      </div>
    );
  };

  // Component for DAART-CHAS FURNITURE page
  const FurniturePage = () => {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <header className="py-16 text-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">DAART-CHAS FURNITURE, INTERIOR AND FINISHINGS</h1>
        </header>
        <div className="container mx-auto p-8">
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <p>Our company specializes in building innovative and Minimalist furniture, as we seek to be eco-friendly. We have been reinventing the art of furniture making and home furnishing. Thus we design and build furniture with very little to zero wood. Convertible furniture is one of our specialties.</p>
            <p>We also deliberately Afro-centric in our interior design and finishing, introducing, integrating and utilizing our African motives, designs and crafts in our furniture and interior design and finishings. Our furniture designs are completely uniquely crafted and breath-taking!</p>
            <p>We also produce on-demand quality paints, and we also paint your building in a very creative and highly professional way. Our very creative and skillful in-house artists are quite capable of creating and mixing very rare and beautiful colors that will make your house/building stand apart.</p>
            <p>Our in-house artists can also craft-mould very rare and unique designs and patterns on your window and door hoods, and even incorporate art works on the walls of your building or fence. They can also design very stunning sculptures, statues and waterfalls.</p>
            <p>Our interior design experts would help design the most aesthetic lighting position for your homes to give each space a unique ambiance.</p>
            <p>Our interior designer can design very colorful, out-of-this-world curtains and blinds for homes.</p>
          </div>
        </div>
      </div>
    );
  };

  // Component for DAART-CHAS CLOTHES page
  const ClothesPage = () => {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <header className="py-16 text-center bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">DAART-CHAS CLOTHES</h1>
        </header>
        <div className="container mx-auto p-8">
          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <p>This is the clothing arm of Daart-chas group of companies. Here we specialize and pride ourselves on making high-quality, neatly and perfectly finished ready-to-wear (RTW) or what is locally and commonly known as already-made African-styled clothing.</p>
            <p>We were the 1st brand in Nigeria to start making and packing our African/Nigerian Styled clothing like the western/foreign clothes, complete with brand labels, size tags, etc.</p>
            <p>We pride ourselves on coming up with stunning, creative styles that will always wow our customers. We also provide couture services. With this, we liberate you from the menace of your average tailor—in terms of eliminating the delays and disappointment that come with patronizing your local tailor.</p>
            <p>Daart-chas clothes brings lots of ease to people wishing to buy and make our African-styled clothings.</p>
          </div>
        </div>
      </div>
    );
  };

  // The main rendering logic based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'media':
        return <MediaPage />;
      case 'food':
        return <FoodPage />;
      case 'furniture':
        return <FurniturePage />;
      case 'clothes':
        return <ClothesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <style>
        {/* Global styles for the font and body background */}
        {`
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; }
        body { margin: 0; padding: 0; box-sizing: border-box; }
        * { box-sizing: border-box; }
        .prose ul li {
          margin-bottom: 0.5rem;
        }
        `}
      </style>
      <Navbar isHomePage={currentPage === 'home'} />
      <main className="flex-grow pt-24 md:pt-28">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
