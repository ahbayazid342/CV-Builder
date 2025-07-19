import { Plus, Trash2 } from 'lucide-react';
import type { Experience } from '../../types/cv';

interface ExperienceEditorProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

export function ExperienceEditor({ experience, onChange }: ExperienceEditorProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      isCurrentRole: false,
      description: ''
    };
    onChange([...experience, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(
      experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const deleteExperience = (id: string) => {
    onChange(experience.filter(exp => exp.id !== id));
  };

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-title">Professional Experience</h3>
        <button onClick={addExperience} className="add-button">
          <Plus size={16} />
          Add Experience
        </button>
      </div>

      <div className="experience-list">
        {experience.map((exp, index) => (
          <div key={exp.id} className="experience-form">
            <div className="form-header">
              <h4>Experience {index + 1}</h4>
              <button 
                onClick={() => deleteExperience(exp.id)}
                className="delete-button"
                title="Delete Experience"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Company *</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  placeholder="Company Name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Position *</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                  placeholder="Job Title"
                  required
                />
              </div>

              <div className="form-group">
                <label>Start Date *</label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                  disabled={exp.isCurrentRole}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={exp.isCurrentRole}
                  onChange={(e) => {
                    updateExperience(exp.id, 'isCurrentRole', e.target.checked);
                    if (e.target.checked) {
                      updateExperience(exp.id, 'endDate', '');
                    }
                  }}
                />
                <span className="checkmark"></span>
                Currently working here
              </label>
            </div>

            <div className="form-group full-width">
              <label>Job Description *</label>
              <textarea
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                placeholder="Describe your responsibilities, achievements, and key contributions..."
                rows={3}
                required
              />
            </div>
          </div>
        ))}

        {experience.length === 0 && (
          <div className="empty-state">
            <p>No experience added yet. Click "Add Experience" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
