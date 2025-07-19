import { Plus, Trash2 } from 'lucide-react';
import type { Education } from '../../types/cv';

interface EducationEditorProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

export function EducationEditor({ education, onChange }: EducationEditorProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      isCurrentlyStudying: false
    };
    onChange([...education, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    onChange(
      education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const deleteEducation = (id: string) => {
    onChange(education.filter(edu => edu.id !== id));
  };

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-title">Education</h3>
        <button onClick={addEducation} className="add-button">
          <Plus size={16} />
          Add Education
        </button>
      </div>

      <div className="education-list">
        {education.map((edu, index) => (
          <div key={edu.id} className="education-form">
            <div className="form-header">
              <h4>Education {index + 1}</h4>
              <button 
                onClick={() => deleteEducation(edu.id)}
                className="delete-button"
                title="Delete Education"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Institution *</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                  placeholder="University/School Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Degree *</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                  placeholder="Bachelor of Science, Master of Arts, etc."
                  required
                />
              </div>

              <div className="form-group">
                <label>Field of Study *</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                  placeholder="Computer Science, Business Administration, etc."
                  required
                />
              </div>

              <div className="form-group">
                <label>GPA</label>
                <input
                  type="text"
                  value={edu.gpa || ''}
                  onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                  placeholder="3.8, 4.0, etc."
                />
              </div>

              <div className="form-group">
                <label>Start Date *</label>
                <input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  value={edu.endDate}
                  onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                  disabled={edu.isCurrentlyStudying}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={edu.isCurrentlyStudying}
                  onChange={(e) => {
                    updateEducation(edu.id, 'isCurrentlyStudying', e.target.checked);
                    if (e.target.checked) {
                      updateEducation(edu.id, 'endDate', '');
                    }
                  }}
                />
                <span className="checkmark"></span>
                Currently studying here
              </label>
            </div>
          </div>
        ))}

        {education.length === 0 && (
          <div className="empty-state">
            <p>No education added yet. Click "Add Education" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
