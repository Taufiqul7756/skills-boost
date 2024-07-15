import AboutUs from "@/components/AboutUs";
import CertificationsSection from "@/components/CertificationsSection";
import FindUs from "@/components/FindUs";
import JoinCodersSection from "@/components/JoinCodersSection";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <main className="">
      <TopCategories />
      <JoinCodersSection />
      <CertificationsSection />
      <AboutUs />
      <FindUs />
    </main>
  );
}
