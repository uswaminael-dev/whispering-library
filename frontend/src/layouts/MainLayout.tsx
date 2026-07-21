import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#111315] text-[#FAF7F2]">
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}