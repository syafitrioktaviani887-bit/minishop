import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Auth from "../pages/Auth";

describe("FormLogin", () => {
  it("menampilkan input email dan password", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Auth />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Masukkan email Anda...")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Masukkan Password Email...")
    ).toBeInTheDocument();
  });

  it("bisa mengetik di input email", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Auth />
        </AuthProvider>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText(
      "Masukkan email Anda..."
    );

    fireEvent.change(emailInput, {
      target: {
        value: "user@gmail.com",
      },
    });

    expect(emailInput.value).toBe("user@gmail.com");
  });
});
