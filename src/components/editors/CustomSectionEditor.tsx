import { useState } from 'react';
import { Plus, Trash2, Edit2, FolderOpen, Award, Users, Book, Globe, Briefcase, Settings, Heart } from 'lucide-react';
import type { CustomSection, CustomSectionItem } from '../../types/cv';

interface CustomSectionEditorProps {
  customSections: CustomSection[];
  onChange: (customSections: CustomSection[]) => void;
}

const availableIcons = [
  { name: 'FolderOpen', icon: FolderOpen, label: 'Projects' },
  { name: 'Award', icon: Award, label: 'Awards' },
  { name: 'Users', icon: Users, label: 'Leadership' },
  { name: 'Book', icon: Book, label: 'Publications' },
  { name: 'Globe', icon: Globe, label: 'Languages' },
  { name: 'Briefcase', icon: Briefcase, label: 'Internships' },
  { name: 'Settings', icon: Settings, label: 'Technical' },
  { name: 'Heart', icon: Heart, label: 'Volunteer' },
];

export function CustomSectionEditor({ customSections, onChange }: CustomSectionEditorProps) {
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [newSectionName, setNewSectionName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('FolderOpen');

  const handleAddSection = () => {
    if (newSectionName.trim()) {
      const newSection: CustomSection = {
        id: Date.now().toString(),
        name: newSectionName.trim(),
        icon: selectedIcon,
        items: []
      };
      onChange([...customSections, newSection]);
      setNewSectionName('');
      setSelectedIcon('FolderOpen');
    }
  };

  const handleDeleteSection = (sectionId: string) => {
    onChange(customSections.filter(section => section.id !== sectionId));
  };

  const handleUpdateSectionName = (sectionId: string, name: string) => {
    onChange(customSections.map(section => 
      section.id === sectionId ? { ...section, name } : section
    ));
  };

  const handleUpdateSectionIcon = (sectionId: string, icon: string) => {
    onChange(customSections.map(section => 
      section.id === sectionId ? { ...section, icon } : section
    ));
  };

  const handleAddItem = (sectionId: string) => {
    const newItem: CustomSectionItem = {
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      description: '',
      date: ''
    };
    onChange(customSections.map(section => 
      section.id === sectionId 
        ? { ...section, items: [...section.items, newItem] }
        : section
    ));
  };

  const handleDeleteItem = (sectionId: string, itemId: string) => {
    onChange(customSections.map(section => 
      section.id === sectionId 
        ? { ...section, items: section.items.filter(item => item.id !== itemId) }
        : section
    ));
  };

  const handleUpdateItem = (sectionId: string, itemId: string, field: keyof CustomSectionItem, value: string) => {
    onChange(customSections.map(section => 
      section.id === sectionId 
        ? {
            ...section, 
            items: section.items.map(item => 
              item.id === itemId ? { ...item, [field]: value } : item
            )
          }
        : section
    ));
  };

  return (
    <div className="editor-section">
      <div className="section-intro">
        <h3>Custom Sections</h3>
        <p className="section-description">
          Add personalized sections to showcase unique aspects of your experience, 
          such as projects, certifications, languages, or volunteer work.
        </p>
      </div>
      
      {/* Existing Custom Sections */}
      <div className="custom-sections-list">
        {customSections.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <h4>No custom sections yet</h4>
            <p>Create your first custom section below to add unique content to your CV!</p>
          </div>
        ) : (
          customSections.map((section) => {
            const IconComponent = availableIcons.find(icon => icon.name === section.icon)?.icon || FolderOpen;
          
            return (
              <div key={section.id} className="custom-section-item">
              <div className="section-header">
                <div className="section-title-row">
                  <div className="section-icon-selector">
                    <IconComponent size={20} />
                    <select
                      value={section.icon}
                      onChange={(e) => handleUpdateSectionIcon(section.id, e.target.value)}
                      className="icon-select"
                    >
                      {availableIcons.map(icon => (
                        <option key={icon.name} value={icon.name}>
                          {icon.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {editingSection === section.id ? (
                    <input
                      type="text"
                      value={section.name}
                      onChange={(e) => handleUpdateSectionName(section.id, e.target.value)}
                      onBlur={() => setEditingSection(null)}
                      onKeyDown={(e) => e.key === 'Enter' && setEditingSection(null)}
                      autoFocus
                      className="section-name-input"
                    />
                  ) : (
                    <h4 
                      className="section-name"
                      onClick={() => setEditingSection(section.id)}
                    >
                      {section.name}
                      <Edit2 size={14} className="edit-icon" />
                    </h4>
                  )}
                </div>
                
                <button
                  type="button"
                  onClick={() => handleDeleteSection(section.id)}
                  className="delete-button"
                  title="Delete section"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Section Items */}
              <div className="section-items">
                {section.items.map((item) => (
                  <div key={item.id} className="section-item">
                    <div className="form-row">
                      <div className="form-group flex-1">
                        <label>Title *</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateItem(section.id, item.id, 'title', e.target.value)}
                          placeholder="Item title..."
                        />
                      </div>
                      <div className="form-group flex-1">
                        <label>Subtitle</label>
                        <input
                          type="text"
                          value={item.subtitle || ''}
                          onChange={(e) => handleUpdateItem(section.id, item.id, 'subtitle', e.target.value)}
                          placeholder="Optional subtitle..."
                        />
                      </div>
                      <div className="form-group">
                        <label>Date</label>
                        <input
                          type="text"
                          value={item.date || ''}
                          onChange={(e) => handleUpdateItem(section.id, item.id, 'date', e.target.value)}
                          placeholder="2024"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem(section.id, item.id)}
                        className="delete-button"
                        title="Delete item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        value={item.description || ''}
                        onChange={(e) => handleUpdateItem(section.id, item.id, 'description', e.target.value)}
                        placeholder="Describe this item..."
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={() => handleAddItem(section.id)}
                  className="add-item-button"
                >
                  <Plus size={16} />
                  Add New Item
                </button>
              </div>
            </div>
          );
        })
        )}
      </div>

      {/* Add New Section */}
      <div className="add-section-form">
        <h4>Create New Section</h4>
        <div className="form-row">
          <div className="form-group">
            <label>Section Name</label>
            <input
              type="text"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
              placeholder="e.g., Projects, Certifications, Languages, Volunteer Work..."
            />
          </div>
          <div className="form-group">
            <label>Icon</label>
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
            >
              {availableIcons.map(icon => (
                <option key={icon.name} value={icon.name}>
                  {icon.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleAddSection}
            className="add-button"
            disabled={!newSectionName.trim()}
          >
            <Plus size={16} />
            Create Section
          </button>
        </div>
      </div>
    </div>
  );
}
