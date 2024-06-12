import { useEffect, useState } from "react";

const LatStatePage = () => {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState("");

  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("tiara");
    } else {
      setNamaPacar("belum adaaaaa");
    }
  }, [pacarSaya]);

  return (
    <div>
      introduction
      <h1>halo pacar saya : {namaPacar}</h1>
      <h1>saya memiliki : {pacarSaya} pacar</h1>
      <button
        onClick={() => setPacarSaya((prev) => (prev + 1 > 10 ? 10 : prev + 1))}
        className="p-2 bg-teal-800 rounded-md"
      >
        tambah pacar
      </button>
      <button
        onClick={() => setPacarSaya((prev) => (prev - 1 < 0 ? 0 : prev - 1))}
        className="p-2 bg-teal-800 rounded-md"
      >
        putuskan pacar
      </button>
    </div>
  );
};

export default LatStatePage;
