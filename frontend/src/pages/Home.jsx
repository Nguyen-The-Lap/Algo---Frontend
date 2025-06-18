import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Code, Target, BookOpen, Users, Zap, TrendingUp } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Học Thuật Toán',
      description: 'Khám phá các thuật toán cơ bản đến nâng cao với giải thích chi tiết và ví dụ minh họa.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30'
    },
    {
      icon: Target,
      title: 'Luyện Tập Thực Hành',
      description: 'Thực hành với các bài tập từ dễ đến khó để củng cố kiến thức.',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/30'
    },
    {
      icon: BookOpen,
      title: 'Tài Liệu Chi Tiết',
      description: 'Tài liệu học tập được biên soạn kỹ lưỡng với nhiều ví dụ thực tế.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30'
    },
    {
      icon: Users,
      title: 'Cộng Đồng Học Tập',
      description: 'Tham gia thảo luận và chia sẻ kiến thức với cộng đồng lập trình viên.',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/30'
    }
  ]

  const stats = [
    { icon: Zap, label: 'Thuật toán', value: '50+' },
    { icon: Target, label: 'Bài tập', value: '200+' },
    { icon: Users, label: 'Người học', value: '1000+' },
    { icon: TrendingUp, label: 'Tỷ lệ thành công', value: '95%' }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Học <span className="text-primary-600 dark:text-primary-400">Thuật Toán</span>
          <br />
          Một Cách Dễ Dàng
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Khám phá thế giới thuật toán thông qua các bài học tương tác, 
          ví dụ minh họa trực quan và bài tập thực hành.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/algorithms" className="btn-primary text-lg px-8 py-3">
            Bắt đầu học ngay
          </Link>
          <Link to="/practice" className="btn-secondary text-lg px-8 py-3">
            Luyện tập
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          )
        })}
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.bgColor} ${feature.color} rounded-lg mb-4`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          )
        })}
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center py-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu hành trình học thuật toán?</h2>
        <p className="text-xl mb-8 opacity-90">
          Tham gia cùng hàng nghìn lập trình viên khác trong việc nâng cao kỹ năng thuật toán.
        </p>
        <Link to="/algorithms" className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200">
          Khám phá ngay
        </Link>
      </motion.section>
    </div>
  )
}

export default Home 