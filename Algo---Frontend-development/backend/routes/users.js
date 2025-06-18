const express = require('express');
const router = express.Router();

// Mock data cho users - trong thực tế sẽ lấy từ database
let users = [
  {
    id: 1,
    username: 'demo_user',
    email: 'demo@algolearn.com',
    name: 'Demo User',
    progress: {
      algorithmsCompleted: 3,
      totalAlgorithms: 4,
      practiceScore: 85,
      totalPracticeTests: 5
    },
    createdAt: '2024-01-01T00:00:00.000Z'
  }
];

// GET /api/users/profile - Lấy thông tin profile người dùng
router.get('/profile', (req, res) => {
  try {
    // Trong thực tế sẽ lấy từ JWT token
    const userId = 1; // Mock user ID
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Không trả về password
    const { password, ...userProfile } = user;
    
    res.json({
      success: true,
      data: userProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user profile'
    });
  }
});

// PUT /api/users/profile - Cập nhật thông tin profile
router.put('/profile', (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = 1; // Mock user ID
    
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Cập nhật thông tin
    users[userIndex] = {
      ...users[userIndex],
      name: name || users[userIndex].name,
      email: email || users[userIndex].email
    };
    
    const { password, ...updatedUser } = users[userIndex];
    
    res.json({
      success: true,
      data: updatedUser,
      message: 'Profile updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update profile'
    });
  }
});

// GET /api/users/progress - Lấy tiến độ học tập
router.get('/progress', (req, res) => {
  try {
    const userId = 1; // Mock user ID
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    const progress = {
      algorithmsCompleted: user.progress.algorithmsCompleted,
      totalAlgorithms: user.progress.totalAlgorithms,
      completionRate: Math.round((user.progress.algorithmsCompleted / user.progress.totalAlgorithms) * 100),
      averagePracticeScore: user.progress.practiceScore,
      totalPracticeTests: user.progress.totalPracticeTests,
      lastActivity: new Date().toISOString()
    };
    
    res.json({
      success: true,
      data: progress
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch progress'
    });
  }
});

// POST /api/users/progress/algorithm - Cập nhật tiến độ thuật toán
router.post('/progress/algorithm', (req, res) => {
  try {
    const { algorithmId, completed } = req.body;
    const userId = 1; // Mock user ID
    
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Cập nhật tiến độ
    if (completed && !users[userIndex].progress.completedAlgorithms) {
      users[userIndex].progress.completedAlgorithms = [];
    }
    
    if (completed && !users[userIndex].progress.completedAlgorithms.includes(algorithmId)) {
      users[userIndex].progress.completedAlgorithms.push(algorithmId);
      users[userIndex].progress.algorithmsCompleted++;
    }
    
    res.json({
      success: true,
      data: users[userIndex].progress,
      message: 'Progress updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update algorithm progress'
    });
  }
});

// POST /api/users/progress/practice - Cập nhật điểm luyện tập
router.post('/progress/practice', (req, res) => {
  try {
    const { score, totalQuestions } = req.body;
    const userId = 1; // Mock user ID
    
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    // Cập nhật điểm luyện tập
    const currentTotalScore = users[userIndex].progress.practiceScore * users[userIndex].progress.totalPracticeTests;
    const newTotalScore = currentTotalScore + score;
    const newTotalTests = users[userIndex].progress.totalPracticeTests + 1;
    
    users[userIndex].progress.practiceScore = Math.round(newTotalScore / newTotalTests);
    users[userIndex].progress.totalPracticeTests = newTotalTests;
    
    res.json({
      success: true,
      data: {
        newScore: users[userIndex].progress.practiceScore,
        totalTests: users[userIndex].progress.totalPracticeTests
      },
      message: 'Practice score updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update practice score'
    });
  }
});

// GET /api/users/achievements - Lấy thành tích
router.get('/achievements', (req, res) => {
  try {
    const userId = 1; // Mock user ID
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }
    
    const achievements = [
      {
        id: 'first_algorithm',
        title: 'Bước đầu tiên',
        description: 'Hoàn thành thuật toán đầu tiên',
        icon: '🎯',
        unlocked: user.progress.algorithmsCompleted >= 1,
        unlockedAt: user.progress.algorithmsCompleted >= 1 ? new Date().toISOString() : null
      },
      {
        id: 'practice_master',
        title: 'Bậc thầy luyện tập',
        description: 'Đạt điểm trung bình trên 80% trong luyện tập',
        icon: '🏆',
        unlocked: user.progress.practiceScore >= 80,
        unlockedAt: user.progress.practiceScore >= 80 ? new Date().toISOString() : null
      },
      {
        id: 'algorithm_explorer',
        title: 'Khám phá thuật toán',
        description: 'Hoàn thành 5 thuật toán',
        icon: '🚀',
        unlocked: user.progress.algorithmsCompleted >= 5,
        unlockedAt: user.progress.algorithmsCompleted >= 5 ? new Date().toISOString() : null
      },
      {
        id: 'consistent_learner',
        title: 'Học viên kiên trì',
        description: 'Tham gia 10 bài luyện tập',
        icon: '📚',
        unlocked: user.progress.totalPracticeTests >= 10,
        unlockedAt: user.progress.totalPracticeTests >= 10 ? new Date().toISOString() : null
      }
    ];
    
    res.json({
      success: true,
      data: achievements
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch achievements'
    });
  }
});

module.exports = router; 