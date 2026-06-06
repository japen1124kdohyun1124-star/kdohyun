export interface Question {
  id: string;
  gradeId: number;
  subjectId: number;
  title: string;
  content: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
}

export interface Grade {
  id: number;
  name: string;
}

export interface Subject {
  id: number;
  name: string;
}
