import { useParams } from "react-router-dom";

const photos = {
  wedding: [
    "/m1.jpeg",
    "/m2.jpeg",
    "/m3.jpeg",
    "/m4.jpeg",
  ],
  couple: [
    "/m1.jpeg",
    "/m2.jpeg",
  ],
  baby: [
    "/m5.jpeg",
    "/m3.jpeg",
  ],
  birthday: [
    "/m4.jpeg",
    "/m2.jpeg",
  ],
  maternity: [
    "/m1.jpeg",
    "/m5.jpeg",
  ],
};

export default function GalleryPage() {
  const { type } = useParams();

  return (
    <div className="p-10 bg-[#fff5f7] min-h-screen">

      <h1 className="text-4xl font-bold text-[#d63384] mb-8 capitalize">
        {type} Photography
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {(photos[type] || []).map((img, index) => (
          <img
  key={index}
  src={img}
  alt="Gallery"
  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
/>
        ))}
      </div>

    </div>
  );
}
