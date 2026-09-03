import { useKeranjang } from "../context/KeranjangContext";
import { Link } from "react-router-dom";

function Keranjang() {
  const { item, ubahJumlah, hapusDariKeranjang } = useKeranjang();

  if (!item || item.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Keranjang Belanja</h2>
        <p className="text-gray-500 mb-4">Keranjang kamu masih kosong.</p>
        <Link to="/" className="text-blue-600 underline">Belanja Sekarang</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>

      <div className="space-y-3">
        {item.map((prod) => (
          <div key={prod.id} className="border p-3 rounded bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={prod.gambar || prod.image} alt={prod.nama || prod.title} className="w-12 h-12 object-contain" />
              <div>
                <p className="font-semibold text-sm">{prod.nama || prod.title}</p>
                <p className="text-blue-600 font-bold text-sm">
                  Rp {(prod.harga || prod.price || 0).toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => ubahJumlah(prod.id, -1)} className="bg-gray-200 px-2 py-1 rounded text-sm font-bold">-</button>
              <span className="text-sm font-bold">{prod.jumlah || 1}</span>
              <button onClick={() => ubahJumlah(prod.id, 1)} className="bg-gray-200 px-2 py-1 rounded text-sm font-bold">+</button>
              <button onClick={() => hapusDariKeranjang(prod.id)} className="bg-red-500 text-white px-2 py-1 rounded text-sm ml-2">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keranjang;
