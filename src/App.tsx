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
  Volume2
} from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Headphones className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">AudioPremium</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">เข้าสู่ระบบ</button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
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
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
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
      <button className={`w-full py-2 rounded-lg ${
        featured 
          ? 'bg-white text-indigo-600 hover:bg-gray-100' 
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        เริ่มต้นใช้งาน
      </button>
    </div>
  );
}

export default App;