export type StudyProgram = {
  id: number;
  university: string;
  country: string;
  description: string;
  city: string;
  program: string;
  tuition: string;
  duration: string;
  intake: string;
  scholarship: string;
  accentColor: string;
  highlights: string[];
};

export const programs: StudyProgram[] = [
  {
    id: 1,
    university: 'University of Toronto',
    country: 'Canada',
    city: 'Toronto',
    program: 'Bachelor of Computer Science',
    description: 'Top ranked university offering multiple international programs.',
    tuition: 'CAD 61,720 per year',
    duration: '4 years',
    intake: 'September',
    scholarship: 'Merit awards available',
    accentColor: '#2563eb',
    highlights: ['Computer Science', 'Research focused', 'Co-op opportunities'],
  },
  {
    id: 2,
    university: 'University of Melbourne',
    country: 'Australia',
    city: 'Melbourne',
    program: 'Bachelor of Commerce',
    description: 'Popular destination for international students with strong graduate outcomes.',
    tuition: 'AUD 49,088 per year',
    duration: '3 years',
    intake: 'February and July',
    scholarship: 'International student grants',
    accentColor: '#0f766e',
    highlights: ['Business', 'Global campus', 'Career services'],
  },
  {
    id: 3,
    university: 'University of Manchester',
    country: 'United Kingdom',
    city: 'Manchester',
    program: 'BEng Mechanical Engineering',
    description: 'A research-led university with diverse programs and a large student community.',
    tuition: 'GBP 27,000 per year',
    duration: '3 years',
    intake: 'September',
    scholarship: 'Department scholarships',
    accentColor: '#7c3aed',
    highlights: ['Engineering', 'Scholarships', 'Student societies'],
  },
  {
    id: 4,
    university: 'Technical University of Munich',
    country: 'Germany',
    city: 'Munich',
    program: 'BSc Data Science',
    description: 'Known for technology, innovation, and affordable public education options.',
    tuition: 'EUR 6,000 per semester',
    duration: '3 years',
    intake: 'October and April',
    scholarship: 'DAAD options',
    accentColor: '#ea580c',
    highlights: ['Data Science', 'Industry links', 'Innovation labs'],
  },
];

export function getProgramById(id: number) {
  return programs.find((program) => program.id === id);
}
