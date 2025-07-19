import { Download, Eye, EyeOff } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { CVData, CVTheme } from '../types/cv';

interface HeaderProps {
  isPreviewMode: boolean;
  onTogglePreview: () => void;
  cvData: CVData;
  theme: CVTheme;
}

export function Header({ isPreviewMode, onTogglePreview, cvData }: HeaderProps) {
  const handleDownloadPDF = async () => {
    try {
      const previewElement = document.getElementById('cv-preview');
      if (!previewElement) {
        alert('Preview not found. Please try again.');
        return;
      }

      // Create canvas from the CV preview
      const canvas = await html2canvas(previewElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Download PDF
      const fileName = `${cvData.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="app-title">CV Builder</h1>
          <span className="app-subtitle">Create professional CVs instantly</span>
        </div>
        
        <div className="header-right">
          <button
            onClick={onTogglePreview}
            className="header-btn preview-btn"
            title={isPreviewMode ? 'Show Editor' : 'Preview Only'}
          >
            {isPreviewMode ? (
              <>
                <EyeOff size={20} />
                <span>Show Editor</span>
              </>
            ) : (
              <>
                <Eye size={20} />
                <span>Preview Only</span>
              </>
            )}
          </button>
          
          <button
            onClick={handleDownloadPDF}
            className="header-btn download-btn"
            title="Download as PDF"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
}
