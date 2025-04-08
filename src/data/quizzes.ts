import {Quiz} from '../types/quiz';

export const quizzes: Quiz[] = [
  {
  id: 1,
  title: 'Finance Fundamentals',
  description:
    'Test your knowledge on essential finance concepts and business models.',
  questions: [
    {
      id: 1,
      text: 'What does EBITDA stand for?',
      options: [
        'Earnings Before Interest, Taxes, Depreciation, and Amortization',
        'Estimated Balance Including Taxes and Debt Allowances',
        'Equity Before Income Tax and Depreciation Accounting',
        'Earnings Before Investments, Taxes, and Deductions Added',
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: 'In a B2G business model, who is the target customer?',
      options: [
        'General public',
        'Government organizations',
        'Global corporations',
        'Business-to-Group consumers',
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      text: 'Which of the following best describes B2C?',
      options: [
        'Business selling to another business',
        'Banking to consumer',
        'Business selling directly to individual consumers',
        'Buyer to contractor',
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      text: 'What does a high current ratio typically indicate?',
      options: [
        'The company has strong liquidity',
        'The company is highly leveraged',
        'The company is generating low revenue',
        'The company is investing in fixed assets',
      ],
      correctAnswer: 0,
    },
    {
      id: 5,
      text: 'Why is free cash flow important to investors?',
      options: [
        'It shows the amount of cash spent on taxes',
        'It reflects how much cash is tied up in inventory',
        'It shows the cash available after capital expenditures',
        'It predicts next year’s net profit',
      ],
      correctAnswer: 2,
    },
  ],
},
  {
    id: 2,
    title: 'Entrepreneurship Essentials',
    description:
      'Explore the mindset and basics every entrepreneur should know.',
    questions: [
      {
        id: 1,
        text: 'What is the primary goal of entrepreneurship?',
        options: [
          'To avoid paying taxes',
          'To manage large corporations',
          'To create and grow a business while solving a problem',
          'To maintain the status quo',
        ],
        correctAnswer: 2,
      },
      {
        id: 2,
        text: 'Which of the following is considered a major risk for entrepreneurs?',
        options: [
          'Taking a 9-to-5 job',
          'Receiving venture capital',
          'Market uncertainty and financial loss',
          'Hiring employees',
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        text: 'What does a "minimum viable product (MVP)" refer to in entrepreneurship?',
        options: [
          'The final version of a product ready for mass production',
          'A heavily marketed product with many features',
          'A basic version of a product used to validate an idea with real users',
          'A prototype made for internal use only',
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        text: 'Which of the following is a key characteristic of successful entrepreneurs?',
        options: [
          'Aversion to risk',
          'Dependence on traditional job security',
          'Willingness to learn and adapt quickly',
          'Reluctance to take feedback',
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        text: 'What is a business model?',
        options: [
          'A set of motivational posters for the office',
          'A famous entrepreneur',
          'A plan for how a company creates, delivers, and captures value',
          'A legal document required to start a business',
        ],
        correctAnswer: 2,
      },
    ],
  },
];
