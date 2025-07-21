import type { CVTemplate } from '../types/cv';

export interface TemplateConfig {
  id: CVTemplate;
  name: string;
  description: string;
  preview: string;
  features: string[];
}

export const availableTemplates: TemplateConfig[] = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean, contemporary design with a sidebar layout',
    preview: '/templates/modern-preview.png',
    features: ['Sidebar layout', 'Professional colors', 'Photo placement', 'Icon support']
  },
  {
    id: 'classic',
    name: 'Classic Traditional',
    description: 'Traditional single-column layout perfect for conservative industries',
    preview: '/templates/classic-preview.png',
    features: ['Single column', 'Traditional styling', 'Text-focused', 'Print-friendly']
  },
  {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Ultra-clean design with maximum white space and minimal styling',
    preview: '/templates/minimal-preview.png',
    features: ['Minimalist design', 'Maximum readability', 'Clean typography', 'Lots of white space']
  },
  {
    id: 'creative',
    name: 'Creative Modern',
    description: 'Bold design with creative elements for creative professionals',
    preview: '/templates/creative-preview.png',
    features: ['Creative layout', 'Bold typography', 'Color accents', 'Visual elements']
  },
  {
    id: 'biodata',
    name: 'Biodata Format',
    description: 'Traditional biodata format for matrimonial and formal purposes',
    preview: '/templates/biodata-preview.png',
    features: ['Formal layout', 'Personal details focus', 'Family information', 'Traditional format']
  }
];

export function getTemplateConfig(templateId: CVTemplate): TemplateConfig {
  return availableTemplates.find(template => template.id === templateId) || availableTemplates[0];
}
