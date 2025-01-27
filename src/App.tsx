import React, { useState } from 'react';
import { 
  Headphones, 
  BookOpen, 
  Newspaper, 
  Mic, 
  FileText,
  Crown,
  Play,
  Pause,
  Volume2,
  X,
  Mail,
  Lock,
  User,
  Phone
} from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!loginData.email || !loginData.password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    console.log('Logging in with:', loginData);
    setShowLogin(false);
    setLoginData({ email: '', password: '' });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!registerData.fullName || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน');
      return;
    }

    if (registerData.password.length < 8) {
      setError('รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      setError('อีเมลไม่ถูกต้อง');
      return;
    }

    // Phone validation (optional)
    if (registerData.phone && !/^[0-9]{10}$/.test(registerData.phone)) {
      setError('เบอร์โทรศัพท์ไม่ถูกต้อง');
      return;
    }

    console.log('Registering with:', registerData);
    setShowRegister(false);
    setRegisterData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Registration Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowRegister(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">สมัครสมาชิก</h2>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ-นามสกุล
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={registerData.fullName}
                    onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="ชื่อ นามสกุล"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  อีเมล
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  เบอร์โทรศัพท์ (ไม่บังคับ)
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    value={registerData.phone}
                    onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="0812345678"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ยืนยันรหัสผ่าน
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                สมัครสมาชิก
              </button>
            </form>
            
            <div className="mt-4 text-center text-sm text-gray-600">
              มีบัญชีอยู่แล้ว?{' '}
              <button 
                className="text-indigo-600 hover:text-indigo-700"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">เข้าสู่ระบบ</h2>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  อีเมล
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  รหัสผ่าน
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                เข้าสู่ระบบ
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">
                ลืมรหัสผ่าน?
              </a>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              ยังไม่มีบัญชี?{' '}
              <button 
                className="text-indigo-600 hover:text-indigo-700"
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Headphones className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">AudioPremium</span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                เข้าสู่ระบบ
              </button>
              <button 
                onClick={() => setShowRegister(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            แปลงเนื้อหาคุณภาพให้เป็นเสียง
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ฟังบทความ, ข่าวสาร, และพอดแคสต์คุณภาพได้ทุกที่ทุกเวลา
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setShowRegister(true)}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
            >
              <Crown className="w-5 h-5 mr-2" />
              ทดลองใช้ฟรี 7 วัน
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-indigo-600" />}
            title="หนังสือเสียง"
            description="ฟังหนังสือและบทความยาวได้อย่างสะดวก"
          />
          <FeatureCard
            icon={<Newspaper className="w-8 h-8 text-indigo-600" />}
            title="ข่าวสาร"
            description="ข่าวสารและบทความคุณภาพจากแหล่งที่น่าเชื่อถือ"
          />
          <FeatureCard
            icon={<Mic className="w-8 h-8 text-indigo-600" />}
            title="พอดแคสต์"
            description="รับฟังเนื้อหาจากผู้เชี่ยวชาญในด้านต่างๆ"
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-indigo-600" />}
            title="แปลงไฟล์"
            description="แปลงไฟล์ PDF และเอกสารให้เป็นเสียง"
          />
        </div>
      </div>

      {/* Demo Player */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">ตัวอย่างเสียง</h3>
              <p className="text-sm text-gray-600">บทความ: เทคโนโลยี AI ในปี 2024</p>
            </div>
            <button 
              className="p-3 bg-indigo-100 rounded-full hover:bg-indigo-200"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 
                <Pause className="w-6 h-6 text-indigo-600" /> : 
                <Play className="w-6 h-6 text-indigo-600" />
              }
            </button>
          </div>
          <div className="space-y-4">
            <div className="h-2 bg-gray-200 rounded">
              <div className="h-2 bg-indigo-600 rounded" style={{ width: '45%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2:15</span>
              <Volume2 className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">5:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">แพ็คเกจที่เหมาะกับคุณ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="ฟรี"
            price="0"
            features={[
              'ฟังเนื้อหาพื้นฐาน',
              'จำกัด 5 บทความต่อวัน',
              'คุณภาพเสียงมาตรฐาน'
            ]}
          />
          <PricingCard
            title="พรีเมียม"
            price="199"
            featured={true}
            features={[
              'ไม่จำกัดการฟัง',
              'เนื้อหาพรีเมียมทั้งหมด',
              'คุณภาพเสียงสูง',
              'ดาวน์โหลดออฟไลน์',
              'ไม่มีโฆษณา'
            ]}
          />
          <PricingCard
            title="องค์กร"
            price="599"
            features={[
              'สิทธิ์การใช้งานหลายบัญชี',
              'เนื้อหาพรีเมียมทั้งหมด',
              'คุณภาพเสียงสูงสุด',
              'รายงานการใช้งาน',
              'API สำหรับองค์กร'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, features, featured = false }) {
  return (
    <div className={`rounded-xl p-6 ${
      featured 
        ? 'bg-indigo-600 text-white transform scale-105' 
        : 'bg-white text-gray-900'
    } shadow-lg`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold">฿{price}</span>
        <span className="text-sm">/เดือน</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Crown className="w-4 h-4 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={() => setShowRegister(true)}
        className={`w-full py-2 rounded-lg ${
          featured 
            ? 'bg-white text-indigo-600 hover:bg-gray-100' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        เริ่มต้นใช้งาน
      </button>
    </div>
  );
}

export default App;