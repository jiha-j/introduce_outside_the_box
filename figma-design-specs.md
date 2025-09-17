# 홀로서기 심리학 - Figma 디자인 스펙

## 🎨 디자인 시스템

### 컬러 팔레트
```
Primary Colors:
- Blue: #3498db
- Dark Blue: #2980b9
- Dark Navy: #2c3e50
- Dark Gray: #34495e

Secondary Colors:
- Light Gray: #f8f9fa
- Medium Gray: #7f8c8d
- Text Gray: #555555
- Border Gray: #eeeeee

Gradient Colors:
- Hero Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Book Cover: linear-gradient(145deg, #34495e, #2c3e50)
- CTA Section: linear-gradient(135deg, #2c3e50 0%, #34495e 100%)
- Benefits: linear-gradient(135deg, #2ecc71, #27ae60)
```

### 타이포그래피
```
Font Family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

Font Weights:
- Light: 300
- Regular: 400
- Medium: 500
- Bold: 700

Font Sizes:
- Hero Title: 3rem (48px)
- Hero Subtitle: 1.5rem (24px)
- Page Title: 2.5rem (40px)
- Section Title: 2rem (32px)
- Chapter Title: 1.3rem (21px)
- Body Text: 1rem (16px)
- Small Text: 0.9rem (14px)
```

### 스페이싱 시스템
```
Padding/Margin:
- XS: 0.5rem (8px)
- S: 1rem (16px)
- M: 1.5rem (24px)
- L: 2rem (32px)
- XL: 3rem (48px)
- XXL: 4rem (64px)
- XXXL: 6rem (96px)

Border Radius:
- Small: 6px
- Medium: 8px
- Large: 12px
- XLarge: 20px
```

### 그림자 시스템
```
Box Shadows:
- Light: 0 3px 15px rgba(0,0,0,0.08)
- Medium: 0 5px 20px rgba(0,0,0,0.1)
- Heavy: 0 10px 30px rgba(0,0,0,0.15)
- Book: 0 15px 40px rgba(0,0,0,0.3)
```

## 📱 컴포넌트 라이브러리

### 1. Header 컴포넌트
```
구성요소:
- Logo (홀로서기 심리학)
- Navigation Menu (홈, 목차, 책 소개)

스타일:
- Background: #fff
- Box Shadow: 0 2px 10px rgba(0,0,0,0.1)
- Position: sticky, top: 0
- Height: Auto (padding: 1rem 0)
```

### 2. Hero Section
```
구성요소:
- Hero Title (3rem, bold)
- Hero Subtitle (1.5rem, medium)
- Hero Description (1.1rem, regular)
- Action Buttons (Primary + Secondary)
- Book Mockup (3D 효과)

스타일:
- Background: Hero Gradient
- Padding: 4rem 0 6rem
- Color: white
- Grid Layout: 2fr 1fr
```

### 3. Button 컴포넌트
```
Primary Button:
- Background: #3498db
- Color: white
- Padding: 12px 24px
- Border Radius: 6px
- Hover: #2980b9 + transform: translateY(-2px)

Secondary Button:
- Background: transparent
- Border: 2px solid white (or #3498db)
- Color: white (or #3498db)
- Hover: background color fill

Large Button:
- Padding: 16px 32px
- Font Size: 1.1rem
```

### 4. Chapter Card
```
구성요소:
- Chapter Number (작은 텍스트, 파란색)
- Chapter Title (1.3rem, bold)
- Chapter Subtitle (1rem, medium gray)
- Chapter Summary (body text)
- "자세히 보기" 링크

스타일:
- Background: white
- Padding: 2rem
- Border Radius: 12px
- Box Shadow: Medium
- Hover: translateY(-5px) + heavier shadow
```

