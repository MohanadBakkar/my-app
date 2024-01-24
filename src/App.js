import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from "./components/CustomCard";
const App = () => {
    return <>
        <NavBar />
        <HeroSection />
        <CustomCard />
        <CustomCard />
        <CustomCard />
    </>
}

export default App;
