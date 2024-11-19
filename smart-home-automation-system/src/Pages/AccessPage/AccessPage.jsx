import PageContainer from './components/PageContainer';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import './AccessPage.css';

function AccessPage() {
    return (
        <div className="access-page-wrapper">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <PageContainer />
            <Footer />
        </div>
    )
}

export default AccessPage;
