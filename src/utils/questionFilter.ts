import { Question } from '../types';

/**
 * 학년과 과목에 따라 질문을 필터링합니다
 * @param allQuestions - 모든 질문 배열
 * @param gradeId - 학년 ID
 * @param subjectId - 과목 ID
 * @returns 필터링된 질문 배열
 */
export const filterQuestionsByGradeAndSubject = (
  allQuestions: Question[],
  gradeId: number | string,
  subjectId: number | string
): Question[] => {
  const filtered = allQuestions.filter(
    q =>
      Number(q.gradeId) === Number(gradeId) &&
      Number(q.subjectId) === Number(subjectId)
  );
  return filtered;
};

/**
 * 학년으로만 질문을 필터링합니다
 * @param allQuestions - 모든 질문 배열
 * @param gradeId - 학년 ID
 * @returns 필터링된 질문 배열
 */
export const filterQuestionsByGrade = (
  allQuestions: Question[],
  gradeId: number | string
): Question[] => {
  return allQuestions.filter(q => Number(q.gradeId) === Number(gradeId));
};

/**
 * 과목으로만 질문을 필터링합니다
 * @param allQuestions - 모든 질문 배열
 * @param subjectId - 과목 ID
 * @returns 필터링된 질문 배열
 */
export const filterQuestionsBySubject = (
  allQuestions: Question[],
  subjectId: number | string
): Question[] => {
  return allQuestions.filter(q => Number(q.subjectId) === Number(subjectId));
};

/**
 * 난이도로 질문을 필터링합니다
 * @param allQuestions - 모든 질문 배열
 * @param difficulty - 난이도 ('easy' | 'medium' | 'hard')
 * @returns 필터링된 질문 배열
 */
export const filterQuestionsByDifficulty = (
  allQuestions: Question[],
  difficulty: 'easy' | 'medium' | 'hard'
): Question[] => {
  return allQuestions.filter(q => q.difficulty === difficulty);
};
