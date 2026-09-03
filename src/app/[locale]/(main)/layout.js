import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
