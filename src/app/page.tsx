import AboutUs from "@/components/AboutUs";
import CertificationsSection from "@/components/CertificationsSection";
import FindUs from "@/components/FindUs";
import JoinCodersSection from "@/components/JoinCodersSection";

export default function Home() {
  return (
    <main className="">
      <JoinCodersSection />
      <CertificationsSection />
      <AboutUs />
      <FindUs />
    </main>
  );
}
