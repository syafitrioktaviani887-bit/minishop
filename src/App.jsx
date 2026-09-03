import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

import { KeranjangProvider } from "./context/KeranjangContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy loading halaman
const DetailProduk = lazy(() => import("./pages/DetailProduk"));
const Keranjang = lazy(() => import("./pages/Keranjang"));
const Auth = lazy(() => import("./pages/Auth"));

function App() {
  return (
    <AuthProvider>
      <KeranjangProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />

          <Suspense fallback={<div className="p-6 text-center">Memuat...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/produk/:id"
                element={<DetailProduk />}
              />

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
