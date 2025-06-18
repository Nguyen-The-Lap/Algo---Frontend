# AlgoLearn - Nền Tảng Học Thuật Toán

AlgoLearn là một nền tảng học tập trực tuyến được thiết kế để giúp người học nắm vững các thuật toán và cấu trúc dữ liệu thông qua các bài giảng tương tác, ví dụ minh họa và bài tập thực hành.

## 🌟 Tính Năng Chính

- **Học Thuật Toán**: Khám phá các thuật toán từ cơ bản đến nâng cao với hướng dẫn chi tiết
- **Tài Liệu Phong Phú**: Truy cập vào kho tài liệu đa dạng về cấu trúc dữ liệu và thuật toán
- **Luyện Tập Thực Hành**: Thực hành với các bài tập và thử thách để nâng cao kỹ năng
- **Cộng Đồng Học Tập**: Chia sẻ kiến thức và học hỏi từ cộng đồng
- **Dark Mode**: Hỗ trợ chế độ tối để giảm mỏi mắt khi học tập

## 🚀 Công Nghệ Sử Dụng

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- React Router
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 🛠️ Cài Đặt

1. Clone repository:
```bash
git clone https://github.com/<yourusername>/algolearn.git
cd algolearn
```

2. Cài đặt dependencies:
```bash
cd frontend
npm install

cd ../backend
npm install
```

3. Tạo file .env trong thư mục backend:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Khởi chạy ứng dụng:
```bash
# Chạy backend
cd backend
npm run dev

# Chạy frontend (trong terminal khác)
cd frontend
npm run dev
```

## 📁 Cấu Trúc Dự Án

```
algolearn/
├── frontend/                # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static files
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── backend/                # Backend Node.js application
    ├── src/
    │   ├── routes/        # API routes
    │   └── server.js      # Main server file
    └── package.json
```

## 🎯 Các Tính Năng Đã Hoàn Thành

- [x] Hệ thống xác thực người dùng
- [x] Quản lý thuật toán và bài tập
- [x] Giao diện người dùng responsive
- [x] Dark mode
- [x] Tìm kiếm và lọc thuật toán
- [x] Hệ thống đánh giá và phản hồi

## 📝 Các Tính Năng Đang Phát Triển

- [ ] Hệ thống theo dõi tiến độ học tập
- [ ] Tích hợp code editor
- [ ] Hệ thống thảo luận
- [ ] Tích hợp đa ngôn ngữ
- [ ] Tối ưu hóa hiệu suất

## 🤝 Đóng Góp

Chúng tôi rất hoan nghênh mọi đóng góp từ cộng đồng. Nếu bạn muốn đóng góp, vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 Giấy Phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Liên Hệ

- Email: thelap2006@gmail.com

## 🙏 Cảm Ơn

Cảm ơn bạn đã quan tâm đến dự án AlgoLearn. Chúng tôi hy vọng nền tảng này sẽ giúp ích cho việc học tập của bạn!
