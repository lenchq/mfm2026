// Five question/answer pairs transcribed from docs/crads-quiz.jpg and docs/cards-answers.jpg.
// These references cover design only; other tracks do not reuse unrelated questions.
export const designQuiz = [
  {
    theme: 'lime', icon: '♕',
    question: ['Какое утверждение лучше всего описывает дизайн в современном бизнесе?', 'Which statement best describes design in modern business?'],
    options: [
      ['Это просто красивая картинка', 'It is just a pretty picture'],
      ['Это инструмент, который напрямую влияет на прибыль, лояльность клиентов и конкурентоспособность', 'It is a tool that directly affects profit, customer loyalty and competitiveness'],
      ['Это только про логотип', 'It is only about the logo'],
      ['Это не важно, если есть хороший продукт', 'It does not matter if the product is good']
    ], correct: 1,
    title: ['Дизайн в бизнесе', 'Design in business'],
    explanation: ['Сегодня это инструмент, который напрямую влияет на прибыль, лояльность клиентов и конкурентоспособность.', 'Today, design is a tool that directly affects profit, customer loyalty and competitiveness.'],
    takeaway: ['Хороший дизайн не просто украшает, он работает на результат.', 'Good design does more than decorate. It delivers results.']
  },
  {
    theme: 'pink', icon: '☆',
    question: ['Что такое брендинг?', 'What is branding?'],
    options: [
      ['Это только реклама', 'It is only advertising'],
      ['Это то, как бизнес «выглядит» в глазах потребителя. Логотип, шрифты, цветовая палитра.', 'It is how a business looks to the consumer: its logo, fonts and color palette.'],
      ['Это только про дизайн упаковки', 'It is only about packaging design'],
      ['Это про цену и акции', 'It is about pricing and promotions']
    ], correct: 1,
    title: ['Брендинг', 'Branding'],
    explanation: ['Это то, как бизнес «выглядит» в глазах потребителя.', 'It is how a business looks to the consumer.'],
    items: [['Логотип', 'Logo'], ['Шрифты', 'Fonts'], ['Цветовая палитра', 'Color palette']],
    takeaway: ['Это помогает компании быть узнаваемой.', 'It helps make a company recognizable.']
  },
  {
    theme: 'olive', icon: '♧',
    question: ['Что такое ценности через визуал и цвета?', 'What are values expressed through visuals and color?'],
    options: [
      ['Это про яркие и кричащие цвета', 'It is about bright, loud colors'],
      ['Это визуальные элементы, которые отражают ценности бренда. Например, экологичный бренд использует крафтовые текстуры и приглушённые природные цвета.', 'These are visual elements that reflect brand values. For example, an eco-friendly brand uses kraft textures and muted natural colors.'],
      ['Это только логотипы и шрифты', 'It is only logos and fonts'],
      ['Это не имеет значения', 'It does not matter']
    ], correct: 1,
    title: ['Ценности через визуал и цвета', 'Values through visuals and color'],
    explanation: ['Например, экологичный бренд использует крафтовые текстуры и приглушённые природные цвета.', 'For example, an eco-friendly brand uses kraft textures and muted natural colors.'],
    takeaway: ['Цвета говорят о ценностях без слов.', 'Colors communicate values without words.']
  },
  {
    theme: 'purple', icon: '♡',
    question: ['Что такое сервис-дизайн?', 'What is service design?'],
    options: [
      ['Только разработка сайта или приложения', 'Only developing a website or app'],
      ['Это проектирование не только цифрового продукта, но и всего опыта взаимодействия клиента с компанией.', 'It is designing not just a digital product, but the entire customer experience with a company.'],
      ['Это про логистику и доставку', 'It is about logistics and delivery'],
      ['Это только про обслуживание в офисе', 'It is only about in-office service']
    ], correct: 1,
    title: ['Сервис-дизайн', 'Service design'],
    explanation: ['Это проектирование не только цифрового продукта, но и всего опыта взаимодействия клиента с компанией.', 'It is designing not just a digital product, but the entire customer experience with a company.'],
    items: [['Первый контакт', 'First contact'], ['Взаимодействие в точке', 'Interaction at the venue'], ['Эмоции клиента', 'Customer emotions'], ['Лояльность', 'Loyalty']],
    takeaway: ['Это целостный опыт, а не просто продукт.', 'It is a complete experience, not just a product.']
  },
  {
    theme: 'ink', icon: '↗',
    question: ['Главная идея дизайна в бизнесе?', 'What is the main purpose of design in business?'],
    options: [
      ['Это про красоту и эстетику', 'It is about beauty and aesthetics'],
      ['Это про работу на достижение целей бизнеса через удобство для клиента.', 'It is about achieving business goals through customer convenience.'],
      ['Это про креативность команды', 'It is about team creativity'],
      ['Это про то, чтобы быть модным', 'It is about being trendy']
    ], correct: 1,
    title: ['Как это работает на примере?', 'How does it work in practice?'],
    explanation: ['В примере с референса Starscoffee проектирует каждый шаг клиента в кофейне так, чтобы было предсказуемо, уютно и технологично — это и есть сервис-дизайн.', 'In the reference example, Starscoffee designs each step of the café experience to feel predictable, comfortable and seamless. That is service design.'],
    items: [['Удобное приложение и заказ', 'Easy app and ordering'], ['Быстрая и понятная зона выдачи', 'Fast, clear pickup area'], ['Уютная атмосфера в кофейне', 'A welcoming café atmosphere'], ['Бонусы и персональные предложения', 'Rewards and personal offers']],
    takeaway: ['Больше, чем просто кофе!', 'More than just coffee!']
  }
];
