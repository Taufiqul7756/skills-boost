import AboutUs from "@/components/AboutUs";
import CertificationsSection from "@/components/CertificationsSection";
import FindUs from "@/components/FindUs";
import Hero from "@/components/Hero";
import JoinCodersSection from "@/components/JoinCodersSection";
import LeadingExperts from "@/components/LeadingExperts";
import PopularCourses from "@/components/PopularCourses";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <PopularCourses />
      <LeadingExperts />
      <TopCategories />
      <JoinCodersSection />
      <CertificationsSection />
      <AboutUs />
      <FindUs />
    </main>
  );
}
