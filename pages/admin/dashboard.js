import React from "react";
import Header from "../../Components/Navigation/Admin/Header";
import Sidebar from "../../Components/Navigation/Admin/Sidebar";
import TopCards from "../../Components/Navigation/Admin/Topcards";
import Barchart from "../../Components/Navigation/Admin/Barchart";
import Recent from "../../Components/Navigation/Admin/Recent";

function Dashboard() {
  return (
    <main className="bg-gray-100 min-h-screen w-full">
      <Sidebar />
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <Barchart />
        <Recent />
      </div>
    </main>
  );
}

export default Dashboard;
