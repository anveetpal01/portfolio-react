function About() {
    const highlights = [
        "Backend Development",
        "Machine Learning",
        "Data Engineering",
        "REST APIs",
        "Cloud Deployment"
    ]

    return (
        <section id="about">
            <div className="container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <p>Get to know more about my background and what drives me</p>
                </div>
                <div className="about-content">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <div className="about-image-inner">
                                👨‍💻
                            </div>
                        </div>
                        <div className="about-stats">
                            <div className="glass-card stat-card">
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Internships</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-number">3</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>A Passionate Developer Building Real-World Solutions</h3>
                        <p>
                            I'm a recent Computer Science graduate from Medicaps University with a strong foundation
                            in software development, machine learning, and data engineering. My journey started with
                            curiosity about how technology can solve real problems, and it has evolved into a
                            professional passion.
                        </p>
                        <p>
                            Through my internships at companies like Hosho Digital and Alveofit, I've gained
                            hands-on experience working on production systems, building scalable APIs, and deploying
                            ML models. I thrive in environments where I can learn, collaborate, and contribute to
                            meaningful projects.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, working on personal projects,
                            or expanding my knowledge through certifications and online courses.
                        </p>
                        <div className="about-highlights">
                            {highlights.map(highlight => (
                                <span key={highlight} className="tag">{highlight}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
