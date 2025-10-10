# Lost Pixel Demo Project

Bu proje, Lost Pixel ile visual regression testing yapmak için oluşturulmuş bir demo projesidir.

## 🚀 Özellikler

- **React + TypeScript + Vite** - Modern frontend stack
- **Storybook** - Component development ve documentation
- **Lost Pixel** - Visual regression testing
- **GitHub Actions** - CI/CD pipeline

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Storybook'u başlat
npm run storybook

# Lost Pixel testlerini çalıştır
npx lost-pixel
```

## 🧪 Testing

Bu proje Lost Pixel kullanarak visual regression testing yapar:

1. Storybook build edilir
2. Lost Pixel her story için screenshot alır
3. Baseline ile karşılaştırma yapılır
4. Farklılıklar raporlanır

## 🔧 Konfigürasyon

- `lostpixel.config.ts` - Lost Pixel konfigürasyonu
- `.github/workflows/lost-pixel.yml` - GitHub Actions workflow
- `.storybook/` - Storybook konfigürasyonu

## 📚 Daha Fazla Bilgi

- [Lost Pixel Documentation](https://docs.lost-pixel.com/)
- [Storybook Documentation](https://storybook.js.org/docs)
