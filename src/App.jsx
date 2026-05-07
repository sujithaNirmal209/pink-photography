export default function PinkPhotographyWebsite() {
  const gallery = [
    {
      title: 'Wedding Moments',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Couple Shoots',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Baby Photography',
      image:
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Fashion Portraits',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-pink-200 shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-pink-800 tracking-wide">
          PinkLens Studio
        </h1>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#home" className="hover:text-pink-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-pink-700 transition">
            About
          </a>
          <a href="#gallery" className="hover:text-pink-700 transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-pink-700 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop"
          alt="Photography"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Capture Your
            <span className="block text-pink-300">Beautiful Moments</span>
          </h2>

          <p className="mt-6 text-lg md:text-2xl text-pink-100 max-w-2xl mx-auto">
            Wedding • Portrait • Fashion • Baby Shoots
          </p>

          <a
  href="https://wa.me/9787401934"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-pink-500 hover:bg-pink-600 transition text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
>
  Book a Session
</a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
          alt="Photographer"
          className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />

        <div>
          <h3 className="text-4xl font-bold text-pink-700 mb-6">
            About PinkLens
          </h3>

          <p className="text-lg leading-8 text-gray-700">
            PinkLens Studio is a modern photography brand focused on creating
            dreamy, elegant, and emotional memories. We specialize in wedding
            photography, couple portraits, fashion shoots, maternity sessions,
            and cinematic storytelling.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-pink-600">500+</h4>
              <p className="mt-2 text-gray-600">Happy Clients</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-3xl font-bold text-pink-600">8 Years</h4>
              <p className="mt-2 text-gray-600">Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-pink-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-5xl font-bold text-pink-700">
              Our Gallery
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              A glimpse of our favorite captured moments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h4 className="text-2xl font-semibold text-pink-700">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold text-pink-700">Services</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Wedding Photography',
            'Pre Wedding Shoots',
            'Birthday Photography',
            'Fashion Photography',
            'Maternity Shoots',
            'Baby Shoots',
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-4">📸</div>
              <h4 className="text-2xl font-bold text-pink-700 mb-3">
                {service}
              </h4>
              <p className="text-gray-600 leading-7">
                Professional and aesthetic photography sessions tailored to your
                special moments.
              </p>
            </div>
          ))}
        </div>
      </section>

	  {/* Pricing Section */}
<section className="py-20 px-6 bg-pink-50">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-5xl font-bold text-pink-700 mb-14">
      Pricing Packages
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h4 className="text-3xl font-bold text-pink-600">
          Basic
        </h4>

        <p className="text-5xl font-bold mt-6">
          ₹5,000
        </p>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li>1 Hour Shoot</li>
          <li>20 Edited Photos</li>
          <li>Outdoor Session</li>
        </ul>
      </div>

      <div className="bg-pink-500 text-white p-8 rounded-3xl shadow-2xl">
        <h4 className="text-3xl font-bold">
          Premium
        </h4>

        <p className="text-5xl font-bold mt-6">
          ₹15,000
        </p>

        <ul className="mt-6 space-y-3">
          <li>Full Day Coverage</li>
          <li>100 Edited Photos</li>
          <li>Cinematic Video</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h4 className="text-3xl font-bold text-pink-600">
          Luxury
        </h4>

        <p className="text-5xl font-bold mt-6">
          ₹30,000
        </p>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li>Wedding Package</li>
          <li>Album Included</li>
          <li>Drone Shoot</li>
        </ul>
      </div>

    </div>
  </div>
</section>
   
      {/* Contact */}
<section
  id="contact"
  className="bg-gradient-to-r from-pink-300 to-pink-500 py-20 px-6 text-white"
>
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-5xl font-bold">Let’s Create Memories</h3>

    <p className="mt-6 text-xl leading-8">
      Contact us for bookings, collaborations, and photography sessions.
    </p>

    <div className="mt-10 flex flex-col items-center">
      
      {/* Owner Image */}
      <img
        src="/WhatsApp Image 2026-05-07 at 4.12.19 PM.jpeg"
        alt="Owner"
        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
      />

      <h4 className="text-3xl font-bold mb-2">
        Nirmal
      </h4>

      <p className="text-pink-100 mb-6 text-lg">
        Founder & Lead Photographer
      </p>

      <div className="space-y-4 text-lg">
        <p>📍 Cheyyar, India</p>
        <p>📞 +91 9789491934</p>
        <p>📧 pinklensstudio@gmail.com</p>
        <p>📸 Instagram: @pinklensstudio</p>
        <p>🌐 www.pinklensstudio.com</p>
      </div>

      <a
        href="https://wa.me/919789491934"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition shadow-xl"
      >
        Contact Now
      </a>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-pink-950 text-pink-100 py-6 text-center text-sm">
        © 2026 PinkLens Studio • www.pinklensstudio.com • All Rights Reserved
      </footer>
    </div>
  );
}

