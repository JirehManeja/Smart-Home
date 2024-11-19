import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentSection from './components/ContentSection';
import ExtraContent from './components/ExtraContent';

function LandingPage(){
    return(
        <div className="landing-page">
            <Header />
            <ContentSection
                title="Your Home, Your Rules"
                subtitle="Effortless Control at Your Fingertips"
                description="Streamline Your Smart Home Experience with One Powerful App. Manage, Automate, and Monitor - Anytime, Anywhere."
                imageSrc="./src/assets/img1.png"
            />
            <ContentSection
                title="Customize your comfort with Presets"
                subtitle="Single Tap Automation"
                description="Create personalized presets to control multiple devices with a single tap. Set the mood, automate routines, and enjoy effortless living - your home, your way."
                imageSrc="./src/assets/img2.png"
                isReversed={true}
                backgroundColor='#03202D'
            />
            <ContentSection
                title="Control Multiple Homes with Ease"
                subtitle="Centralized Home Management"
                description="Manage all your homes each with its own devices and personalized presets. Stay connected and in control of every space effortlessly."
                imageSrc="./src/assets/img3.png"
            />
            <ContentSection
                title="Share Control, Stay Connected"
                subtitle="Manage who can access and control each home"
                description="As the main owner, you can give family members, relatives, or trusted individuals access to devices and presets - all on your terms."
                imageSrc="./src/assets/img4.png"
                isReversed={true}
                backgroundColor='#03202D'
            />
            <ExtraContent />
            <Footer />
        </div>
    )
}

export default LandingPage