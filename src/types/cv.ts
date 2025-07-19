export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  summary: string;
  profileImage?: string; // Base64 encoded image or data URL
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  isCurrentlyStudying: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Achievement {
  id: string;
  title: string;
}

export interface CustomSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
}

export interface CustomSection {
  id: string;
  name: string;
  icon: string; // Icon name from lucide-react
  items: CustomSectionItem[];
}

export interface CVData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  achievements: Achievement[];
  customSections: CustomSection[];
}

export interface CVTheme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  fontSize: number;
}

export const defaultCVData: CVData = {
  personalInfo: {
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'https://johndoe.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    summary: 'Experienced software developer with a passion for creating innovative solutions and leading cross-functional teams. Proven track record in full-stack development and project management.'
  },
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Software Developer',
      startDate: '2022-01',
      endDate: '',
      isCurrentRole: true,
      description: 'Lead development of web applications using React, Node.js, and cloud technologies. Mentor junior developers and collaborate with product teams to deliver high-quality solutions.'
    },
    {
      id: '2',
      company: 'Digital Innovations LLC',
      position: 'Full Stack Developer',
      startDate: '2020-03',
      endDate: '2021-12',
      isCurrentRole: false,
      description: 'Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40% through code optimization and database improvements.'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      gpa: '3.8',
      isCurrentlyStudying: false
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert' },
    { id: '2', name: 'React', level: 'Expert' },
    { id: '3', name: 'TypeScript', level: 'Advanced' },
    { id: '4', name: 'Node.js', level: 'Advanced' },
    { id: '5', name: 'Python', level: 'Intermediate' },
    { id: '6', name: 'AWS', level: 'Intermediate' }
  ],
  achievements: [
    { id: '1', title: 'Got Dean Scholarship 4 times in BSc for outstanding results' },
    { id: '2', title: 'Got Scholarship at Primary School Certificates (PSC) & Junior School Certificates (JSC)' }
  ],
  customSections: [
    {
      id: '1',
      name: 'Projects',
      icon: 'FolderOpen',
      items: [
        {
          id: '1',
          title: 'E-commerce Website',
          subtitle: 'React & Node.js',
          description: 'Built a full-stack e-commerce platform with payment integration',
          date: '2024'
        }
      ]
    }
  ]
};

export const defaultTheme: CVTheme = {
  name: 'Professional Blue',
  primaryColor: '#2563eb',
  secondaryColor: '#64748b',
  accentColor: '#0f172a',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: 14
};
