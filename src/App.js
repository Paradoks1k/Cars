import { Choose } from "./component/Choose/Choose";
import { Wraper } from "./component/Wraper";
import { ContactUs } from "./component/contact-us";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { Important } from "./component/important";
import { MainSection } from "./component/main-section";
import { SectionWhyLease } from "./component/sectionWhyLease";
import { VideoSection } from "./component/video";

function App() {
  return (
    <div className="bg-cyan-900">
      <Wraper>
        <Header />
        <MainSection />
        <SectionWhyLease />
        <VideoSection />
        <Important />
        <Choose />
        <ContactUs />
        <Footer />
      </Wraper>
    </div>
  );
}

export default App;
