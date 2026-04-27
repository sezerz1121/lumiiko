
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import About from './sections/About'
import WhyChooseUs from './sections/WhyChooseUs'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import CtaSection from './sections/CtaSection'
import Contact from './sections/Contact'


export default function App() {
    return (
        <>

            <Navbar />
            <main>
                <Hero />

                <Services />
                <Projects />
                <About />
                <WhyChooseUs />
                <Process />
                {/* <Testimonials /> */}
                <CtaSection />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
