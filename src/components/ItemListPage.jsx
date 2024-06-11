import { useState } from "react";

function ItemListPage() {
  // State untuk menyimpan daftar item dan nilai input baru
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Event handler untuk perubahan pada input baru
  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  // Event handler untuk menambahkan item baru ke daftar
  const handleAddItem = (event) => {
    event.preventDefault();
    if (newItem.trim() !== "") {
      //trim untuk menghapus spasi di awal dan akhir dari inputan
      setItems([...items, newItem]);
      setNewItem(""); // Mengosongkan input setelah menambahkan item
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-red-100">
      <h2 className="text-2xl mb-4">Daftar Item</h2>
      <form
        onSubmit={handleAddItem}
        className="bg-white p-6 rounded-lg shadow-md mb-4"
      >
        <input
          type="text"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Masukkan item baru"
          value={newItem}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Tambah Item
        </button>
      </form>
      {/* membuat ul dan li untuk menampilkan item secara terurut sesuai input user */}
      <ul className="bg-white p-6 rounded-lg shadow-md w-96">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-slate-100 border-b  last:border-b-0 py-2  "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListPage;
