import { useRef } from 'react';
import { Upload, X, User } from 'lucide-react';
import type { PersonalInfo } from '../../types/cv';

interface PersonalInfoEditorProps {
  personalInfo: PersonalInfo;
  onChange: (personalInfo: PersonalInfo) => void;
}

export function PersonalInfoEditor({ personalInfo, onChange }: PersonalInfoEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...personalInfo,
      [field]: value
    });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        handleChange('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    handleChange('profileImage', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="editor-section">
      <h3 className="section-title">Personal Information</h3>
      
      {/* Profile Image Upload */}
      <div className="form-group profile-image-section">
        <label>Profile Image</label>
        <div className="image-upload-container">
          {personalInfo.profileImage ? (
            <div className="image-preview">
              <img 
                src={personalInfo.profileImage} 
                alt="Profile" 
                className="profile-image-preview"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="remove-image-btn"
                title="Remove image"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <div className="image-placeholder" onClick={triggerFileInput}>
              <User size={40} />
              <span>Click to upload photo</span>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          {personalInfo.profileImage && (
            <button
              type="button"
              onClick={triggerFileInput}
              className="change-image-btn"
            >
              <Upload size={16} />
              Change Image
            </button>
          )}
        </div>
      </div>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            value={personalInfo.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            id="location"
            type="text"
            value={personalInfo.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="New York, NY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            value={personalInfo.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            id="linkedin"
            type="url"
            value={personalInfo.linkedin || ''}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/username"
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="summary">Professional Summary *</label>
        <textarea
          id="summary"
          value={personalInfo.summary}
          onChange={(e) => handleChange('summary', e.target.value)}
          placeholder="Write a brief summary of your professional background, skills, and career objectives..."
          rows={4}
          required
        />
      </div>
    </div>
  );
}
