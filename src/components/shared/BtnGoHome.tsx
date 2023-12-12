'use client';
import Link from "next/link";

export const BtnGoHome = () => {
  return(
    <Link
        href="/"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring"
      >
        Regresar
    </Link>
  );
}