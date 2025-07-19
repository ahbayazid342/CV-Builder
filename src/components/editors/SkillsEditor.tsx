import { Plus, Trash2 } from 'lucide-react';
import type { Skill } from '../../types/cv';

interface SkillsEditorProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsEditor({ skills, onChange }: SkillsEditorProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Beginner'
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    onChange(
      skills.map(skill =>
        skill.id === id
          ? { ...skill, [field]: value }
          : skill
      )
    );
  };

  const deleteSkill = (id: string) => {
    onChange(skills.filter(skill => skill.id !== id));
  };

  const skillLevels: Skill['level'][] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="editor-section">
      <div className="section-header">
        <h3 className="section-title">Skills</h3>
        <button 
          type="button" 
          onClick={addSkill}
          className="add-button"
          title="Add Skill"
        >
          <Plus size={16} />
          Add Skill
        </button>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <div className="form-group skill-name">
              <label htmlFor={`skill-name-${skill.id}`}>Skill Name</label>
              <input
                id={`skill-name-${skill.id}`}
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                placeholder="e.g., JavaScript, React, Python"
                required
              />
            </div>

            <div className="form-group skill-level">
              <label htmlFor={`skill-level-${skill.id}`}>Level</label>
              <select
                id={`skill-level-${skill.id}`}
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value as Skill['level'])}
                required
              >
                {skillLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => deleteSkill(skill.id)}
              className="delete-button"
              title="Delete Skill"
              disabled={skills.length === 1}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {skills.length === 0 && (
        <div className="empty-state">
          <p>No skills added yet. Click "Add Skill" to get started.</p>
        </div>
      )}
    </div>
  );
}
