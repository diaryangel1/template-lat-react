import { useState } from "react";

function FormPage() {
  // const [name, setName] = useState("");

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleNama = (event) => {
    setNama(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePesan = (event) => {
    setPesan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with name: ${nama} email: ${email} masage: ${pesan}`);
  };

  return (
    <div className="flex items-center flex-col gap-10 justify-center min-h-screen bg-gray-100">
      {/* <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form> */}
      <br className="mb-90" />

      {/* latihan soal */}

      <form
        className="bg-white p-6 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4">Formulir Kontak</h2>
        {/* div label dan input */}
        <div className="mb-4 flex flex-col">
          {/* inputan nama */}
          <label
            htmlFor=""
            className="text-gray-800 block"
          >
            Nama
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-700 rounded-md"
            onChange={handleNama}
            value={nama}
          />
          {/* inputan email */}
          <label
            htmlFor=""
            className="text-gray-800 block"
          >
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-2 border border-gray-700 rounded-md"
            onChange={handleEmail}
            value={email}
          />
          {/* inputan pesan */}
          <label
            htmlFor=""
            className="text-gray-800"
          >
            Pesan
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-700 rounded-md"
            onChange={handlePesan}
            value={pesan}
          />
          {/* tombol button Kirim */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-1 rounded"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
