import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Zap, Tag, Play, Copy, Check } from 'lucide-react'
import { algorithms } from '../data/algorithms'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const AlgorithmDetail = () => {
  const { id } = useParams()
  const [copied, setCopied] = useState(false)
  
  const algorithm = algorithms.find(alg => alg.id === id)

  if (!algorithm) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy thuật toán</h2>
        <p className="text-gray-600 mb-8">Thuật toán bạn đang tìm kiếm không tồn tại.</p>
        <Link to="/algorithms" className="btn-primary">
          Quay lại danh sách
        </Link>
      </div>
    )
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(algorithm.content.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Dễ': return 'bg-green-100 text-green-800'
      case 'Trung bình': return 'bg-yellow-100 text-yellow-800'
      case 'Khó': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Link to="/algorithms" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Quay lại</span>
        </Link>
      </div>

      {/* Algorithm Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{algorithm.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{algorithm.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
            {algorithm.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-6">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Clock className="h-5 w-5" />
            <span>Thời gian: <strong>{algorithm.timeComplexity}</strong></span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Zap className="h-5 w-5" />
            <span>Không gian: <strong>{algorithm.spaceComplexity}</strong></span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Tag className="h-5 w-5" />
            <span>Danh mục: <strong>{algorithm.category}</strong></span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {algorithm.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full dark:bg-gray-700 dark:text-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tổng quan</h2>
        <p className="text-gray-700 dark:text-gray-100 leading-relaxed">{algorithm.content.overview}</p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Các bước thực hiện</h2>
        <ol className="space-y-3">
          {algorithm.content.steps.map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </span>
              <span className="text-gray-700 dark:text-gray-100">{step}</span>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Code Implementation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Triển khai code</h2>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-600" />
                <span>Đã copy!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy code</span>
              </>
            )}
          </button>
        </div>
        
        <div className="relative">
          <SyntaxHighlighter
            language="javascript"
            style={tomorrow}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              fontSize: '14px',
              lineHeight: '1.5'
            }}
          >
            {algorithm.content.code}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ví dụ minh họa</h2>
        <div className="space-y-4">
          {algorithm.content.examples.map((example, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/70">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Input:</h4>
                  <code className="bg-gray-800 text-gray-100 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded text-sm">{example.input}</code>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Output:</h4>
                  <code className="bg-gray-800 text-gray-100 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded text-sm">{example.output}</code>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold text-gray-900 mb-2">Giải thích:</h4>
                <p className="text-gray-700 dark:text-gray-100 text-sm">{example.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Practice Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <Link
          to="/practice"
          className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-3"
        >
          <Play className="h-5 w-5" />
          <span>Thực hành ngay</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default AlgorithmDetail 