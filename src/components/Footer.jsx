function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#" className="footer-logo">Anveet Pal</a>
                    <div className="footer-links">
                        {quickLinks.map(link => (
                            <a key={link.name} href={link.href}>{link.name}</a>
                        ))}
                    </div>
                    <p className="footer-copyright">
                        © {currentYear} Anveet Pal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
