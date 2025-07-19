import type { CVData, CVTheme } from '../types/cv';
import './CVPreview.css';

interface CVPreviewProps {
  cvData: CVData;
  theme: CVTheme;
}

export function CVPreview({ cvData, theme }: CVPreviewProps) {
  const { personalInfo, experience, education, skills, achievements } = cvData;

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div 
      id="cv-preview" 
      className="cv-preview"
      style={{
        fontFamily: theme.fontFamily,
        fontSize: `${theme.fontSize}px`,
        '--primary-color': theme.primaryColor,
        '--secondary-color': theme.secondaryColor,
        '--accent-color': theme.accentColor
      } as React.CSSProperties}
    >
      {/* Left Sidebar */}
      <div className="cv-sidebar">
        {/* Profile Photo */}
        <div className="profile-photo">
          {personalInfo.profileImage ? (
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.fullName}
              className="profile-image"
            />
          ) : (
            <div className="photo-placeholder">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="sidebar-section">
          <div className="contact-info">
            {personalInfo.location && (
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.email && (
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{personalInfo.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        {skills.length > 0 && (
          <div className="sidebar-section">
            <h3 className="sidebar-title">SKILLS</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <span className="skill-name">• {skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="cv-main">
        {/* Name and Title */}
        <div className="cv-header">
          <h1 className="cv-name">{personalInfo.fullName}</h1>
          {personalInfo.website && (
            <div className="cv-contact-info">
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>

        {/* Summary Section */}
        {personalInfo.summary && (
          <section className="cv-section">
            <h2 className="section-title">
              SUMMARY <span className="title-rename">Rename</span>
            </h2>
            <p className="summary-text">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <section className="cv-section">
            <h2 className="section-title">EXPERIENCE</h2>
            <div className="experience-list">
              {experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="experience-dates">
                    {formatDate(exp.startDate)} - {exp.isCurrentRole ? 'Current' : formatDate(exp.endDate)}
                  </div>
                  <div className="experience-content">
                    <h3 className="position">{exp.position}</h3>
                    <h4 className="company">{exp.company}</h4>
                    <p className="experience-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <section className="cv-section">
            <h2 className="section-title">EDUCATION</h2>
            <div className="education-list">
              {education.map((edu) => (
                <div key={edu.id} className="education-item">
                  <div className="education-dates">
                    {formatDate(edu.startDate)} - {edu.isCurrentlyStudying ? 'Present' : formatDate(edu.endDate)}
                  </div>
                  <div className="education-content">
                    <h3 className="degree">{edu.degree}</h3>
                    <h4 className="institution">{edu.institution}</h4>
                    {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <section className="cv-section">
            <h2 className="section-title">ACHIEVEMENTS</h2>
            <div className="achievements-list">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-item">
                  <span>• {achievement.title}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
