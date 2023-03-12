import {
  fq1,
  fq2,
  fq3,
  fq4,
  fq5,
  fq6,
  fq7,
  fq8,
  fq9,
  fq10,
} from "../assets/FundamentalQs";
import {
  tq1,
  tq2,
  tq3,
  tq4,
  tq5,
  tq6,
  tq7,
  tq8,
  tq9,
} from "../assets/TechnicalQs";
const QuestionsBank = {
  fundamentals: [
    { question: "Tell me about yourself.", audio: fq1 },
    { question: "What are your strengths?", audio: fq2 },
    { question: "What are your weaknesses?", audio: fq3 },
    { question: "Why do you want to work with this company?", audio: fq4 },
    { question: "Why should we hire you?", audio: fq5 },
    { question: " What are your long-term career goals?", audio: fq6 },
    {
      question:
        "Can you describe a challenge you've faced and how you overcame it?",
      audio: fq7,
    },
    { question: "How do you handle stressful situations?", audio: fq8 },
    { question: "What motivates you?", audio: fq9 },
    { question: "Do you have any questions for us?", audio: fq10 },
  ],
  technical: [
    { question: "What is a function?", audio: tq1 },
    { question: "What is OOP?", audio: tq2 },
    { question: "What is a promise in JavaScript?", audio: tq3 },
    {
      question: "How do you stay current with your technical knowledge?",
      audio: tq4,
    },
    { question: "How do you get started on a new coding project?", audio: tq5 },
    {
      question: "Can you talk about some projects you’ve worked on?",
      audio: tq6,
    },
    { question: "Describe API in your own words.", audio: tq7 },
    { question: "What is your tech stack?", audio: tq8 },
    { question: "What is UI and UX?", audio: tq9 },
  ],
};
export default QuestionsBank;
