# Copilot Instructions for CV Builder

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a React TypeScript CV Builder application that allows users to:

1. **Default CV Template**: Start with a professional default CV template
2. **Live Editing**: Edit personal information, experience, education, skills in real-time
3. **Live Preview**: See changes instantly as they type
4. **PDF Export**: Download the finalized CV as a PDF using html2canvas and jspdf
5. **Customizable Styling**: Modify fonts, colors, and layout options

## Technology Stack:
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Lucide React** for modern icons
- **html2canvas** for capturing CV preview
- **jspdf** for PDF generation
- **@react-pdf/renderer** for alternative PDF rendering
- **CSS3** with modern styling

## Key Features to Implement:
- Responsive design that works on desktop and mobile
- Form validation for required fields
- Auto-save functionality to localStorage
- Multiple CV templates/themes
- Export options (PDF download)
- Print-friendly styling

## Coding Guidelines:
- Use functional components with React hooks
- Implement TypeScript interfaces for data structures
- Use semantic HTML elements for accessibility
- Follow modern React patterns (useState, useEffect, useCallback)
- Implement error boundaries for PDF generation
- Use CSS modules or styled-components for component styling
