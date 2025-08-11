import { ProgressBar } from "@/components/ui/progress-bar";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col smooth-scroll">
    {/*   <ProgressBar /> */}
      {/*     <ReadingProgress /> */}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
