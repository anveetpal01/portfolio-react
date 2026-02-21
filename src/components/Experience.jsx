function Experience() {
    const experiences = [
        {
            role: "Python Developer Trainee",
            company: "MiraiGate Technologies",
            date: "Feb 2026 - Present",
            description: [
                "WILL ADD SOON..."
            ],
            tags: ["Python", "Selenium", "Pandas", "Power BI", "Data Analysis"]
        },
        {
            role: "Junior Consultant Intern",
            company: "Hosho Digital",
            date: "July 2025 - Nov 2025",
            description: [
                "Worked on backend and data engineering tasks of a real world project, including APIs, managing databases and developing data pipelines with Fabric, Python and .NET.",
                "Assisted with general software development projects and performed data engineering and analysis using tools like Microsoft Fabric, Lakehouse, Warehouse, Seaborn, Power BI and Pandas.",
                "Utilized the Microsoft Power Platform for data modeling, ensuring data integrity and validation rules were correctly implemented."
            ],
            tags: [".NET", "Python", "Microsoft Fabric", "Power BI", "Pandas", "SQL"]
        },
        {
            role: "Python-ML Intern",
            company: "Alveofit (Roundwork Technologies)",
            date: "Feb 2025 - March 2025",
            description: [
                "Worked on gathering medical data and trained machine learning models.",
                "Built a two-stage XGBoost pipeline to predict asthma severity and recommend treatments using patient symptoms and disease parameters.",
                "Developed a Flask REST API integrating both models for real-time predictions, with robust validation and error handling."
            ],
            tags: ["Python", "XGBoost", "Flask", "Machine Learning", "REST API"]
        },
        {
            role: "Data Analyst Intern",
            company: "Evoastra Ventures",
            date: "Jan 2023 - Feb 2023",
            description: [
                "Developed Test Automation Scripts using Python and Selenium to scrape and validate data from dynamic websites.",
                "Performed data quality checks on extracted datasets using Pandas, identifying and fixing inconsistencies in CSV outputs.",
                "Visualized data trends using Power BI to report data quality metrics to stakeholders."
            ],
            tags: ["Python", "Selenium", "Pandas", "Power BI", "Data Analysis"]
        }

    ]

    return (
        <section id="experience">
            <div className="container">
                <div className="section-header">
                    <h2>Work Experience</h2>
                    <p>My professional journey and the impact I've made</p>
                </div>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-dot"></div>
                            <div className="glass-card experience-card">
                                <div className="experience-header">
                                    <div>
                                        <div className="experience-role">{exp.role}</div>
                                        <div className="experience-company">{exp.company}</div>
                                    </div>
                                    <span className="experience-date">{exp.date}</span>
                                </div>
                                <ul className="experience-list">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="experience-tags">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
