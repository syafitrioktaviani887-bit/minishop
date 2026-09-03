import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { KeranjangProvider } from "../context/KeranjangContext";

describe("KeranjangContext", () => {
  it("dapat merender children dari KeranjangProvider", () => {
    render(
      <KeranjangProvider>
        <div>Test Child Keranjang</div>
      </KeranjangProvider>
    );
    expect(screen.getByText("Test Child Keranjang")).toBeInTheDocument();
  });
});
