import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, CheckCircle, XCircle, Play, RotateCcw, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

const Practice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const questions = [
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
      explanation: 'Bubble Sort có độ phức tạp thời gian O(n²) vì nó sử dụng hai vòng lặp lồng nhau.'
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
      explanation: 'Quick Sort sử dụng chiến lược chia để trị bằng cách chọn pivot và phân vùng mảng.'
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
      explanation: 'Binary Search chỉ hoạt động trên mảng đã được sắp xếp.'
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
      explanation: 'Quick Sort có độ phức tạp không gian O(log n) do stack space của đệ quy.'
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
      explanation: 'Depth-First Search (DFS) duyệt đồ thị theo chiều sâu, khám phá càng xa càng tốt dọc theo mỗi nhánh.'
    }
  ]

  const handleAnswerSelect = (answerIndex) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
      if (selectedAnswer === questions[currentQuestion].correct) {
        setScore(score + 1)
      }
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompleted(false)
  }

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / questions.length) * 100
  }

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card"
        >
          <div className="mb-6">
            {score === questions.length ? (
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            ) : (
              <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            )}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {score === questions.length ? 'Hoàn hảo!' : 'Làm tốt lắm!'}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Bạn đã hoàn thành bài kiểm tra
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-gray-600 dark:text-gray-100">
              {score === questions.length 
                ? 'Tuyệt vời! Bạn đã trả lời đúng tất cả câu hỏi.'
                : `Bạn đã trả lời đúng ${score} trong tổng số ${questions.length} câu hỏi.`
              }
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Làm lại</span>
            </button>
            <Link
              to="/algorithms"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Học thêm</span>
            </Link>
          </div>
        </motion.div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Luyện Tập</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Kiểm tra kiến thức của bạn về các thuật toán đã học
        </p>
      </div>

      {/* Progress */}
      <div className="card dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Câu hỏi {currentQuestion + 1} / {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {score} / {questions.length} đúng
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="card dark:bg-gray-800"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedAnswer === index
                  ? showResult
                    ? index === currentQ.correct
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                    : 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              } ${showResult && index === currentQ.correct ? 'border-green-500 bg-green-50 dark:bg-green-900/30' : ''}`}
            >
              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium text-gray-900 dark:text-white">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-900 dark:text-white">{option}</span>
                {showResult && selectedAnswer === index && (
                  index === currentQ.correct ? (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 ml-auto" />
                  )
                )}
                {showResult && index === currentQ.correct && selectedAnswer !== index && (
                  <CheckCircle className="h-5 w-5 text-green-500 ml-auto" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg"
          >
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Giải thích:</h4>
            <p className="text-blue-800 dark:text-blue-200">{currentQ.explanation}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center mt-8">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="h-5 w-5" />
              <span>Kiểm tra đáp án</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="btn-primary flex items-center space-x-2"
            >
              <span>
                {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'}
              </span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Practice 
