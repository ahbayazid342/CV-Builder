import { useState, useEffect } from 'react';
import type { CVData, CVTheme } from './types/cv';
import { defaultCVData, defaultTheme } from './types/cv';
import './App.css';
import { CVEditor } from './components/CVEditor';
import { CVPreview } from './components/CVPreview';
import { Header } from './components/Header';

function App() {
  const [cvData, setCvData] = useState<CVData>(defaultCVData);
  const [theme, setTheme] = useState<CVTheme>(defaultTheme);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('cv-builder-data');
    const savedTheme = localStorage.getItem('cv-builder-theme');
    
    if (savedData) {
      try {
        setCvData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading saved CV data:', error);
      }
    }
    
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (error) {
        console.error('Error loading saved theme:', error);
      }
    }
  }, []);

  // Auto-save data to localStorage
  useEffect(() => {
    localStorage.setItem('cv-builder-data', JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem('cv-builder-theme', JSON.stringify(theme));
  }, [theme]);

  const handleDataChange = (newData: CVData) => {
    setCvData(newData);
  };

  const handleThemeChange = (newTheme: CVTheme) => {
    setTheme(newTheme);
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <div className="app">
      <Header 
        isPreviewMode={isPreviewMode}
        onTogglePreview={togglePreviewMode}
        cvData={cvData}
        theme={theme}
      />
      
      <main className="main-content">
        {isPreviewMode ? (
          <div className="preview-only">
            <CVPreview cvData={cvData} theme={theme} />
          </div>
        ) : (
          <div className="editor-layout">
            <div className="editor-panel">
              <CVEditor 
                cvData={cvData}
                theme={theme}
                onDataChange={handleDataChange}
                onThemeChange={handleThemeChange}
              />
            </div>
            <div className="preview-panel">
              <CVPreview cvData={cvData} theme={theme} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
