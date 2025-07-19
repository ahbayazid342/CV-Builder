import type { CVTheme } from '../../types/cv';

interface ThemeEditorProps {
  theme: CVTheme;
  onChange: (theme: CVTheme) => void;
}

export function ThemeEditor({ theme, onChange }: ThemeEditorProps) {
  const handleChange = (field: keyof CVTheme, value: string | number) => {
    onChange({
      ...theme,
      [field]: value
    });
  };

  const fontOptions = [
    'Inter, system-ui, sans-serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    'Georgia, serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Roboto, sans-serif',
    'Open Sans, sans-serif'
  ];

  const presetThemes = [
    {
      name: 'Professional Blue',
      primaryColor: '#2563eb',
      secondaryColor: '#64748b',
      accentColor: '#0f172a'
    },
    {
      name: 'Modern Green',
      primaryColor: '#059669',
      secondaryColor: '#6b7280',
      accentColor: '#1f2937'
    },
    {
      name: 'Classic Gray',
      primaryColor: '#374151',
      secondaryColor: '#9ca3af',
      accentColor: '#111827'
    },
    {
      name: 'Elegant Purple',
      primaryColor: '#7c3aed',
      secondaryColor: '#64748b',
      accentColor: '#1e1b4b'
    },
    {
      name: 'Creative Orange',
      primaryColor: '#ea580c',
      secondaryColor: '#64748b',
      accentColor: '#1c1917'
    }
  ];

  const applyPresetTheme = (preset: typeof presetThemes[0]) => {
    onChange({
      ...theme,
      name: preset.name,
      primaryColor: preset.primaryColor,
      secondaryColor: preset.secondaryColor,
      accentColor: preset.accentColor
    });
  };

  return (
    <div className="editor-section">
      <h3 className="section-title">Theme & Styling</h3>
      
      <div className="theme-section">
        <h4 className="subsection-title">Quick Themes</h4>
        <div className="preset-themes">
          {presetThemes.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className={`preset-theme ${theme.name === preset.name ? 'active' : ''}`}
              onClick={() => applyPresetTheme(preset)}
              style={{
                '--primary': preset.primaryColor,
                '--secondary': preset.secondaryColor,
                '--accent': preset.accentColor
              } as React.CSSProperties}
            >
              <div className="theme-preview">
                <div className="color-bar primary" style={{ backgroundColor: preset.primaryColor }}></div>
                <div className="color-bar secondary" style={{ backgroundColor: preset.secondaryColor }}></div>
                <div className="color-bar accent" style={{ backgroundColor: preset.accentColor }}></div>
              </div>
              <span className="theme-name">{preset.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="theme-section">
        <h4 className="subsection-title">Custom Colors</h4>
        <div className="color-controls">
          <div className="form-group">
            <label htmlFor="primaryColor">Primary Color</label>
            <div className="color-input-group">
              <input
                id="primaryColor"
                type="color"
                value={theme.primaryColor}
                onChange={(e) => handleChange('primaryColor', e.target.value)}
                className="color-picker"
              />
              <input
                type="text"
                value={theme.primaryColor}
                onChange={(e) => handleChange('primaryColor', e.target.value)}
                className="color-text"
                placeholder="#2563eb"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="secondaryColor">Secondary Color</label>
            <div className="color-input-group">
              <input
                id="secondaryColor"
                type="color"
                value={theme.secondaryColor}
                onChange={(e) => handleChange('secondaryColor', e.target.value)}
                className="color-picker"
              />
              <input
                type="text"
                value={theme.secondaryColor}
                onChange={(e) => handleChange('secondaryColor', e.target.value)}
                className="color-text"
                placeholder="#64748b"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="accentColor">Accent Color</label>
            <div className="color-input-group">
              <input
                id="accentColor"
                type="color"
                value={theme.accentColor}
                onChange={(e) => handleChange('accentColor', e.target.value)}
                className="color-picker"
              />
              <input
                type="text"
                value={theme.accentColor}
                onChange={(e) => handleChange('accentColor', e.target.value)}
                className="color-text"
                placeholder="#0f172a"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="theme-section">
        <h4 className="subsection-title">Typography</h4>
        <div className="typography-controls">
          <div className="form-group">
            <label htmlFor="fontFamily">Font Family</label>
            <select
              id="fontFamily"
              value={theme.fontFamily}
              onChange={(e) => handleChange('fontFamily', e.target.value)}
            >
              {fontOptions.map(font => (
                <option key={font} value={font}>
                  {font.split(',')[0]}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fontSize">Base Font Size</label>
            <div className="font-size-control">
              <input
                id="fontSize"
                type="range"
                min="10"
                max="18"
                value={theme.fontSize}
                onChange={(e) => handleChange('fontSize', parseInt(e.target.value))}
                className="font-size-slider"
              />
              <span className="font-size-value">{theme.fontSize}px</span>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-section">
        <h4 className="subsection-title">Theme Name</h4>
        <div className="form-group">
          <label htmlFor="themeName">Custom Theme Name</label>
          <input
            id="themeName"
            type="text"
            value={theme.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="My Custom Theme"
          />
        </div>
      </div>
    </div>
  );
}
