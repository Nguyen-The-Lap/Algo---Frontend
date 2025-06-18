import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, Clock, Zap, Tag } from 'lucide-react'
import { algorithms, categories, difficulties } from '../data/algorithms'

const Algorithms = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  const filteredAlgorithms = useMemo(() => {
    return algorithms.filter(algorithm => {
      const matchesSearch = algorithm.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          algorithm.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          algorithm.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = !selectedCategory || algorithm.category === selectedCategory
      const matchesDifficulty = !selectedDifficulty || algorithm.difficulty === selectedDifficulty
      
      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchTerm, selectedCategory, selectedDifficulty])

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Dễ': return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'Trung bình': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
      case 'Khó': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
    }
  }

  const getCategoryColor = (category) => {
    const categoryData = categories.find(cat => cat.name === category)
    return categoryData ? categoryData.color : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Khám Phá Thuật Toán</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Học và thực hành các thuật toán cơ bản đến nâng cao với giải thích chi tiết và ví dụ minh họa.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card dark:bg-gray-800">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Tìm kiếm thuật toán..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>{category.name}</option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Tất cả độ khó</option>
            {difficulties.map(difficulty => (
              <option key={difficulty.id} value={difficulty.name}>{difficulty.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-300">
          Tìm thấy <span className="font-semibold">{filteredAlgorithms.length}</span> thuật toán
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Filter className="h-4 w-4" />
          <span>Bộ lọc</span>
        </div>
      </div>

      {/* Algorithms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-gray-800"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{algorithm.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
                {algorithm.difficulty}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{algorithm.description}</p>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{algorithm.timeComplexity}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4" />
                <span>{algorithm.spaceComplexity}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(algorithm.category)}`}>
                {algorithm.category}
              </span>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                <Tag className="h-4 w-4" />
                <span className="text-xs">{algorithm.tags.length} tags</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {algorithm.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {algorithm.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                  +{algorithm.tags.length - 3}
                </span>
              )}
            </div>

            <Link
              to={`/algorithms/${algorithm.id}`}
              className="btn-primary w-full text-center"
            >
              Học ngay
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAlgorithms.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Không tìm thấy thuật toán</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm thuật toán phù hợp.
          </p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('')
              setSelectedDifficulty('')
            }}
            className="btn-secondary"
          >
            Xóa bộ lọc
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Algorithms 