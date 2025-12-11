# Fintech Case - Finansal Dashboard Uygulaması

Modern bir fintech dashboard uygulaması. Next.js 16, TypeScript ve React Query ile geliştirilmiş, kullanıcı kimlik doğrulama, finansal özet, işletme sermayesi takibi, cüzdan yönetimi ve işlem geçmişi gibi özellikler sunar.

Vercel Link:https://fintech-case-swart.vercel.app/

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [API Yapısı](#api-yapısı)
- [Özellikler Detayı](#özellikler-detayı)
- [Geliştirme](#geliştirme)

## ✨ Özellikler

### Kimlik Doğrulama
- Kullanıcı girişi (Login)
- Kullanıcı kaydı (Register)
- Oturum yönetimi (Session Management)
- Token tabanlı kimlik doğrulama
- Otomatik token yenileme
- Route koruması (Middleware)

### Dashboard
- **Finansal Özet (Financial Summary)**
  - Toplam bakiye
  - Toplam harcama
  - Toplam tasarruf
  - Yüzdelik değişim göstergeleri

- **İşletme Sermayesi (Working Capital)**
  - Gelir ve gider grafikleri
  - Zaman periyodu seçimi (7 gün, 2 hafta, 1 ay, 6 ay)
  - İnteraktif line chart

- **Son İşlemler (Recent Transactions)**
  - Son işlemlerin listelenmesi
  - İşlem detayları
  - Filtreleme ve sıralama

- **Cüzdan (Wallet)**
  - Cüzdan bakiyesi
  - Para birimi bilgisi
  - Hızlı erişim

- **Planlanmış Transferler (Scheduled Transfers)**
  - Gelecekteki transferlerin listesi
  - Transfer detayları

### Kullanıcı Arayüzü
- Responsive tasarım (mobil, tablet, desktop)
- Modern ve kullanıcı dostu arayüz
- Loading skeleton'ları
- Toast bildirimleri (Sonner)
- Dark mode desteği (next-themes)
- Özelleştirilebilir sidebar
- Kullanıcı profil dropdown menüsü

## 🛠 Teknolojiler

### Core
- **Next.js 16.0.7** - React framework (App Router)
- **React 19.2.0** - UI kütüphanesi
- **TypeScript 5** - Tip güvenliği

### State Management & Data Fetching
- **TanStack Query (React Query) 5.90.12** - Server state yönetimi
- **Zustand 5.0.9** - Client state yönetimi (Auth)

### HTTP Client
- **Axios 1.13.2** - HTTP istekleri
- Request/Response interceptors
- Otomatik token ekleme
- Token yenileme mekanizması

### Form Management
- **React Hook Form 7.68.0** - Form yönetimi
- **Zod 4.1.13** - Schema validasyonu
- **@hookform/resolvers 5.2.2** - Zod entegrasyonu

### UI Components
- **Radix UI** - Erişilebilir UI primitives
  - Avatar, Dialog, Dropdown Menu, Label, Select, Separator, Tooltip
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React 0.556.0** - Icon kütüphanesi
- **Sonner 2.0.7** - Toast bildirimleri
- **next-themes 0.4.6** - Tema yönetimi

### Charts & Visualization
- **Recharts 2.15.4** - React chart kütüphanesi
- **ECharts 6.0.0** - Grafik kütüphanesi

### Utilities
- **currency.js 2.0.4** - Para birimi formatlama
- **clsx 2.1.1** - Class name birleştirme
- **tailwind-merge 3.4.0** - Tailwind class birleştirme
- **class-variance-authority 0.7.1** - Component varyantları

### Development Tools
- **ESLint 9** - Code linting
- **Prettier 3.7.4** - Code formatting
- **TypeScript** - Tip kontrolü
- **@svgr/webpack** - SVG component desteği

## 📁 Proje Yapısı

```
fintech-case/
├── public/                    # Statik dosyalar
│   ├── icons/                 # SVG iconlar
│   └── images/                # Görseller
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (main)/            # Ana layout grubu
│   │   │   ├── dashboard/     # Dashboard sayfası
│   │   │   └── layout.tsx     # Ana layout
│   │   ├── (users)/           # Kullanıcı layout grubu
│   │   │   ├── login/         # Giriş sayfası
│   │   │   ├── register/      # Kayıt sayfası
│   │   │   └── layout.tsx     # Kullanıcı layout
│   │   ├── layout.tsx         # Root layout
│   │   └── middleware.ts      # Route koruması
│   │
│   ├── features/              # Feature-based modüller
│   │   ├── dashboard/         # Dashboard özellikleri
│   │   │   ├── api/           # API hooks ve servisler
│   │   │   ├── components/    # Dashboard componentleri
│   │   │   ├── types/         # TypeScript tipleri
│   │   │   └── view/          # View componentleri
│   │   └── users/             # Kullanıcı özellikleri
│   │       ├── login/         # Login modülü
│   │       ├── register/      # Register modülü
│   │       └── user/          # Kullanıcı profil modülü
│   │
│   ├── shared/                # Paylaşılan kod
│   │   ├── api/               # API yapılandırması
│   │   │   └── httpClient/    # Axios yapılandırması
│   │   ├── components/        # Paylaşılan componentler
│   │   │   ├── auth-hero/     # Auth sayfa hero
│   │   │   ├── chart/         # Chart componentleri
│   │   │   ├── icons/         # Icon componentleri
│   │   │   ├── main-layout/   # Ana layout componentleri
│   │   │   ├── sidebar/       # Sidebar componenti
│   │   │   ├── transaction/   # Transaction componentleri
│   │   │   └── ui/            # UI primitives
│   │   ├── hooks/             # Custom hooks
│   │   ├── types/             # Paylaşılan tipler
│   │   └── utils/             # Utility fonksiyonları
│   │
│   └── store/                 # State management
│       └── useAuthStore.ts    # Auth state (Zustand)
│
├── .gitignore
├── components.json            # shadcn/ui config
├── eslint.config.mjs         # ESLint config
├── next.config.ts            # Next.js config
├── package.json
├── postcss.config.mjs        # PostCSS config
├── tsconfig.json             # TypeScript config
└── README.md
```

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm, yarn, pnpm veya bun

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd fintech-case
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Ortam değişkenlerini ayarlayın:**
`.env.local` dosyası oluşturun ve gerekli değişkenleri ekleyin:
```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
```

4. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

5. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 📖 Kullanım

### Giriş Yapma
1. Ana sayfada otomatik olarak `/login` sayfasına yönlendirilirsiniz
2. Email ve şifre ile giriş yapın
3. Başarılı giriş sonrası `/dashboard` sayfasına yönlendirilirsiniz

### Kayıt Olma
1. Login sayfasından "Sign up" linkine tıklayın
2. Gerekli bilgileri doldurun
3. Kayıt sonrası otomatik giriş yapılır

### Dashboard Kullanımı
- **Finansal Özet:** Toplam bakiye, harcama ve tasarruf bilgilerini görüntüleyin
- **İşletme Sermayesi:** Grafik üzerinden gelir-gider analizi yapın, zaman periyodu seçin
- **Son İşlemler:** En son yapılan işlemleri inceleyin
- **Cüzdan:** Cüzdan bakiyenizi kontrol edin
- **Planlanmış Transferler:** Gelecekteki transferlerinizi görüntüleyin

### Çıkış Yapma
Sidebar'dan "Logout" butonuna tıklayarak çıkış yapabilirsiniz.

## 🔐 Ortam Değişkenleri

| Değişken | Açıklama | Zorunlu |
|----------|----------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL | Evet |

Örnek `.env.local` dosyası:
```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

## 🌐 API Yapısı

### HTTP Client Yapılandırması
- Base URL: `NEXT_PUBLIC_API_BASE_URL` ortam değişkeninden alınır
- Timeout: 15 saniye
- Credentials: Cookie tabanlı kimlik doğrulama
- Interceptors:
  - **Request:** Access token otomatik ekleme
  - **Response:** 401 hatalarında token yenileme

### API Endpoints

#### Authentication
- `POST /users/login` - Kullanıcı girişi
- `POST /users/register` - Kullanıcı kaydı
- `POST /users/logout` - Kullanıcı çıkışı
- `POST /users/refresh-token` - Token yenileme
- `GET /users/profile` - Kullanıcı profili

#### Dashboard
- `GET /financial/summary` - Finansal özet
- `GET /working-capital` - İşletme sermayesi
- `GET /wallet` - Cüzdan bilgisi
- `GET /transactions/recent` - Son işlemler
- `GET /transfers/scheduled` - Planlanmış transferler

### Response Format
Tüm API yanıtları şu formatta döner:
```typescript
{
  data: T,
  message?: string,
  success: boolean
}
```

## 🎨 Özellikler Detayı

### Authentication Flow
1. Kullanıcı login/register yapar
2. Access token cookie'ye kaydedilir
3. Token Zustand store'da saklanır
4. Her API isteğinde token otomatik eklenir
5. Token süresi dolduğunda otomatik yenilenir
6. 401 hatası alındığında kullanıcı login sayfasına yönlendirilir

### Route Protection
- Middleware ile korumalı route'lar kontrol edilir
- `/dashboard` ve `/settings` korumalı route'lardır
- Token yoksa `/login` sayfasına yönlendirilir
- Token varsa ve auth route'larındaysa `/dashboard`'a yönlendirilir

### Data Fetching Strategy
- **Server-side:** Dashboard sayfası server component olarak render edilir
- **Prefetching:** Sayfa yüklenmeden önce tüm veriler prefetch edilir
- **Hydration:** React Query ile client-side hydration yapılır
- **Caching:** TanStack Query cache mekanizması kullanılır
- **Refetching:** Stale data otomatik yenilenir

### Component Architecture
- **Feature-based:** Her özellik kendi modülünde
- **Separation of Concerns:** API, components, types, views ayrılmış
- **Reusability:** Shared components paylaşılan kullanım için
- **Type Safety:** Tüm componentler TypeScript ile tip güvenli

### UI/UX Features
- **Loading States:** Skeleton componentleri ile loading gösterimi
- **Error Handling:** Toast bildirimleri ile hata mesajları
- **Responsive Design:** Mobil-first yaklaşım
- **Accessibility:** Radix UI ile erişilebilir componentler
- **Dark Mode:** next-themes ile tema desteği

## 🛠 Geliştirme

### Scripts
```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linting
npm run lint
```

### Code Style
- ESLint ile code linting
- Prettier ile code formatting
- TypeScript strict mode aktif

### Best Practices
- Feature-based folder structure
- Server/Client component ayrımı
- Type-safe API calls
- Error boundary kullanımı
- Loading ve error state yönetimi

## 📝 Notlar

- Proje Next.js 16 App Router kullanmaktadır
- Server Components ve Client Components ayrımı yapılmıştır
- SVG dosyaları `@svgr/webpack` ile React component olarak yüklenir
- Cookie tabanlı authentication kullanılmaktadır
- API istekleri hem server-side hem client-side yapılabilir

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje özel bir projedir.

---

**Geliştirici Notları:**
- Tüm API endpoint'leri backend ile uyumlu olmalıdır
- Environment variables production'da mutlaka ayarlanmalıdır
- Token güvenliği için HTTPS kullanılmalıdır
- Error handling ve logging production için geliştirilmelidir
