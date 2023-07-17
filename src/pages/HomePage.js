import AboutSection from "../Components/aboutSection/AboutSection";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import MainCard from "../Components/mainCard/MainCard";
import Navbar from "../Components/navbar/Navbar";
import TrickSection from "../Components/trickSection/TrickSection";
import Discount from "../Components/discount/Discount";
import NewArrivals from "../Components/newArrivals/newArrivals";
import NewsLetter from "../Components/newsLetter/newsLetter"


import cardImg from '../assets/img/category1-img.png'
import cardImg2 from "../assets/img/category2-img.png"
import cardImg3 from "../assets/img/category3-img.png"

function HomePage(props) {
    return (
        <div>
            <Navbar />
            <Header />


            <section className="section category">
                <h2 className="section__title">{props.text} <br /> Category</h2>

                <div className="category__container container grid">

                    <MainCard src={cardImg} title="Ghosts" description="Choose the ghosts, the scariest there are." />
                    <MainCard src={cardImg2} title="Pumpkins" description="You look at the scariest pumpkins there is." />
                    <MainCard src={cardImg3} title="Witch Hat" description="Pick the most stylish witch hats out there." />
                </div>
            </section>

            <AboutSection />

            <TrickSection newText={props.text} />
            
            <Discount/>

            <NewArrivals/>
            
            <NewsLetter/>

            <Footer />

        </div>
    )
}

export default HomePage