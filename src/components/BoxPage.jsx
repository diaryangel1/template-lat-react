import { useState } from "react";

const BoxPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hitung, setHitung] = useState(0);
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
      <div className="relative w-36 h-36">
        <div
          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-pink-700 rounded-lg filter blur-md ${isHovered ? "opacity-60" : "opacity-30"} transition-opacity duration-500 z-0 transform translate-x-3 translate-y-3`}
        >
          bg
        </div>
        <div
          className="relative w-36 h-36 bg-white rounded-lg z-10 border border-gray-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Kotak Putih
        </div>
      </div>
      <div className="mt-10">
        <button
          className="bg-blue-700 rounded-md text-yellow-50 p-2"
          onClick={() => setHitung(hitung - 1)}
        >
          Klik Kurang
        </button>
        <p>Kamu menekan {hitung} kali </p>
        <button
          className="bg-blue-700 rounded-md text-yellow-50 p-2"
          onClick={() => setHitung(hitung + 1)}
        >
          Klik Tambah
        </button>
      </div>
    </div>
  );
};

export default BoxPage;
