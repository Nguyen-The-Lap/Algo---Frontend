export const algorithms = [
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
}

// Ví dụ sử dụng
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // [11, 12, 22, 25, 34, 64, 90]`,
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
}

// Ví dụ sử dụng
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(quickSort(array)); // [11, 12, 22, 25, 34, 64, 90]`,
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
}

// Ví dụ sử dụng
const array = [11, 12, 22, 25, 34, 64, 90];
console.log(binarySearch(array, 25)); // 3
console.log(binarySearch(array, 100)); // -1`,
      examples: [
        {
          input: 'array: [11, 12, 22, 25, 34, 64, 90], target: 25',
          output: '3',
          explanation: 'Phần tử 25 ở vị trí index 3'
        }
      ]
    }
  },
  {
    id: 'dfs',
    title: 'Depth-First Search (DFS)',
    category: 'Đồ thị',
    difficulty: 'Trung bình',
    description: 'Thuật toán duyệt đồ thị theo chiều sâu sử dụng đệ quy hoặc stack.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    tags: ['đồ thị', 'duyệt', 'đệ quy'],
    content: {
      overview: 'Depth-First Search là thuật toán duyệt đồ thị theo chiều sâu. Nó khám phá càng xa càng tốt dọc theo mỗi nhánh trước khi quay lại.',
      steps: [
        'Bắt đầu từ một đỉnh bất kỳ',
        'Đánh dấu đỉnh hiện tại đã thăm',
        'Thăm tất cả các đỉnh kề chưa được thăm',
        'Sử dụng đệ quy hoặc stack để duy trì thứ tự thăm',
        'Lặp lại cho đến khi tất cả đỉnh được thăm'
      ],
      code: `class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfsHelper(neighbor);
        }
      });
    }
    
    dfsHelper(start);
    return result;
  }
}

// Ví dụ sử dụng
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.dfs("A")); // ["A", "B", "D", "C"]`,
      examples: [
        {
          input: 'Graph với các đỉnh A, B, C, D và các cạnh A-B, A-C, B-D, C-D',
          output: '["A", "B", "D", "C"]',
          explanation: 'Thứ tự duyệt DFS từ đỉnh A'
        }
      ]
    }
  }
]

export const categories = [
  { id: 'sorting', name: 'Sắp xếp', color: 'bg-blue-100 text-blue-800' },
  { id: 'searching', name: 'Tìm kiếm', color: 'bg-green-100 text-green-800' },
  { id: 'graph', name: 'Đồ thị', color: 'bg-purple-100 text-purple-800' },
  { id: 'dynamic-programming', name: 'Quy hoạch động', color: 'bg-orange-100 text-orange-800' },
  { id: 'greedy', name: 'Tham lam', color: 'bg-red-100 text-red-800' }
]

export const difficulties = [
  { id: 'easy', name: 'Dễ', color: 'bg-green-100 text-green-800' },
  { id: 'medium', name: 'Trung bình', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'hard', name: 'Khó', color: 'bg-red-100 text-red-800' }
] 