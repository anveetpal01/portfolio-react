function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: "💻",
            skills: ["Python", "C", "C#", "SQL", "HTML"]
        },
        {
            title: "Web Development",
            icon: "🌐",
            skills: ["FastAPI", "Django", ".NET", "Flask", "Streamlit"]
        },
        {
            title: "Databases",
            icon: "🗄️",
            skills: ["MySQL", "MSSQL", "Lakehouse", "Warehouse"]
        },
        {
            title: "Development Tools",
            icon: "🛠️",
            skills: ["Git", "GitHub", "VS Code", "Visual Studio", "PyCharm", "Postman"]
        },
        {
            title: "Data & Analytics",
            icon: "📈",
            skills: ["Power BI", "Pandas", "Seaborn", "Microsoft Fabric", "ETL"]
        },
        {
            title: "Machine Learning",
            icon: "🤖",
            skills: ["XGBoost", "Scikit-learn", "EDA", "Model Deployment"]
        }
    ]

    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Technical Skills</h2>
                    <p>Technologies and tools I work with</p>
                </div>
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass-card skill-category">
                            <h3>
                                <span className="skill-category-icon">{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="skill-list">
                                {category.skills.map(skill => (
                                    <span key={skill} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
