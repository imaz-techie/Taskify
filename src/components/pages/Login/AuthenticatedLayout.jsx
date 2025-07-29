import NavBar from "../../Layout/NavBar";
import SideMenu from "../../Layout/SideMenu";

// layouts/AuthenticatedLayout.js
export default function AuthenticatedLayout({ children }) {
  return (
    <div className="flex flex-row min-h-screen bg-grey">
      <SideMenu />
      <main className="main-width h-full">
        <NavBar />
        <section className="w-full">{children}</section>
      </main>
    </div>
  );
}
