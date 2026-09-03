import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Tambahkan ekstensi .jsx
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";

import { KeranjangProvider } from "./context/KeranjangContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Tambahkan .jsx di lazy load
const DetailProduk = lazy(() => import("./pages/DetailProduk.jsx"));
const Keranjang = lazy(() => import("./pages/Keranjang.jsx"));
const Auth = lazy(() => import("./pages/Auth.jsx"));

function App() {
  return (
    <AuthProvider>
      <KeranjangProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />

          <Suspense fallback={<div className="p-6 text-center">Memuat...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produk/:id" element={<DetailProduk />} />
              <Route
                path="/keranjang"
                element={
                  <ProtectedRoute>
                    <Keranjang />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Auth />} />
            </Routes>
          </Suspense>
        </div>
      </KeranjangProvider>
    </AuthProvider>
  );
}

export default App;