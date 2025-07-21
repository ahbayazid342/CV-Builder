import { useState, useRef, useEffect } from 'react';
import { User, Briefcase, GraduationCap, Star, Palette, Trophy, Plus } from 'lucide-react';
import type { CVData, CVTheme } from '../types/cv';
import { ExperienceEditor } from './editors/ExperienceEditor';
import { SkillsEditor } from './editors/SkillsEditor';
import { EducationEditor } from './editors/EducationEditor';
import { PersonalInfoEditor } from './editors/PersonalInfoEditor';
import { BiodataPersonalInfoEditor } from './editors/BiodataPersonalInfoEditor';
import { ThemeEditor } from './editors/ThemeEditor';
import { AchievementsEditor } from './editors/AchievementsEditor';
import { CustomSectionEditor } from './editors/CustomSectionEditor';

interface CVEditorProps {
  cvData: CVData;
  theme: CVTheme;
  onDataChange: (newData: CVData) => void;
  onThemeChange: (newTheme: CVTheme) => void;
}

type EditorTab = 'personal' | 'experience' | 'education' | 'skills' | 'achievements' | 'custom' | 'theme';

export function CVEditor({ cvData, theme, onDataChange, onThemeChange }: CVEditorProps) {
  const [activeTab, setActiveTab] = useState<EditorTab>('personal');
  const tabsRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    const activeButton = tabsRef.current?.querySelector('.tab-button.active') as HTMLElement;
    if (activeButton && tabsRef.current) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);

  const tabs = [
    { id: 'personal' as const, label: 'Personal Info', icon: User },
    ...(theme.template !== 'biodata' ? [
      { id: 'experience' as const, label: 'Experience', icon: Briefcase },
    ] : []),
    { id: 'education' as const, label: 'Education', icon: GraduationCap },
    ...(theme.template !== 'biodata' ? [
      { id: 'skills' as const, label: 'Skills', icon: Star },
      { id: 'achievements' as const, label: 'Achievements', icon: Trophy },
      { id: 'custom' as const, label: 'Custom Sections', icon: Plus },
    ] : []),
    { id: 'theme' as const, label: 'Theme', icon: Palette },
  ];

  const renderActiveEditor = () => {
    switch (activeTab) {
      case 'personal':
        // Use BiodataPersonalInfoEditor for biodata template
        if (theme.template === 'biodata') {
          return (
            <BiodataPersonalInfoEditor
              personalInfo={cvData.personalInfo}
              onChange={(personalInfo) => onDataChange({ ...cvData, personalInfo })}
            />
          );
        }
        return (
          <PersonalInfoEditor
            personalInfo={cvData.personalInfo}
            onChange={(personalInfo) => onDataChange({ ...cvData, personalInfo })}
          />
        );
      case 'experience':
        return (
          <ExperienceEditor
            experience={cvData.experience}
            onChange={(experience) => onDataChange({ ...cvData, experience })}
          />
        );
      case 'education':
        return (
          <EducationEditor
            education={cvData.education}
            onChange={(education) => onDataChange({ ...cvData, education })}
          />
        );
      case 'skills':
        return (
          <SkillsEditor
            skills={cvData.skills}
            onChange={(skills) => onDataChange({ ...cvData, skills })}
          />
        );
      case 'achievements':
        return (
          <AchievementsEditor
            achievements={cvData.achievements}
            onChange={(achievements) => onDataChange({ ...cvData, achievements })}
          />
        );
      case 'custom':
        return (
          <CustomSectionEditor
            customSections={cvData.customSections}
            onChange={(customSections) => onDataChange({ ...cvData, customSections })}
          />
        );
      case 'theme':
        return (
          <ThemeEditor
            theme={theme}
            onChange={onThemeChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="cv-editor">
      <div className="editor-tabs" ref={tabsRef}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="editor-content">
        <div className="editor-section-header">
          <h2 className="active-section-title">
            {tabs.find(tab => tab.id === activeTab)?.label}
          </h2>
        </div>
        {renderActiveEditor()}
      </div>
    </div>
  );
}
