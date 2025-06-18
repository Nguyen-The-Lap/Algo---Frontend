import { motion } from 'framer-motion'
import { Code2, BookOpen, Target, Users, Award, Heart } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Học Thuật Toán',
      description: 'Khám phá các thuật toán cơ bản đến nâng cao với hướng dẫn chi tiết và ví dụ minh họa.'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Tài Liệu Phong Phú',
      description: 'Truy cập vào kho tài liệu phong phú về cấu trúc dữ liệu và thuật toán.'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Luyện Tập Thực Hành',
      description: 'Thực hành với các bài tập và thử thách để nâng cao kỹ năng giải quyết vấn đề.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Cộng Đồng Học Tập',
      description: 'Tham gia vào cộng đồng học tập, chia sẻ kiến thức và học hỏi từ người khác.'
    }
  ]

  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'Founder & Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Trần Thị B',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      name: 'Lê Văn C',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          Về Chúng Tôi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Chúng tôi là một nhóm các lập trình viên đam mê, mong muốn chia sẻ kiến thức
          và giúp đỡ cộng đồng học tập về thuật toán và cấu trúc dữ liệu.
        </motion.p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card dark:bg-gray-800"
          >
            <div className="text-primary-600 dark:text-primary-400 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="card dark:bg-gray-800 mb-16">
        <div className="text-center">
          <Award className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Chúng tôi cam kết cung cấp nền tảng học tập tốt nhất về thuật toán và cấu trúc dữ liệu,
            giúp người học phát triển kỹ năng tư duy logic và giải quyết vấn đề.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Đội Ngũ Của Chúng Tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card dark:bg-gray-800 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="card dark:bg-gray-800 text-center">
        <Heart className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Liên Hệ Với Chúng Tôi
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Chúng tôi luôn sẵn sàng lắng nghe ý kiến và góp ý từ cộng đồng.
          Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào.
        </p>
        <a
          href="mailto:contact@example.com"
          className="btn-primary inline-flex items-center"
        >
          Gửi Email Cho Chúng Tôi
        </a>
      </div>
    </div>
  )
}

export default About 