import { Wraper } from "./component/Wraper";
import { Footer } from "./component/footer";
import { Header } from "./component/header";

function App() {
  return (
    <div className="bg-cyan-900">
      <Wraper>
        <Header />
        <Footer />
      </Wraper>
    </div>
  );
}

export default App;
