import AdvertisingSection from "@/components/home/AdvertisingSection";
import CategorySections from "@/components/home/CategorySections";
import FlashNews from "@/components/home/FlashNews";
import HeroSection from "@/components/home/HeroSection";
import LibraryPreview from "@/components/home/LibraryPreview";
import Sidebar from "@/components/home/Sidebar";
import Layout from "@/components/layout/Layout";
import { Analytics } from "@/components/ui/analytics";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { OfflineIndicator } from "@/components/ui/offline-indicator";

export default function Home() {
  return (
    <Layout>
      <Analytics pageTitle="Accueil" />
      <FlashNews />
      <HeroSection />

      <div className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <CategorySections />
              <AdvertisingSection />
            </div>
            <aside className="lg:col-span-1">
              <Sidebar />
            </aside>
          </div>
        </div>
      </div>

      <LibraryPreview />

      <CookieBanner />
      <OfflineIndicator />
    </Layout>
  );
}
