import Header from "@/common/Header";
import Footer from "@/common/Footer";
import HeroPage from "@/components/HeroPage";
import TabCard from "@/components/TabCard";
import HowItConnect from "@/components/HowItConnect";
import QulifiedLead from "@/components/QulifiedLead";
import CaseStudy from "@/components/CaseStudy";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroPage />
        <TabCard />
        <HowItConnect />
        <QulifiedLead />
        <CaseStudy />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
