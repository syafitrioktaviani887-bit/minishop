import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProdukCard from "../components/ProdukCard";

describe("ProdukCard", () => {
  const dummyProduk = { id: 1, nama: "Kaos Polos", harga: 75000 };

  it("menampilkan nama produk dengan benar", () => {
    render(
      <MemoryRouter>
        <ProdukCard produk={dummyProduk} />
      </MemoryRouter>
    );

    expect(screen.getByText("Kaos Polos")).toBeInTheDocument();
  });

  it("menampilkan harga produk dengan benar", () => {
    render(
      <MemoryRouter>
        <ProdukCard produk={dummyProduk} />
      </MemoryRouter>
    );

    expect(screen.getByText(/75\.000/)).toBeInTheDocument();
  });
});

