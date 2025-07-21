import type { CVData, CVTheme } from '../../types/cv';

interface TemplateProps {
  cvData: CVData;
  theme: CVTheme;
}

export function ModernTemplate({ cvData, theme }: TemplateProps) {
  // This is the current layout we already have (sidebar + main content)
  return null; // We'll use the existing CVPreview for this
}

export function ClassicTemplate({ cvData, theme }: TemplateProps) {
  const { personalInfo, experience, education, skills, achievements, customSections } = cvData;
  
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div 
      className="cv-preview classic-template"
      style={{
        fontFamily: theme.fontFamily,
        fontSize: `${theme.fontSize}px`,
        '--primary-color': theme.primaryColor,
        '--secondary-color': theme.secondaryColor,
        '--accent-color': theme.accentColor
      } as React.CSSProperties}
    >
      {/* Header */}
      <div className="classic-header">
        <h1 className="classic-name">{personalInfo.fullName}</h1>
        <div className="classic-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="classic-section">
          <h2 className="classic-section-title">PROFESSIONAL SUMMARY</h2>
          <p className="classic-summary">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="classic-section">
          <h2 className="classic-section-title">EXPERIENCE</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="classic-item">
              <div className="classic-item-header">
                <h3 className="classic-position">{exp.position}</h3>
                <span className="classic-dates">
                  {formatDate(exp.startDate)} - {exp.isCurrentRole ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <h4 className="classic-company">{exp.company}</h4>
              <p className="classic-description">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="classic-section">
          <h2 className="classic-section-title">EDUCATION</h2>
          {education.map((edu) => (
            <div key={edu.id} className="classic-item">
              <div className="classic-item-header">
                <h3 className="classic-degree">{edu.degree}</h3>
                <span className="classic-dates">
                  {formatDate(edu.startDate)} - {edu.isCurrentlyStudying ? 'Present' : formatDate(edu.endDate)}
                </span>
              </div>
              <h4 className="classic-institution">{edu.institution}</h4>
              {edu.gpa && <p className="classic-gpa">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="classic-section">
          <h2 className="classic-section-title">SKILLS</h2>
          <div className="classic-skills">
            {skills.map((skill) => (
              <span key={skill.id} className="classic-skill">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map((section) => {
        if (section.items.length === 0) return null;
        
        return (
          <section key={section.id} className="classic-section">
            <h2 className="classic-section-title">{section.name.toUpperCase()}</h2>
            {section.items.map((item) => (
              <div key={item.id} className="classic-item">
                <div className="classic-item-header">
                  <h3 className="classic-item-title">{item.title}</h3>
                  {item.date && <span className="classic-dates">{item.date}</span>}
                </div>
                {item.subtitle && <h4 className="classic-subtitle">{item.subtitle}</h4>}
                {item.description && <p className="classic-description">{item.description}</p>}
              </div>
            ))}
          </section>
        );
      })}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="classic-section">
          <h2 className="classic-section-title">ACHIEVEMENTS</h2>
          <ul className="classic-achievements">
            {achievements.map((achievement) => (
              <li key={achievement.id}>{achievement.title}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
