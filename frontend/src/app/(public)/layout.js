import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager"; // client component

import {
  getHomePageTitle,
  getHomePageDescription,
} from "@/utils/brand";
import TopHeader from "@/components/TopHeader";

export const metadata = {
  title: getHomePageTitle(),
  description: getHomePageDescription(),
};

export default function PublicLayout({ children }) {
  return (
    <>
      <GoogleTagManager /> {/* GTM handled in client component */}
      <TopHeader />
      <Header />
      {children}
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
