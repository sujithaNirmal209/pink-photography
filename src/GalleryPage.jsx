import { useParams } from "react-router-dom";
import { useState } from "react";

const photos = {
  wedding: [
    "/reception/rec1.jpeg",
    "/reception/rec2.jpeg",
    "/reception/rec3.jpeg",
    "/reception/rec4.jpeg",
    "/reception/rec5.jpeg",
    "/reception/r1.jpeg",
    "/reception/r2.jpeg",
    "/reception/r3.jpeg",
  ],

  couple: [
    "/pre/pre1.jpg",
    "/pre/pre2.jpg",
    "/pre/pre3.jpeg",
    "/pre/pre4.jpeg",
    "/pre/pre5.jpeg",
    "/pre/pre6.jpeg",
    "/pre/pre7.jpeg",
    "/pre/pre8.jpeg",
    "/pre/p1.jpeg",
    "/pre/p2.jpeg",
  ],

  baby: [
    "/babyshower/babys1.jpeg",
    "/babyshower/babys2.jpeg",
    "/babyshower/babys3.jpeg",
    "/baby/b1.jpeg",
  ],

  engagement: [
    "/egagement/engage1.jpg",
    "/egagement/engage2.jpg",
    "/egagement/engage3.jpeg",
  ],

  maternity: [
    "/baby/baby2.jpg",
    "/baby/babys1.jpg",
    "/baby/babys2.jpg",
    "/babyshower/babyshow.jpg",
    "/babyshower/bs1.jpeg",
    "/babyshower/bs2.jpeg",
  ],
};

export default function GalleryPage() {

  const { type } = useParams();

  // IMAGE POPUP STATE
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div className="min-h-screen bg-[#fff5f7] px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-[#d63384] capitalize">
          {type} Photography
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Beautiful moments captured with love & creativity.
        </p>

      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {(photos[type] || []).map((img, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-xl
              border
              border-pink-100
              hover:shadow-2xl
              transition
              duration-500
              group
              cursor-pointer
            "
            onClick={() => setSelectedImage(img)}
          >

            {/* Image Container */}
            <div className="h-96 bg-pink-50 flex items-center justify-center p-4 overflow-hidden">

              <img
                src={img}
                alt="Gallery"
                className="
                  max-h-full
                  max-w-full
                  object-contain
                  rounded-2xl
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

            </div>

          </div>

        ))}

      </div>

      {/* IMAGE POPUP */}
      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            bg-black/80
            flex
            items-center
            justify-center
            z-50
            p-6
          "
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="
              max-w-full
              max-h-[90vh]
              rounded-3xl
              shadow-2xl
            "
          />

        </div>

      )}

    </div>

  );
}
