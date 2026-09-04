// built in imports
import { useEffect } from "react";
import Lenis from "lenis";

// component imports
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <AppRoutes />;
}

export default App;
