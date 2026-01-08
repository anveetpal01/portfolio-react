import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
        window.location.href = `mailto:anveetpal12@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    }

    return (
        <section id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p>Have a question or want to work together? Let's connect!</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm currently looking for new opportunities and my inbox is always open.
                            Whether you have a question, a project idea, or just want to say hi,
                            I'll try my best to get back to you!
                        </p>
                        <div className="contact-methods">
                            <a href="mailto:anveetpal12@gmail.com" className="contact-method">
                                <div className="contact-method-icon">📧</div>
                                <div className="contact-method-text">
                                    <span>Email</span>
                                    <p>anveetpal12@gmail.com</p>
                                </div>
                            </a>
                            <a href="tel:+918602875539" className="contact-method">
                                <div className="contact-method-icon">📱</div>
                                <div className="contact-method-text">
                                    <span>Phone</span>
                                    <p>+91 8602875539</p>
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/anveet-pal/" target="_blank" rel="noopener noreferrer" className="contact-method">
                                <div className="contact-method-icon">💼</div>
                                <div className="contact-method-text">
                                    <span>LinkedIn</span>
                                    <p>anveet-pal</p>
                                </div>
                            </a>
                            <a href="https://github.com/anveetpal01" target="_blank" rel="noopener noreferrer" className="contact-method">
                                <div className="contact-method-icon">💻</div>
                                <div className="contact-method-text">
                                    <span>GitHub</span>
                                    <p>anveetpal01</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <form className="glass-card contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hi Anveet, I'd like to discuss..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
