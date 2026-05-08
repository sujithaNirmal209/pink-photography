import { Link } from "react-router-dom";

export default function Home() {
  const gallery = [
    {
      title: "Wedding Moments",
      image: "/marriage.jpeg",
      type: "wedding",
    },
    {
      title: "PreWedding Shoots",
      image: "/couple.jpeg",
      type: "couple",
    },
    {
      title: "Baby Photography",
      image: "/baby.jpeg",
      type: "baby",
    },
    {
      title: "Birthday Shoots",
      image: "/bday.jpeg",
      type: "birthday",
    },
    {
      title: "Maternity Shoots",
      image: "/maternity.jpeg",
      type: "maternity",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f7] text-gray-800 font-sans">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-[#ffd6e7] border-b border-yellow-400 shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-[#d63384] tracking-wide">
          PinkPhotography Studio
        </h1>

        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#gallery" className="hover:text-yellow-500 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="/ChatGPT Image May 8, 2026, 08_26_25 AM.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-pink-500/30 to-yellow-400/30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Capture Your Beautiful Moments
          </h2>

          <p className="mt-5 text-lg md:text-2xl text-pink-100">
            • Wedding • Pre Wedding • Maternity • Baby Shoots • Birthday • Puberty • Ear Piercing • House warming • Engagement • Reception
          </p>

          <p className="mt-4 text-yellow-200 text-lg md:text-xl font-medium">
            Book your order in one view • Fast & Easy Booking
          </p>

<div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">

  {/* BOOK BUTTON */}
  <Link
    to="/book"
    className="bg-yellow-400 hover:bg-yellow-500 text-black transition px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
  >
    Book Your Photoshoot 📸
  </Link>

  {/* CALL BUTTON */}
  <a
    href="tel:+916382715568"
    className="bg-pink-500 hover:bg-pink-600 text-white transition px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
  >
    Call Now 📞
  </a>

</div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src="/photo1.jpeg"
          alt="Photographer"
          className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
        />

        <div>
          <h3 className="text-4xl font-bold text-[#d63384] mb-6">
            About PinkPhotography
          </h3>

          <p className="text-lg leading-8 text-gray-700">
            PinkPhotography Studio is a modern photography brand with 5+ years of experience in capturing dreamy, elegant, and emotional memories. We specialize in weddings, pre-wedding shoots, couple photography, fashion shoots, maternity sessions, baby photography, turning every special moment into a timeless memory.
          </p>
        </div>
      </section>

    {/* Gallery */}
<section id="gallery" className="bg-[#ffe4ec] py-20 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">

      <h3 className="text-5xl font-bold text-[#d63384]">
        Our Gallery
      </h3>

      <p className="mt-4 text-lg text-gray-600">
        A glimpse of our favorite captured moments.
      </p>

    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

      {gallery.map((item, index) => (

        <Link
          key={index}
          to={`/gallery/${item.type}`}
          className={`
            w-full
            lg:col-span-2
            ${index === 3 ? "lg:col-start-2" : ""}
          `}
        >

          <div className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-yellow-200 cursor-pointer">

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            {/* Title */}
            <div className="p-5 text-center">

              <h4 className="text-2xl font-semibold text-[#d63384]">
                {item.title}
              </h4>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>

{/* Contact Section */}
<section
  id="contact"
  className="relative py-24 px-6 overflow-hidden"
>

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50"></div>

  {/* Golden Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent_60%)]"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">

    <h3 className="text-5xl font-bold text-[#d63384]">
      Let’s Create Memories
    </h3>

    <p className="mt-6 text-xl leading-8 text-gray-700">
      Contact us for bookings, collaborations, and photography sessions.
    </p>

    <div className="mt-10 flex flex-col items-center">

      {/* Owner Image */}
      <img
        src="/WhatsApp Image 2026-05-07 at 4.12.19 PM.jpeg"
        alt="Owner"
        className="w-36 h-36 rounded-full object-cover border-4 border-yellow-300 shadow-xl mb-6"
      />

      {/* Owner Name */}
      <h4 className="text-3xl font-bold text-[#d63384] mb-2">
        Nirmal Ganesh
      </h4>

      <p className="text-gray-600 mb-6 text-lg">
        Founder & Lead Photographer
      </p>

      {/* Contact Details */}
      <div className="space-y-4 text-lg text-gray-700">

        <p>
          📍 <span className="font-semibold">Studio Address:</span><br />
          PinkPhotography Studio,<br />
          No.9, Aarni saalai, opposite to MRF Tyres,<br />
          Cheyyar, Tamil Nadu - 604407
        </p>

        <p>📞 +91 6374234058</p>

        <p>📧 pinkphotographystudio@gmail.com</p>

        <p>📸 Instagram: @pinkphotography007</p>

      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">

        {/* LOCATION BUTTON */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-bold shadow-lg"
        >
          View Location 🗺️
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/916374234058?text=Hi%20I%20am%20interested%20in%20booking%20a%20photoshoot.%0APlease%20share%20details"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#d63384] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
        >
          Contact Now
        </a>
	<a
  href="https://instagram.com/pinkphotography007"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
>
  Instagram Booking 📸
</a>

      </div>

    </div>

  </div>

</section>

{/* Pricing Section */}
<section className="py-20 px-6 bg-[#fff0f5]">

  <div className="max-w-6xl mx-auto text-center">

    <h3 className="text-5xl font-bold text-[#d63384] mb-14">
      Pricing Packages
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Basic Package */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">

        <h4 className="text-3xl font-bold text-[#d63384]">
          Basic
        </h4>

        <p className="text-5xl font-bold mt-6 text-gray-800">
          ₹5,000
        </p>

        <ul className="mt-6 space-y-3 text-gray-600">
          <li>1 Hour Shoot</li>
          <li>20 Edited Photos</li>
          <li>Outdoor Session</li>
        </ul>

      </div>

      {/* Premium Package */}
      <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white p-8 rounded-3xl shadow-2xl scale-105">

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

      {/* Luxury Package */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">

        <h4 className="text-3xl font-bold text-[#d63384]">
          Luxury
        </h4>

        <p className="text-5xl font-bold mt-6 text-gray-800">
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

{/* Reviews Section */}
<section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-yellow-50 to-pink-100">

  <div className="max-w-6xl mx-auto text-center">

    <h3 className="text-5xl font-bold text-[#d63384] mb-14">
      Client Reviews
    </h3>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Review 1 */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">

        <div className="text-yellow-500 text-2xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-7">
          Amazing photography and editing quality. Our wedding memories became unforgettable!
        </p>

        <h4 className="mt-6 text-xl font-bold text-[#d63384]">
          Priya & Karthik
        </h4>

      </div>

      {/* Review 2 */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">

        <div className="text-yellow-500 text-2xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-7">
          Professional team with creative ideas. Highly recommended for baby shoots.
        </p>

        <h4 className="mt-6 text-xl font-bold text-[#d63384]">
          Anitha
        </h4>

      </div>

      {/* Review 3 */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-200">

        <div className="text-yellow-500 text-2xl mb-4">
          ★★★★★
        </div>

        <p className="text-gray-600 leading-7">
          Loved the cinematic video and candid moments. Worth every rupee.
        </p>

        <h4 className="mt-6 text-xl font-bold text-[#d63384]">
          Rohit
        </h4>

      </div>

    </div>

  </div>

</section>
      {/* Footer */}
      <footer className="bg-[#b03060] text-pink-100 py-6 text-center text-sm">
        © 2026 PinkPhotography Studio • All Rights Reserved
      </footer>
      
      <a
  href="https://wa.me/916374234058?text=Hi%20I%20want%20to%20book%20a%20photoshoot%20with%20PinkPhotography%20Studio"
  target="_blank"
  className="fixed bottom-6 right-6 bg-yellow-400 hover:scale-110 transition text-black px-6 py-3 rounded-full shadow-2xl font-bold z-50"
>
  📸 Book Now
</a>

    </div>
  );
}
