# MERN Stack Authentication App

Modern **MongoDB, Express.js, React.js ve Node.js** (MERN Stack) teknolojileriyle geliştirilmiş, kullanıcı kimlik doğrulama sistemi içeren web uygulaması.

---

## 🖥️ Kullanılan Teknolojiler

**Frontend:**

![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

**Güvenlik ve Doğrulama:**

![bcrypt](https://img.shields.io/badge/bcrypt-black?style=for-the-badge&logo=npm&logoColor=white)
![validator](https://img.shields.io/badge/Validator-FF6B6B?style=for-the-badge&logo=npm&logoColor=white)

---

## 🎯 Temel Özellikler

### Kimlik Doğrulama Sistemi
- Güvenli kullanıcı kayıt işlemi
- Kullanıcı giriş sistemi
- Şifre hasleme (bcrypt)
- Form doğrulama (validator)

### Frontend Özellikleri
- Modern tasarım (Bootstrap)
- React Router ile sayfa yönlendirme
- Toast bildirimler (react-hot-toast)
- Telefon numarası girişi desteği

### Backend API
- RESTful API yapısı
- CORS desteği
- MongoDB veritabanı entegrasyonu
- Express.js server

---

## 📁 Proje Yapısı

```
├── client/                 # React Frontend
│   ├── src/
|   |   ├── axios/          # axios instance
│   │   ├── Components/     # React bileşenleri
│   │   ├── Screens/        # Sayfa bileşenleri
│   │   ├── App.js         # Ana uygulama
│   │   └── index.js       # React giriş noktası
│   └── package.json
├── server/                 # Node.js Backend
│   ├── models/            # Database modelleri
│   ├── Routers/           # API rotaları
│   ├── index.js           # Server giriş noktası
│   └── package.json
└── README.md
```

---

## 🚀 Kurulum

### Ön Koşullar
- Node.js (v14 veya üzeri)
- MongoDB
- npm veya yarn

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/ciftciyakup/mern-stack_authentication-app.git
cd mern-stack_authentication-app
```

### 2. Backend Kurulumu
```bash
cd server
npm install
```

### 3. Frontend Kurulumu
```bash
cd ../client
npm install
```

### 4. Ortam Değişkenlerini Ayarlayın
`server` klasöründe `.env` dosyası oluşturun:
```env
DB_CONNECTION_STRING=mongodb://localhost:27017/your-database-name
```

### 5. Uygulamayı Başlatın

**Backend sunucuyu başlatın:**
```bash
cd server
npm start
```

**Frontend uygulamayı başlatın:**
```bash
cd client
npm start
```

Uygulama şu adreslerde çalışacak:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🔧 Kullanılan Paketler

### Frontend Bağımlılıkları
- **React** (^18.2.0) - UI kütüphanesi
- **React Router DOM** (^6.14.1) - Sayfa yönlendirme
- **React Bootstrap** (^2.8.0) - UI bileşenleri
- **Axios** (^1.4.0) - HTTP istekleri
- **React Hot Toast** (^2.4.1) - Bildirimler
- **React Phone Number Input** (^3.2.25) - Telefon numarası girişi

### Backend Bağımlılıkları
- **Express** (^4.18.2) - Web framework
- **Mongoose** (^7.3.1) - MongoDB ODM
- **bcryptjs** (^2.4.3) - Şifre şifreleme
- **CORS** (^2.8.5) - Cross-origin resource sharing
- **Validator** (^13.9.0) - Veri doğrulama
- **Dotenv** (^16.3.1) - Ortam değişkenleri

---

## 📱 Sayfalar

- **Ana Sayfa** (`/`) - Kullanıcı dashboard
- **Giriş** (`/signin`) - Kullanıcı girişi
- **Kayıt** (`/signup`) - Yeni kullanıcı kaydı

---

## 🛡️ Güvenlik

- Şifreler bcrypt ile hash'lenir
- CORS politikaları uygulanır
- Form verileri validator ile doğrulanır
- Güvenli HTTP istekleri

---

## 🔄 API Endpoints

### Kullanıcı İşlemleri
- `POST /users/register` - Yeni kullanıcı kaydı
- `POST /users/login` - Kullanıcı girişi
- `GET /users/profile` - Kullanıcı profili (korumalı)

---

## 📝 Geliştirme Notları

### Mevcut Özellikler
- ✅ Temel kimlik doğrulama sistemi
- ✅ React Router entegrasyonu
- ✅ MongoDB bağlantısı

---

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

## 📞 İletişim

Proje hakkında sorularınız için:

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yakup-ciftci)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ciftciyakup)

---

> Bu proje, modern web uygulamaları için temel kimlik doğrulama sistemini gösterir.  
> MERN stack teknolojileri kullanılarak güvenli ve ölçeklenebilir bir yapı sunar.
