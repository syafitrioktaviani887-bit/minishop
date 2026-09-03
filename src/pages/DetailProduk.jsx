import { useParams, Link } from "react-router-dom";
import { daftarProduk } from "../data/produk";
import Button from "../components/Button.jsx";
import Badge from "../components/Badge.jsx";

function DetailProduk() {
  const { id } = useParams();
  const produk = daftarProduk.find((p) => p.id === Number(id));

  if (!produk) { 
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">Produk Tidak Ditemukan!</h2>
        <Link to="/" className="text-blue-600 underline mt-2 inline-block">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <Link to="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
          &larr; Kembali ke Beranda
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <img
            src={produk.gambar}
            alt={produk.nama}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800">{produk.nama}</h2>
                {produk.stok ? (
                  <Badge text="Stok Tersedia" type="success" />
                ) : (
                  <Badge text="Stok Habis" type="danger" />
                )}
              </div>
              <p className="text-xl font-semibold text-blue-600 mt-2">
                Rp {produk.harga.toLocaleString("id-ID")}
              </p>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {produk.deskripsi}
              </p>
            </div>

            <div className="mt-6">
              <Button disabled={!produk.stok}>
                {produk.stok ? "Tambah Ke Keranjang" : "Tidak Tersedia"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}