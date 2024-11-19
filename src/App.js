import { Wraper } from "./component/Wraper";
import { Footer } from "./component/footer";
import { Header } from "./component/header";
import { MainSection } from "./component/main-section";
import { SectionWhyLease } from "./component/sectionWhyLease";

function App() {
  return (
    <div className="bg-cyan-900">
      <Wraper>
        <Header />
        <MainSection />
        <SectionWhyLease />
        <Footer />
      </Wraper>
    </div>
  );
}

export default App;
