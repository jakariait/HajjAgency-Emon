import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager"; // client component

import {
  getHomePageTitle,
  getHomePageDescription,
} from "@/utils/brand";

export const metadata = {
  title: getHomePageTitle(),
  description: getHomePageDescription(),
};

export default function PublicLayout({ children }) {
  return (
    <>
      <GoogleTagManager /> {/* GTM handled in client component */}
      <Header />
      {children}
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
