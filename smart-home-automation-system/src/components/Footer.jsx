import './styles/Footer.css';

function Footer(){
    return(
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>

            <p className="footer-text">
                &copy; 2024. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer