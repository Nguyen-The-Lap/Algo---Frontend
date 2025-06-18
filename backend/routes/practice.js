const express = require('express');
const router = express.Router();

// Mock data cho bài tập
const practiceQuestions = [
  {
    id: 1,
    question: 'Thuật toán Bubble Sort có độ phức tạp thời gian là gì?',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(log n)'
    ],
    correct: 2,
    explanation: 'Bubble Sort có độ phức tạp thời gian O(n²) vì nó sử dụng hai vòng lặp lồng nhau.',
    category: 'Sắp xếp',
    difficulty: 'Dễ'
  },
  {
    id: 2,
    question: 'Thuật toán nào sau đây sử dụng chiến lược chia để trị?',
    options: [
      'Bubble Sort',
      'Quick Sort',
      'Linear Search',
      'Selection Sort'
    ],
    correct: 1,
    explanation: 'Quick Sort sử dụng chiến lược chia để trị bằng cách chọn pivot và phân vùng mảng.',
    category: 'Sắp xếp',
    difficulty: 'Trung bình'
  },
  {
    id: 3,
    question: 'Binary Search yêu cầu mảng đầu vào phải như thế nào?',
    options: [
      'Có thể có phần tử trùng lặp',
      'Đã được sắp xếp',
      'Có độ dài chẵn',
      'Không có yêu cầu đặc biệt'
    ],
    correct: 1,
    explanation: 'Binary Search chỉ hoạt động trên mảng đã được sắp xếp.',
    category: 'Tìm kiếm',
    difficulty: 'Dễ'
  },
  {
    id: 4,
    question: 'Độ phức tạp không gian của Quick Sort là gì?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n²)'
    ],
    correct: 1,
    explanation: 'Quick Sort có độ phức tạp không gian O(log n) do stack space của đệ quy.',
    category: 'Sắp xếp',
    difficulty: 'Trung bình'
  },
  {
    id: 5,
    question: 'Thuật toán nào sau đây duyệt đồ thị theo chiều sâu?',
    options: [
      'Breadth-First Search (BFS)',
      'Depth-First Search (DFS)',
      'Dijkstra Algorithm',
      'Floyd-Warshall Algorithm'
    ],
    correct: 1,
    explanation: 'Depth-First Search (DFS) duyệt đồ thị theo chiều sâu, khám phá càng xa càng tốt dọc theo mỗi nhánh.',
    category: 'Đồ thị',
    difficulty: 'Trung bình'
  },
  {
    id: 6,
    question: 'Thuật toán Merge Sort có độ phức tạp thời gian là gì?',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(log n)'
    ],
    correct: 1,
    explanation: 'Merge Sort có độ phức tạp thời gian O(n log n) trong mọi trường hợp.',
    category: 'Sắp xếp',
    difficulty: 'Trung bình'
  },
  {
    id: 7,
    question: 'Linear Search có độ phức tạp thời gian là gì?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n²)'
    ],
    correct: 2,
    explanation: 'Linear Search có độ phức tạp thời gian O(n) vì phải duyệt qua từng phần tử.',
    category: 'Tìm kiếm',
    difficulty: 'Dễ'
  },
  {
    id: 8,
    question: 'Thuật toán nào sau đây không ổn định (unstable)?',
    options: [
      'Bubble Sort',
      'Merge Sort',
      'Quick Sort',
      'Insertion Sort'
    ],
    correct: 2,
    explanation: 'Quick Sort không ổn định vì có thể thay đổi thứ tự tương đối của các phần tử bằng nhau.',
    category: 'Sắp xếp',
    difficulty: 'Trung bình'
  }
];

// GET /api/practice/questions - Lấy danh sách câu hỏi
router.get('/questions', (req, res) => {
  try {
    const { category, difficulty, limit } = req.query;
    
    let filteredQuestions = [...practiceQuestions];
    
    // Filter by category
    if (category) {
      filteredQuestions = filteredQuestions.filter(q => q.category === category);
    }
    
    // Filter by difficulty
    if (difficulty) {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
    }
    
    // Limit number of questions
    if (limit) {
      filteredQuestions = filteredQuestions.slice(0, parseInt(limit));
    }
    
    // Shuffle questions
    filteredQuestions.sort(() => Math.random() - 0.5);
    
    res.json({
      success: true,
      data: filteredQuestions,
      total: filteredQuestions.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch practice questions'
    });
  }
});

// GET /api/practice/questions/:id - Lấy chi tiết một câu hỏi
router.get('/questions/:id', (req, res) => {
  try {
    const { id } = req.params;
    const question = practiceQuestions.find(q => q.id === parseInt(id));
    
    if (!question) {
      return res.status(404).json({
        success: false,
        error: 'Question not found'
      });
    }
    
    res.json({
      success: true,
      data: question
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch question'
    });
  }
});

// POST /api/practice/submit - Nộp bài kiểm tra
router.post('/submit', (req, res) => {
  try {
    const { answers } = req.body;
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid answers format'
      });
    }
    
    let score = 0;
    const results = [];
    
    answers.forEach(answer => {
      const question = practiceQuestions.find(q => q.id === answer.questionId);
      if (question) {
        const isCorrect = answer.selectedAnswer === question.correct;
        if (isCorrect) score++;
        
        results.push({
          questionId: answer.questionId,
          selectedAnswer: answer.selectedAnswer,
          correctAnswer: question.correct,
          isCorrect,
          explanation: question.explanation
        });
      }
    });
    
    const totalQuestions = answers.length;
    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    
    res.json({
      success: true,
      data: {
        score,
        totalQuestions,
        percentage: Math.round(percentage * 100) / 100,
        results
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to submit practice test'
    });
  }
});

// GET /api/practice/categories - Lấy danh sách categories cho practice
router.get('/categories', (req, res) => {
  try {
    const categories = [
      { id: 'sorting', name: 'Sắp xếp', count: 4 },
      { id: 'searching', name: 'Tìm kiếm', count: 2 },
      { id: 'graph', name: 'Đồ thị', count: 1 },
      { id: 'all', name: 'Tất cả', count: practiceQuestions.length }
    ];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch practice categories'
    });
  }
});

// GET /api/practice/difficulties - Lấy danh sách difficulties cho practice
router.get('/difficulties', (req, res) => {
  try {
    const difficulties = [
      { id: 'easy', name: 'Dễ', count: 3 },
      { id: 'medium', name: 'Trung bình', count: 5 },
      { id: 'all', name: 'Tất cả', count: practiceQuestions.length }
    ];
    
    res.json({
      success: true,
      data: difficulties
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch practice difficulties'
    });
  }
});

module.exports = router; 