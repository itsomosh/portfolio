import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { CaseStudies } from "@/components/CaseStudies";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;