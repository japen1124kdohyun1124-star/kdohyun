import React, { useState } from 'react';
import { Grade, Subject } from '../types';
import './FilterPanel.css';

interface FilterPanelProps {
  grades: Grade[];
  subjects: Subject[];
  onFilter: (gradeId: number, subjectId: number) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  grades,
  subjects,
  onFilter,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);

  const handleFilter = () => {
    if (selectedGrade !== null && selectedSubject !== null) {
      onFilter(selectedGrade, selectedSubject);
    }
  };

  return (
    <div className="filter-panel">
      <h2>질문 검색</h2>
      
      <div className="filter-group">
        <label htmlFor="grade-select">학년 선택</label>
        <select
          id="grade-select"
          value={selectedGrade ?? ''}
          onChange={(e) => setSelectedGrade(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">-- 학년 선택 --</option>
          {grades.map((grade) => (
            <option key={grade.id} value={grade.id}>
              {grade.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="subject-select">과목 선택</label>
        <select
          id="subject-select"
          value={selectedSubject ?? ''}
          onChange={(e) => setSelectedSubject(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">-- 과목 선택 --</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>

      <button
        className="filter-button"
        onClick={handleFilter}
        disabled={selectedGrade === null || selectedSubject === null}
      >
        검색
      </button>
    </div>
  );
};
