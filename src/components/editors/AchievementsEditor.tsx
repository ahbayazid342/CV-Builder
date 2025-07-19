import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import type { Achievement } from '../../types/cv';

interface AchievementsEditorProps {
  achievements: Achievement[];
  onChange: (achievements: Achievement[]) => void;
}

export function AchievementsEditor({ achievements, onChange }: AchievementsEditorProps) {
  const [newAchievement, setNewAchievement] = useState('');

  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      const achievement: Achievement = {
        id: Date.now().toString(),
        title: newAchievement.trim()
      };
      onChange([...achievements, achievement]);
      setNewAchievement('');
    }
  };

  const handleDeleteAchievement = (id: string) => {
    onChange(achievements.filter(achievement => achievement.id !== id));
  };

  const handleUpdateAchievement = (id: string, title: string) => {
    onChange(achievements.map(achievement => 
      achievement.id === id ? { ...achievement, title } : achievement
    ));
  };

  return (
    <div className="editor-section">
      <h3>Achievements</h3>
      
      <div className="achievements-list">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-item">
            <div className="form-row">
              <div className="form-group flex-1">
                <textarea
                  value={achievement.title}
                  onChange={(e) => handleUpdateAchievement(achievement.id, e.target.value)}
                  placeholder="Describe your achievement..."
                  rows={2}
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteAchievement(achievement.id)}
                className="delete-button"
                title="Delete achievement"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="add-item-section">
        <div className="form-group">
          <textarea
            value={newAchievement}
            onChange={(e) => setNewAchievement(e.target.value)}
            placeholder="Add a new achievement..."
            rows={2}
          />
        </div>
        <button
          type="button"
          onClick={handleAddAchievement}
          className="add-button"
          disabled={!newAchievement.trim()}
        >
          <Plus size={16} />
          Add Achievement
        </button>
      </div>
    </div>
  );
}
