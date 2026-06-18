// og-image.svg → og-image.png (1200x630) 래스터화. 한글 폰트(맑은 고딕) 임베드.
// 1회성 스크립트: npm run og 로 실행. 결과 PNG만 커밋하면 됨.
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const svg = readFileSync('public/og-image.svg', 'utf-8')

const koreanFonts = [
  'C:/Windows/Fonts/malgun.ttf',
  'C:/Windows/Fonts/malgunbd.ttf',
].filter((p) => existsSync(p))

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    fontFiles: koreanFonts,
    loadSystemFonts: true,
    defaultFontFamily: 'Malgun Gothic',
  },
  background: '#0a0a0a',
})

const png = resvg.render().asPng()
writeFileSync('public/og-image.png', png)
console.log(`og-image.png 생성 완료 (${png.length} bytes), 폰트: ${koreanFonts.join(', ') || 'system'}`)
