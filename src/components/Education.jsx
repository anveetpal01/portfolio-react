function Education() {
    const certifications = [
        {
            title: "Microsoft Power BI",
            description: "Advanced Analytics, Business Intelligence, Data Visualization",
            icon: "📊"
        },
        {
            title: "Alteryx Certification",
            description: "ETL, Data Analytics, Problem Solving",
            icon: "⚙️"
        },
        {
            title: "Figma UI/UX",
            description: "Web Designing, User Experience",
            icon: "🎨"
        }
    ]

    return (
        <section id="education">
            <div className="container">
                <div className="section-header">
                    <h2>Education & Certifications</h2>
                    <p>My academic background and professional credentials</p>
                </div>
                <div className="education-container">
                    <div className="gradient-border-card education-card">
                        <div className="education-icon">🎓</div>
                        <h3>Bachelor of Technology</h3>
                        <p className="institution">Computer Science and Engineering</p>
                        <p className="institution">Medicaps University</p>
                        <p className="date">Aug 2021 - June 2025</p>
                    </div>
                    <div className="glass-card" style={{ padding: '32px' }}>
                        <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Certifications</h3>
                        <div className="certifications-list">
                            {certifications.map((cert, index) => (
                                <div key={index} className="certification-item">
                                    <div className="certification-icon">{cert.icon}</div>
                                    <div className="certification-text">
                                        <h4>{cert.title}</h4>
                                        <p>{cert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
