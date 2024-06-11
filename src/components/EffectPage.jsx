import { useEffect, useState } from "react";

const EffectPage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Mengubah judul halaman setiap kali count berubah
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array dengan count

  useEffect(() => {
    // Mengambil data dari API saat komponen pertama kali dirender
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // Dependency array kosong, hanya dijalankan sekali saat komponen pertama kali dirender

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">You clicked {count} times</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Click me
      </button>

      {/* belajar contoh kasus use efect */}
      <div className="mt-4">
        {data ? (
          <div>
            <h2 className="text-xl">Fetched Data:</h2>
            <p>ID: {data.id}</p>
            <p>Title: {data.title}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default EffectPage;
