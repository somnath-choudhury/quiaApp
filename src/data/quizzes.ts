import {Quiz} from '../types/quiz';

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'SimplifyMoney: Personal Finance Basics',
    description:
      'Test your knowledge of budgeting, saving, and smart money habits.',
    questions: [
      {
        id: 1,
        text: 'What’s the 50/30/20 rule in budgeting?',
        options: [
          '50% wants, 30% needs, 20% savings',
          '50% needs, 30% wants, 20% savings',
          '50% savings, 30% wants, 20% needs',
          '50% income, 30% debt, 20% taxes',
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: 'Which of the following is considered a good debt?',
        options: [
          'High-interest credit card debt',
          'Payday loan',
          'Student loan for a useful degree',
          'Gambling loan',
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        text: 'What is an emergency fund?',
        options: [
          'Money set aside for shopping',
          'Money saved for unexpected expenses',
          'A backup investment fund',
          'A vacation savings account',
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        text: 'What’s the benefit of compound interest?',
        options: [
          'Interest is only added once',
          'You pay less tax',
          'You earn interest on both principal and interest',
          'It lowers your loan interest rate',
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        text: 'Which app feature would help you avoid overspending?',
        options: [
          'Daily quotes',
          'Budget tracking',
          'Game leaderboard',
          'Dark mode',
        ],
        correctAnswer: 1,
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
        text: 'What’s the first step in starting a business?',
        options: [
          'Get a loan',
          'Launch an app',
          'Identify a problem or need',
          'Create a website',
        ],
        correctAnswer: 2,
      },
      {
        id: 2,
        text: 'What is an MVP in business?',
        options: [
          'Most Valuable Person',
          'Minimal Viable Product',
          'Monthly Venture Plan',
          'Marketing Value Proposition',
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        text: 'Which of the following is a revenue model?',
        options: ['Lean Canvas', 'Freemium', 'SEO strategy', 'Branding'],
        correctAnswer: 1,
      },
      {
        id: 4,
        text: 'What’s a pitch deck?',
        options: [
          'A slide presentation for investors',
          'A music playlist for focus',
          'An app testing plan',
          'A team-building strategy',
        ],
        correctAnswer: 0,
      },
      {
        id: 5,
        text: 'Why is customer feedback important early on?',
        options: [
          'To impress investors',
          'To delay product launch',
          'To improve the product and fit market needs',
          'To cut costs',
        ],
        correctAnswer: 2,
      },
    ],
  },
];