### 5. Book Mockup
```
구성요소:
- 3D 책 커버 디자인
- 제목 텍스트
- 부제목 텍스트

스타일:
- Width: 200px, Height: 280px (작은 버전)
- Width: 300px, Height: 400px (큰 버전)
- Background: Book Gradient
- Transform: rotateY(-15deg)
- Hover: rotateY(0deg)
- Box Shadow: Heavy
```

### 6. Footer
```
구성요소:
- 3개 컬럼 레이아웃
- 책 정보, 링크, 연락처
- Copyright 정보

스타일:
- Background: #2c3e50
- Color: white
- Padding: 3rem 0 1rem
```

## 📄 페이지 레이아웃

### 홈페이지 (index.ejs)
```
섹션 구성:
1. Header
2. Hero Section (그라데이션 배경 + 책 목업)
3. Featured Chapters (3개 카드, 그리드)
4. Book Benefits (체크 아이콘 + 설명)
5. Target Audience (사용자 아이콘 + 설명)
6. CTA Section (진한 배경)
7. Footer

레이아웃: 컨테이너 max-width: 1200px, 중앙 정렬
```

### 목차 페이지 (chapters.ejs)
```
섹션 구성:
1. Header
2. Page Header (제목 + 설명)
3. Chapters List (10개 챕터, 세로 나열)
4. Reading Guide (3개 가이드 카드)
5. Footer

특징: 각 챕터는 구분선으로 분리
```

### 책 소개 페이지 (about.ejs)
```
섹션 구성:
1. Header
2. Page Header
3. Book Overview (큰 책 목업 + 설명)
4. Target Readers (5개 독자 유형 카드)
5. Book Benefits (5개 상세 혜택)
6. Book Structure (3개 파트 구성)
7. Reading Approach (4개 독서법)
8. Author Message (인용문 스타일)
9. CTA Section
10. Footer
```

### 챕터 상세 페이지 (chapter.ejs)
```
레이아웃:
- 2-column layout (메인 콘텐츠 + 사이드바)
- 브레드크럼 네비게이션
- 챕터 헤더 (그라데이션 배경)
- 주요 개념, 실습 팁, 성찰 질문
- 사이드바: 메타 정보, 네비게이션, 성찰 질문
```

## 🎯 Figma 파일 구성 제안

### 1. 디자인 시스템 페이지
- Color Styles
- Text Styles
- Effects (Shadows)
- Components Library

### 2. 와이어프레임 페이지
- Low-fidelity layouts for all pages

### 3. 디자인 페이지
- High-fidelity designs for all pages
- Desktop + Mobile versions

### 4. 컴포넌트 페이지
- All reusable components
- Different states (hover, active, etc.)

### 5. 프로토타입 페이지
- Interactive prototypes
- User flow demonstrations

## 📱 반응형 디자인

### 브레이크포인트
```
Desktop: 1200px+
Tablet: 768px - 1199px
Mobile: 320px - 767px
```

### 모바일 조정사항
```
- Hero: 단일 컬럼, 중앙 정렬
- Navigation: 세로 스택
- Grids: 단일 컬럼
- Typography: 크기 축소
- Padding: 축소된 간격
- Book Mockup: 작은 크기
```

## 🎨 브랜드 가이드라인

### 브랜드 컨셉
```
키워드: 성장, 독립, 심리적 안정, 따뜻함, 신뢰
색상 의미: 파란색(신뢰, 안정), 보라색(성장, 변화)
톤앤매너: 친근하면서도 전문적, 따뜻하고 격려하는
```

### 사용 가이드
```
Do:
- 깔끔하고 읽기 쉬운 디자인
- 충분한 화이트스페이스
- 일관된 컬러 사용
- 접근성 고려

Don't:
- 과도한 장식
- 읽기 어려운 색상 조합
- 일관성 없는 스타일
- 복잡한 레이아웃
```

---

이 문서를 바탕으로 Figma에서 디자인 시스템을 구축하고 페이지들을 디자인할 수 있습니다.
각 컴포넌트와 페이지의 상세 스펙이 포함되어 있어 정확한 재현이 가능합니다.