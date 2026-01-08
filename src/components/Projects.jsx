function Projects() {
    const projects = [
        {
            title: "Secure Multi-User Task Management System",
            description: "A full-stack task management application with secure authentication, automated testing, and cloud deployment. Features JWT authentication, password hashing, and a clean Streamlit UI.",
            tags: ["Python", "FastAPI", "Streamlit", "SQL", "JWT", "Pytest"],
            link: "https://python-todo-app.streamlit.app",
            icon: "📋"
        },
        {
            title: "Power BI Dashboards",
            description: "Designed and developed interactive dashboards for diverse datasets, enabling data-driven insights and decision-making. Used advanced visualization techniques and data transformation methods.",
            tags: ["Power BI", "Data Analytics", "Python", "Pandas", "PowerFX"],
            link: null,
            icon: "📊"
        },
        {
            title: "Disease Prediction System",
            description: "A Flask API that predicts asthma severity and treatment recommendations using a two-stage XGBoost model pipeline. Includes feature encoding, model inference, and comprehensive error handling.",
            tags: ["Python", "Flask", "XGBoost", "Machine Learning", "ETL"],
            link: null,
            icon: "🏥"
        }
    ]

    return (
        <section id="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p>Some of the projects I've built and contributed to</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="gradient-border-card project-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View Live Demo
                                    <span>→</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
