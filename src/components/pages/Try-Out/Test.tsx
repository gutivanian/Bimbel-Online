import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import NavigationBar from '../../Navbar';
import './styles/Test.css';

import { sections } from './Questions/Questions';

const Test: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [answers, setAnswers] = useState(Array(sections.length).fill([]));
  const [sectionScores, setSectionScores] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      finishSection();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentSection] = [...newAnswers[currentSection]];
    newAnswers[currentSection][questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = (sectionIndex: number) => {
    let score = 0;
    sections[sectionIndex].questions.forEach((question, questionIndex) => {
      if (answers[sectionIndex][questionIndex] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const finishSection = () => {
    const score = calculateScore(currentSection);
    setSectionScores(prevScores => {
      const newScores = [...prevScores];
      newScores[currentSection] = score;
      return newScores;
    });

    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
      setTimeLeft(180); // Reset timer for next section
    } else {
      setCurrentSection(sections.length); // End the test
    }
  };

  const totalScore = sectionScores.reduce((acc, score) => acc + (score || 0), 0);

  if (currentSection >= sections.length) {
    return (
      <>
        <NavigationBar />
        <Container className="test-container">
          <h2 className="text-center">Test Completed</h2>
          <Row className="justify-content-center">
            {sectionScores.map((score, index) => (
              <Col md={4} key={index}>
                <div className="score-section">
                  <h4>Section {index + 1}</h4>
                  <p className="score">Score: {score}</p>
                </div>
              </Col>
            ))}
            <Col md={12}>
              <div className="total-score-section">
                <h3>Total Score</h3>
                <p className="total-score">{totalScore}</p>
              </div>
            </Col>
          </Row>
          <div className="text-center">
            <Button variant="primary" href="/" className="mt-3">Return to Home</Button>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <Container className="test-container">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>{sections[currentSection].title}</h2>
            <p className="timer">{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</p>
            <div className="question-container">
              <p>{sections[currentSection].questions[currentQuestion].question}</p>
              {sections[currentSection].questions[currentQuestion].options.map((option, optionIndex) => (
                <div key={optionIndex} className="option-container">
                  <Form.Check
                    type="radio"
                    name={`question-${currentQuestion}`}
                    id={`question-${currentQuestion}-option-${optionIndex}`}
                    value={option}
                    checked={answers[currentSection][currentQuestion] === option}
                    onChange={(e) => handleAnswerChange(currentQuestion, e.target.value)}
                    label={option}
                    className="option-check"
                  />
                </div>
              ))}
            </div>
            <div className="navigation-buttons">
              {sections[currentSection].questions.map((_, questionIndex) => (
                <Button
                  key={questionIndex}
                  variant={questionIndex === currentQuestion ? 'secondary' : 'primary'}
                  className={`nav-button ${questionIndex === currentQuestion ? 'secondary' : 'primary'}`}
                  onClick={() => setCurrentQuestion(questionIndex)}
                >
                  {questionIndex + 1}
                </Button>
              ))}
            </div>
            <Button variant="success" className="finish-button" onClick={finishSection}>Finish Section</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Test;
    