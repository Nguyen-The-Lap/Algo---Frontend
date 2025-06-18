const express = require('express');
const router = express.Router();

// Mock data - trong thực tế sẽ lấy từ database
const algorithms = [
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    category: 'Sắp xếp',
    difficulty: 'Dễ',
    description: 'Thuật toán sắp xếp đơn giản nhất, hoạt động bằng cách so sánh và hoán đổi các phần tử liền kề.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    tags: ['sắp xếp', 'cơ bản', 'array'],
    content: {
      overview: 'Bubble Sort là một thuật toán sắp xếp đơn giản lặp lại việc đi qua danh sách cần sắp xếp, so sánh các cặp phần tử liền kề và hoán đổi chúng nếu chúng ở sai thứ tự.',
      steps: [
        'So sánh phần tử đầu tiên với phần tử thứ hai',
        'Nếu phần tử đầu tiên lớn hơn, hoán đổi chúng',
        'Di chuyển đến cặp phần tử tiếp theo',
        'Lặp lại cho đến khi không còn hoán đổi nào'
      ],
      code: `function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Hoán đổi phần tử
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}`,
      examples: [
        {
          input: '[64, 34, 25, 12, 22, 11, 90]',
          output: '[11, 12, 22, 25, 34, 64, 90]',
          explanation: 'Mảng được sắp xếp tăng dần'
        }
      ]
    }
  },
  {
    id: 'quick-sort',
    title: 'Quick Sort',
    category: 'Sắp xếp',
    difficulty: 'Trung bình',
    description: 'Thuật toán sắp xếp hiệu quả sử dụng chiến lược chia để trị với pivot.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(log n)',
    tags: ['sắp xếp', 'chia để trị', 'pivot'],
    content: {
      overview: 'Quick Sort là một thuật toán sắp xếp hiệu quả sử dụng chiến lược chia để trị. Nó chọn một phần tử làm pivot và phân vùng các phần tử khác xung quanh pivot.',
      steps: [
        'Chọn một phần tử làm pivot (thường là phần tử cuối)',
        'Phân vùng mảng: các phần tử nhỏ hơn pivot ở bên trái, lớn hơn ở bên phải',
        'Đệ quy sắp xếp các phần con bên trái và phải của pivot',
        'Kết hợp các phần đã sắp xếp'
      ],
      code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      examples: [
        {
          input: '[64, 34, 25, 12, 22, 11, 90]',
          output: '[11, 12, 22, 25, 34, 64, 90]',
          explanation: 'Mảng được sắp xếp tăng dần'
        }
      ]
    }
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    category: 'Tìm kiếm',
    difficulty: 'Dễ',
    description: 'Thuật toán tìm kiếm hiệu quả trên mảng đã sắp xếp.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    tags: ['tìm kiếm', 'chia để trị', 'array'],
    content: {
      overview: 'Binary Search là thuật toán tìm kiếm hiệu quả trên mảng đã sắp xếp. Nó so sánh phần tử cần tìm với phần tử ở giữa mảng và loại bỏ một nửa mảng trong mỗi bước.',
      steps: [
        'Tìm phần tử ở giữa mảng',
        'So sánh phần tử cần tìm với phần tử giữa',
        'Nếu bằng nhau, trả về vị trí',
        'Nếu nhỏ hơn, tìm kiếm trong nửa trái',
        'Nếu lớn hơn, tìm kiếm trong nửa phải',
        'Lặp lại cho đến khi tìm thấy hoặc mảng rỗng'
      ],
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Không tìm thấy
}`,
      examples: [
        {
          input: 'array: [11, 12, 22, 25, 34, 64, 90], target: 25',
          output: '3',
          explanation: 'Phần tử 25 ở vị trí index 3'
        }
      ]
    }
  }
];

// GET /api/algorithms - Lấy danh sách tất cả thuật toán
router.get('/', (req, res) => {
  try {
    const { search, category, difficulty } = req.query;
    
    let filteredAlgorithms = [...algorithms];
    
    // Filter by search term
    if (search) {
      filteredAlgorithms = filteredAlgorithms.filter(algorithm => 
        algorithm.title.toLowerCase().includes(search.toLowerCase()) ||
        algorithm.description.toLowerCase().includes(search.toLowerCase()) ||
        algorithm.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    // Filter by category
    if (category) {
      filteredAlgorithms = filteredAlgorithms.filter(algorithm => 
        algorithm.category === category
      );
    }
    
    // Filter by difficulty
    if (difficulty) {
      filteredAlgorithms = filteredAlgorithms.filter(algorithm => 
        algorithm.difficulty === difficulty
      );
    }
    
    res.json({
      success: true,
      data: filteredAlgorithms,
      total: filteredAlgorithms.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch algorithms'
    });
  }
});

// GET /api/algorithms/:id - Lấy chi tiết một thuật toán
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const algorithm = algorithms.find(alg => alg.id === id);
    
    if (!algorithm) {
      return res.status(404).json({
        success: false,
        error: 'Algorithm not found'
      });
    }
    
    res.json({
      success: true,
      data: algorithm
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch algorithm'
    });
  }
});

// GET /api/algorithms/categories - Lấy danh sách categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [
      { id: 'sorting', name: 'Sắp xếp', color: 'bg-blue-100 text-blue-800' },
      { id: 'searching', name: 'Tìm kiếm', color: 'bg-green-100 text-green-800' },
      { id: 'graph', name: 'Đồ thị', color: 'bg-purple-100 text-purple-800' },
      { id: 'dynamic-programming', name: 'Quy hoạch động', color: 'bg-orange-100 text-orange-800' },
      { id: 'greedy', name: 'Tham lam', color: 'bg-red-100 text-red-800' }
    ];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

// GET /api/algorithms/difficulties - Lấy danh sách difficulties
router.get('/difficulties/list', (req, res) => {
  try {
    const difficulties = [
      { id: 'easy', name: 'Dễ', color: 'bg-green-100 text-green-800' },
      { id: 'medium', name: 'Trung bình', color: 'bg-yellow-100 text-yellow-800' },
      { id: 'hard', name: 'Khó', color: 'bg-red-100 text-red-800' }
    ];
    
    res.json({
      success: true,
      data: difficulties
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch difficulties'
    });
  }
});

module.exports = router; 