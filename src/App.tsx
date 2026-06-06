import React, { useState, useMemo } from 'react';
import { Question } from './types';
import { FilterPanel } from './components/FilterPanel';
import { QuestionList } from './components/QuestionList';
import { filterQuestionsByGradeAndSubject } from './utils/questionFilter';
import { grades, subjects, mockQuestions } from './data/mockData';
import './App.css';

const App: React.FC = () => {
  const [allQuestions] = useState<Question[]>(mockQuestions);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);

  const filteredQuestions = useMemo(() => {
    if (selectedGrade !== null && selectedSubject !== null) {
      return filterQuestionsByGradeAndSubject(
        allQuestions,
        selectedGrade,
        selectedSubject
      );
    }
    return [];
  }, [allQuestions, selectedGrade, selectedSubject]);

  const handleFilter = (gradeId: number, subjectId: number) => {
    setSelectedGrade(gradeId);
    setSelectedSubject(subjectId);
  };

  const getGradeName = (id: number) => {
    return grades.find(g => g.id === id)?.name || '';
  };

  const getSubjectName = (id: number) => {
    return subjects.find(s => s.id === id)?.name || '';
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 StudySub</h1>
        <p>학년과 과목별 공부 문제</p>
      </header>

      <main className="app-main">
        <div className="container">
          <div className="sidebar">
            <FilterPanel
              grades={grades}
              subjects={subjects}
              onFilter={handleFilter}
            />
          </div>

          <div className="content">
            {selectedGrade && selectedSubject && (
              <div className="results-header">
                <h2>
                  {getGradeName(selectedGrade)} - {getSubjectName(selectedSubject)}
                </h2>
                <p className="result-count">
                  총 {filteredQuestions.length}개의 질문
                </p>
              </div>
            )}
            <QuestionList questions={filteredQuestions} />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 StudySub. 모든 권리 보유.</p>
      </footer>
    </div>
  );
};

export default App;
