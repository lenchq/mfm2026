export const tracksEn = [
  { id: 'dizayn', name: 'Design', short: 'Designer', color: 'blue', description: 'Create visual interfaces, brands, websites, and digital products.', image: 'images/design.webp', companies: ['Yandex', 'VK', 'Sber', 'T-Bank', 'Ozon', 'Avito', 'MTS'], videos: ['Recreate an app screen in Figma in 10 minutes', '3 mistakes beginner UX/UI designers make', 'What to include in your first portfolio', 'How to choose a font for an interface'], stages: [
    ['Explore the profession', ['What a digital designer does', 'Composition and visual hierarchy basics', 'Color in interfaces', 'Typography', 'UX/UI, graphic, and product design'], ['Create a mood board for an app', 'Find 5 well-designed interfaces', 'Choose a color palette']],
    ['Design tools', ['Introduction to Figma', 'Frames, grids, and components', 'Auto Layout', 'Working with a design system'], ['Recreate a screen from a reference', 'Create buttons and input fields', 'Build the first screen of a landing page']],
    ['UX and interface planning', ['User scenarios', 'User flow', 'UX research basics', 'Prototyping'], ['Map out a registration user flow', 'Create a 4-screen prototype', 'Analyze three competitors']],
    ['Portfolio project', [], ['Develop an app concept', 'Design 5–7 key screens', 'Write a case study: challenge, process, solution', 'Prepare a presentation']]
  ] },
  { id: 'ai-i-big-data', name: 'AI and Big Data', short: 'AI and Data', color: 'orange', description: 'Work with data, train models, and build smart digital solutions.', image: 'images/ai.jpeg', companies: ['Yandex', 'Sber', 'VK', 'T-Bank', 'MTS AI', 'Kaspersky', 'Ozon Tech', 'Gazprombank.Tech'], videos: ['Datasets explained in simple terms', 'How Python helps analyze data', 'Your first chart in Pandas', 'How a neural network works: a one-minute explanation'], stages: [
    ['Data and programming fundamentals', ['What data analysts and AI specialists do', 'Data and datasets', 'Python basics', 'Variables, conditionals, loops, and functions', 'Jupyter Notebook'], ['Open Google Colab', 'Write a calculator', 'Load a CSV file', 'Find missing values']],
    ['Data analysis and visualization', ['Pandas and NumPy', 'Data cleaning and preparation', 'Statistics basics', 'Visualization with Matplotlib'], ['Analyze sales', 'Create a chart', 'Find a popular product', 'Draw a conclusion from the data']],
    ['Introduction to artificial intelligence', ['Machine learning', 'Training and test sets', 'Classification and regression', 'Neural networks', 'AI ethics and safety'], ['Train a model in Google Colab', 'Classify data', 'Compare two models', 'Describe the limitations of a model']],
    ['Final project', [], ['Choose an open dataset', 'Clean and analyze the data', 'Create 3 visualizations', 'Draw conclusions', 'Document your project on GitHub']]
  ] },
  { id: 'robototehnika-i-bpla', name: 'Robotics and UAVs', short: 'Robots and UAVs', color: 'green', description: 'Design robots, control drones, and create technology for the real world.', image: 'images/robotics.jpeg', companies: ['Yandex', 'Sber', 'Rostelecom', 'Geoscan', 'Cognitive Pilot', 'ROBBO JSC', 'Rosatom'], videos: ['The components of a quadcopter', 'What a flight controller does', 'Your first Arduino project', 'How ultrasonic sensors work'], stages: [
    ['Introduction to engineering systems', ['Robots and UAVs', 'Electronics basics', 'Voltage, current, and resistance', 'Sensors, motors, and controllers', 'Safety when working with electronics'], ['Build a circuit in a simulator', 'Explore Arduino components', 'Connect an LED', 'Create a wiring diagram']],
    ['Device programming', ['Introduction to Arduino', 'C/C++ for microcontrollers', 'Reading sensor data', 'Controlling servo motors'], ['Program an LED', 'Connect a distance sensor', 'Display sensor readings', 'Control a servo motor']],
    ['UAV fundamentals', ['Quadcopter components', 'Frame, motors, and flight controller', 'Flight and stabilization principles', 'Safe operation guidelines'], ['Study a quadcopter diagram', 'Create a safety checklist', 'Try a flight simulator']],
    ['Engineering project', [], ['Describe the purpose of your device', 'Choose components', 'Prepare an assembly diagram', 'Present your project']]
  ] }
];
export const discussionsEn = [
  ['How do I get started with Figma?', 'What exercises will help me understand the interface and components?', 12, '2 hours ago'],
  ['How can a designer build their first portfolio?', 'Do I need real projects, or can I start with practice concepts?', 8, 'yesterday'],
  ['Mobile app interface review', 'How can I improve the composition of my first screen?', 15, 'yesterday'],
  ['Which fonts should I use in interfaces?', 'Share some free fonts for Russian-language projects.', 6, '3 days ago'],
  ['Python for data analysis: where do I start?', 'What topics should I learn before Pandas and visualization?', 18, '1 hour ago'],
  ['Where can I find open datasets?', 'I am looking for data on sales, transport, sports, or the environment.', 11, 'today'],
  ['What is the difference between AI, ML, and data science?', 'I want to understand the career options and choose a field.', 24, 'today'],
  ['I need help cleaning a CSV file', 'How do I handle missing and duplicate values?', 9, '2 days ago'],
  ['Which Arduino kit should I choose as a beginner?', 'Can you recommend a basic kit with sensors for my first projects?', 14, '3 hours ago'],
  ['My first project with a distance sensor', 'The HC-SR04 readings fluctuate too much. What am I doing wrong?', 7, 'today'],
  ['What skills do I need to work with UAVs?', 'Electronics, programming, piloting — where should I start?', 16, 'yesterday'],
  ['Safe quadcopter takeoff: a checklist', 'What should I check before my first flight?', 10, '4 days ago']
].map((item, i) => ({ title: item[0], text: item[1], replies: item[2], date: item[3], track: tracksEn[Math.floor(i / 4)].id }));
