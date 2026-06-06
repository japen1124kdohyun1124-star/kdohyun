import React from 'react';
import { Question } from '../types';
import './QuestionList.css';

interface QuestionListProps {
  questions: Question[];
  loading?: boolean;
}

export const QuestionList: React.FC<QuestionListProps> = ({ 
  questions, 
  loading = false 
}) => {
  if (loading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (questions.length === 0) {
    return <div className="no-questions">질문이 없습니다.</div>;
  }

  return (
    <div className="question-list">
      {questions.map((question) => (
        <div key={question.id} className="question-card">
          <h3 className="question-title">{question.title}</h3>
          <p className="question-content">{question.content}</p>
          <div className="question-footer">
            <span className={`difficulty ${question.difficulty}`}>
              {question.difficulty === 'easy' && '쉬움'}
              {question.difficulty === 'medium' && '보통'}
              {question.difficulty === 'hard' && '어려움'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
