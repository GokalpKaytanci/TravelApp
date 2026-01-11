React Native Navigation Projesi
Öğrenci Numarası: 220404031 Ad Soyad: Gökalp KAYTANCI

Bu proje, React Native ve React Navigation kütüphaneleri kullanılarak geliştirilmiş örnek bir mobil uygulamadır. Uygulama, Stack Navigator (Sayfalar arası geçiş) ve Bottom Tab Navigator (Alt menü) yapılarının iç içe (Nested) kullanımını, ekranlar arası parametre aktarımını ve UI özelleştirmelerini içerir.

📂 Proje Yapısı
Proje dosyaları aşağıdaki hiyerarşiye göre düzenlenmiştir:

Plaintext

ProjeAdi/
├── App.js                   # Ana uygulama dosyası (Navigation Container, Tab ve Stack yapılandırması)
├── package.json             # Proje bağımlılıkları ve scriptler
├── screens/                 # Uygulama ekranlarını barındıran klasör
│   ├── HomeScreen.js        # "Explore" sekmesinin ana ekranı (Butonlar ile detaylara yönlendirir)
│   ├── DetailsScreen.js     # Detay sayfası (Parametreleri alır ve gösterir)
│   └── SettingsScreen.js    # "Settings" sekmesinin ekranı (Statik içerik)
└── assets/                  # (Opsiyonel) Resim ve ikon dosyaları
Dosya Açıklamaları
App.js: Uygulamanın giriş noktasıdır. BottomTabNavigator ana iskeleti oluşturur. "Explore" sekmesi kendi içinde bir NativeStackNavigator barındırır. Ayrıca header stillendirmeleri (renk, font) ve tab ikon ayarları burada yapılmıştır.

screens/HomeScreen.js: Kullanıcının şehir seçimi yapabileceği ekrandır. navigation.navigate fonksiyonu ile Details ekranına veri (isim ve puan) gönderir.

screens/DetailsScreen.js: Seçilen şehrin detaylarını gösterir. route.params kullanarak gelen veriyi okur ve puana göre koşullu mesaj gösterir.

screens/SettingsScreen.js: Basit bir ayarlar/bilgi ekranıdır.

🚀 Kurulum ve Çalıştırma Talimatları
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Gereksinimler
Node.js (LTS sürümü önerilir)

Expo Go uygulaması (Fiziksel cihazda test etmek için) veya Android/iOS Simülatörü.

2. Bağımlılıkları Yükleme
Proje dizininde terminali açın ve gerekli paketleri yüklemek için şu komutu çalıştırın:

Bash

npm install
Veya yarn kullanıyorsanız:

Bash

yarn install
3. Uygulamayı Başlatma
Geliştirme sunucusunu başlatmak için:

Bash

npx expo start
4. Test Etme
Fiziksel Cihaz: Terminalde çıkan QR kodunu telefonunuzdaki Expo Go uygulaması ile taratın.

Simülatör: Terminal ekranında i (iOS için) veya a (Android için) tuşuna basarak simülatörü başlatın.

🛠 Kullanılan Teknolojiler ve Kütüphaneler
React Native

Expo

@react-navigation/native (Navigasyon çekirdeği)

@react-navigation/native-stack (Stack navigasyon için)

@react-navigation/bottom-tabs (Alt menü için)

react-native-screens & react-native-safe-area-context (Performans ve uyumluluk için)

@expo/vector-icons (İkonlar için)
