const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Book content data
const bookData = {
  title: "홀로서기 심리학",
  subtitle: "진정한 나를 찾아가는 심리적 독립의 여정",
  description: "현대 사회에서 많은 사람들이 타인에게 의존하며 살아가고 있습니다. 가족, 친구, 연인에게 감정적으로 기대며, 스스로 결정을 내리는 것을 어려워하죠. 이 책은 그런 당신에게 '심리적 독립'이라는 새로운 관점을 제시합니다.",
  targetAudience: [
    "타인의 눈치를 보며 결정을 미루는 분들",
    "혼자 있는 시간이 불안하고 두려운 분들",
    "의존적인 관계 패턴을 반복하는 분들",
    "진정한 자아를 찾고 싶은 분들",
    "건강한 경계를 설정하고 싶은 분들"
  ],
  benefits: [
    "자기 확신을 가지고 결정할 수 있게 됩니다",
    "혼자만의 시간을 즐길 수 있게 됩니다",
    "건강한 관계를 유지할 수 있게 됩니다",
    "감정적 안정감을 얻을 수 있게 됩니다",
    "진정한 자아를 발견할 수 있게 됩니다"
  ],
  chapters: [
    {
      id: 1,
      title: "의존의 뿌리를 파헤치다",
      subtitle: "어린 시절부터 형성된 심리적 의존성의 기원",
      summary: "우리는 어떻게 의존적인 존재가 되었을까요? 어린 시절의 경험이 성인이 된 지금까지 어떤 영향을 미치는지 알아보고, 의존의 심리적 메커니즘을 이해합니다.",
      keyPoints: [
        "애착 이론과 의존성의 관계",
        "어린 시절 트라우마가 미치는 영향",
        "문화적 요인과 의존성",
        "의존의 심리적 보상 시스템"
      ],
      benefits: "자신의 의존 패턴의 근본 원인을 이해하고, 변화의 출발점을 찾을 수 있습니다."
    },
    {
      id: 2,
      title: "나는 누구인가?",
      subtitle: "타인의 기대에서 벗어나 진정한 자아 찾기",
      summary: "다른 사람의 기대와 요구에 맞춰 살아온 당신, 이제 진짜 '나'가 누구인지 알아볼 때입니다. 자아 정체성을 확립하는 구체적인 방법들을 제시합니다.",
      keyPoints: [
        "자아 정체성의 구성 요소",
        "타인의 기대 vs 내 욕구 구분하기",
        "가치관 정립하기",
        "자아 탐색 실습법"
      ],
      benefits: "자신만의 가치관과 신념을 명확히 하고, 타인의 영향에서 벗어날 수 있습니다."
    },
    {
      id: 3,
      title: "감정의 주인이 되기",
      subtitle: "감정적 자립을 위한 실전 가이드",
      summary: "타인에게 감정적 위안을 구하는 대신, 스스로 감정을 조절하고 안정감을 찾는 방법을 배웁니다. 감정적 독립의 핵심 기술들을 소개합니다.",
      keyPoints: [
        "감정 인식과 표현법",
        "감정 조절 기술",
        "자기 위로법",
        "감정적 경계 설정하기"
      ],
      benefits: "다른 사람에게 의존하지 않고도 감정을 건강하게 처리할 수 있는 능력을 기를 수 있습니다."
    },
    {
      id: 4,
      title: "경계선 긋기의 기술",
      subtitle: "건강한 관계를 위한 심리적 경계 설정법",
      summary: "다른 사람의 감정이나 문제를 나의 것처럼 받아들이지 않는 법, 적절한 거리감을 유지하며 건강한 관계를 맺는 방법을 알아봅니다.",
      keyPoints: [
        "심리적 경계의 중요성",
        "경계 침범 신호 알아차리기",
        "거절하는 기술",
        "죄책감 없이 NO 말하기"
      ],
      benefits: "타인과의 관계에서 적절한 거리감을 유지하고, 자신을 보호할 수 있는 능력을 기를 수 있습니다."
    },
    {
      id: 5,
      title: "스스로 결정하는 용기",
      subtitle: "독립적 사고와 의사결정 능력 기르기",
      summary: "다른 사람의 조언에만 의존하지 않고, 스스로 생각하고 판단하여 결정을 내리는 능력을 기릅니다. 실수를 두려워하지 않는 마음가짐도 함께 다룹니다.",
      keyPoints: [
        "독립적 사고력 기르기",
        "의사결정 프로세스",
        "실패에 대한 건강한 관점",
        "자기 신뢰 구축하기"
      ],
      benefits: "자신감 있게 결정을 내리고, 그 결과에 대해 책임질 수 있는 성숙함을 기를 수 있습니다."
    },
    {
      id: 6,
      title: "혼자여도 괜찮아",
      subtitle: "고독을 친구로 만드는 심리학",
      summary: "혼자 있는 시간을 두려워하지 않고 오히려 즐길 수 있는 방법을 배웁니다. 외로움과 고독의 차이를 이해하고, 나만의 시간을 가치 있게 보내는 법을 알아봅니다.",
      keyPoints: [
        "외로움 vs 고독의 차이점",
        "혼자 시간 즐기기",
        "내적 대화의 질 높이기",
        "자기 성찰과 성장"
      ],
      benefits: "혼자 있는 시간을 통해 자아를 탐구하고, 내적 평안을 얻을 수 있습니다."
    },
    {
      id: 7,
      title: "관계 속에서도 나답게",
      subtitle: "독립성을 유지하며 사랑하는 법",
      summary: "연인이나 가족 관계에서도 자신의 정체성을 잃지 않고 건강한 관계를 유지하는 방법을 배웁니다. 상호의존이 아닌 독립적 개체로서의 사랑을 알아봅니다.",
      keyPoints: [
        "건강한 애착 관계 형성",
        "상호의존 vs 건강한 의존",
        "관계에서의 개별성 유지",
        "파트너십의 균형점"
      ],
      benefits: "사랑하는 사람과 함께 있으면서도 자신의 정체성을 유지할 수 있는 균형잡힌 관계를 만들 수 있습니다."
    },
    {
      id: 8,
      title: "내 안의 힘을 믿기",
      subtitle: "자존감과 자신감 회복 프로그램",
      summary: "낮은 자존감과 자신감 부족을 극복하고, 내 안에 있는 잠재력을 발견하는 방법을 배웁니다. 자기 효능감을 높이는 구체적인 실천법들을 제시합니다.",
      keyPoints: [
        "자존감 회복 단계별 접근",
        "자기 효능감 증진법",
        "내적 비판자 다루기",
        "성취 경험 쌓기"
      ],
      benefits: "자신을 믿고 사랑할 수 있는 건강한 자아상을 구축할 수 있습니다."
    },
    {
      id: 9,
      title: "일상 속 독립 실천법",
      subtitle: "매일매일 심리적 독립성을 기르는 습관들",
      summary: "이론에서 실천으로! 일상생활에서 쉽게 적용할 수 있는 심리적 독립 연습법들을 소개합니다. 작은 변화가 큰 성장으로 이어지는 과정을 경험해보세요.",
      keyPoints: [
        "일상 속 독립성 체크리스트",
        "단계별 실천 프로그램",
        "습관 형성의 과학",
        "지속가능한 변화 만들기"
      ],
      benefits: "매일 조금씩 실천할 수 있는 구체적인 방법들을 통해 꾸준한 성장을 이룰 수 있습니다."
    },
    {
      id: 10,
      title: "성숙한 관계로의 여정",
      subtitle: "심리적 독립이 가져다주는 진정한 만남",
      summary: "심리적으로 독립한 사람은 어떤 관계를 만들어갈까요? 의존하지도 않고 고립되지도 않는, 진정으로 성숙한 인간관계의 모습을 그려봅니다.",
      keyPoints: [
        "성숙한 관계의 특징",
        "독립성과 연결성의 균형",
        "깊이 있는 소통법",
        "지속가능한 관계 유지법"
      ],
      benefits: "진정으로 성숙하고 건강한 인간관계를 만들어갈 수 있는 능력을 갖추게 됩니다."
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { book: bookData, pageTitle: '홈' });
});

app.get('/chapter/:id', (req, res) => {
  const chapterId = parseInt(req.params.id);
  const chapter = bookData.chapters.find(ch => ch.id === chapterId);

  if (!chapter) {
    return res.status(404).render('404');
  }

  res.render('chapter', { book: bookData, chapter: chapter, pageTitle: chapter.title });
});

app.get('/chapters', (req, res) => {
  res.render('chapters', { book: bookData, pageTitle: '목차' });
});

app.get('/about', (req, res) => {
  res.render('about', { book: bookData, pageTitle: '책 소개' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { pageTitle: '페이지를 찾을 수 없습니다' });
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`http://localhost:${PORT} 에서 확인하세요.`);
});