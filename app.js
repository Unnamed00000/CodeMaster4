const languages = [
  ["ru", "Русский"],
  ["en", "English"],
  ["da", "Dansk"],
  ["ka", "ქართული"],
  ["de", "Deutsch"],
];

const ui = {
  ru: {
    brand: "CodeMaster 4",
    heroEyebrow: "HTML, CSS, JavaScript, Java и профессиональная практика",
    heroTitle: "От новичка до профессионального разработчика приложений и сайтов",
    heroText:
      "Читай основу, смотри пример, выполняй много заданий и набивай руку. Курс ведёт от первых тегов до логики, интерфейсов, Java, тестирования и архитектуры.",
    lessonsMetric: "уроков пройдено",
    tasksMetric: "заданий отмечено",
    progressMetric: "прогресс курса",
    introOneTitle: "Как работает курс",
    introOneText: "Каждый урок: короткая основа, пример кода и большой набор заданий. Практика начинается сразу.",
    introTwoTitle: "Что ты изучишь",
    introTwoText: "HTML, CSS, адаптивность, JavaScript, Java, данные, API, Git, тестирование и мышление инженера.",
    introThreeTitle: "Главное правило",
    introThreeText: "Профессионализм появляется через повторение: много маленьких задач, проверка и улучшение.",
    planLabel: "План",
    planTitle: "Большая программа",
    readingTitle: "Прочитай основу",
    codeTitle: "Мини-пример",
    understandTitle: "Понять",
    practiceTitle: "Практика",
    qualityTitle: "Критерий",
    tasksLabel: "Задания",
    tasksTitle: "Много практики для этого урока",
    doneLesson: "Урок пройден",
    markLesson: "Я понял урок",
    clearLesson: "Очистить задания урока",
    projectsLabel: "Проекты",
    projectsTitle: "Портфолио от простого к серьёзному",
    lesson: "Урок",
    settingsEyebrow: "панель приложения",
    settingsTitle: "Настройки",
    languageTitle: "Язык приложения",
    languageDialogEyebrow: "выбор языка",
    languageDialogTitle: "Выбери язык",
    themeTitle: "Тема",
    themeSwitchLabel: "Тёмная тема",
    effectsTitle: "Звук и вибрация",
    soundSwitchLabel: "Звук кнопок",
    vibrationSwitchLabel: "Вибрация кнопок",
    installTitle: "Установка и обновления",
    iphoneInstallButton: "Инструкция для iPhone",
    androidInstallButton: "Инструкция для Android",
    shareAppButton: "Поделиться приложением",
    checkUpdateButton: "Проверить обновление",
    installInfoText: "Выбери действие: инструкция появится здесь.",
    iphoneInstallText:
      "iPhone: открой приложение в Safari, нажми кнопку Поделиться, выбери На экран Домой, затем нажми Добавить. Иконка CodeMaster 4 появится на рабочем столе.",
    androidInstallText:
      "Android/Samsung: открой приложение в Chrome или Samsung Internet, нажми меню, выбери Добавить на главный экран или Установить приложение. Иконка CodeMaster 4 появится на экране телефона.",
    shareFallbackText: "Ссылка на приложение скопирована.",
    updateCheckedText: "Проверка выполнена. Если GitHub открыт с последним коммитом, у тебя актуальная версия.",
    aboutProgramTitle: "О программе",
    aboutProgramText:
      "Имя приложения: CodeMaster 4\nОписание приложения: CodeMaster 4 учит создавать сайты и приложения, читать основу, писать код, повторять задания, проверять результат и расти до профессиональной разработки.",
    aboutDeveloperTitle: "О разработчике",
    aboutDeveloperText: "Разработчик\nИмя разработчика: Адам Маргоев, 2026\nВерсия приложения: 2.0",
    footerText: "Разработчик\nИмя разработчика: Адам Маргоев, 2026\nВерсия приложения: 2.0",
  },
  en: {
    brand: "CodeMaster 4",
    heroEyebrow: "HTML, CSS, JavaScript, Java and professional practice",
    heroTitle: "From beginner to professional app and website developer",
    heroText:
      "Read the basics, study examples, complete many tasks and build muscle memory. The course moves from first tags to logic, interfaces, Java, testing and architecture.",
    lessonsMetric: "lessons completed",
    tasksMetric: "tasks checked",
    progressMetric: "course progress",
    introOneTitle: "How it works",
    introOneText: "Each lesson has a short explanation, a code example and many tasks. Practice starts immediately.",
    introTwoTitle: "What you learn",
    introTwoText: "HTML, CSS, responsive design, JavaScript, Java, data, APIs, Git, testing and engineering thinking.",
    introThreeTitle: "Main rule",
    introThreeText: "Professional skill grows through repetition: many small tasks, checking and improvement.",
    planLabel: "Plan",
    planTitle: "Full program",
    readingTitle: "Read the basics",
    codeTitle: "Mini example",
    understandTitle: "Understand",
    practiceTitle: "Practice",
    qualityTitle: "Criterion",
    tasksLabel: "Tasks",
    tasksTitle: "A lot of practice for this lesson",
    doneLesson: "Lesson completed",
    markLesson: "I understand",
    clearLesson: "Clear lesson tasks",
    projectsLabel: "Projects",
    projectsTitle: "Portfolio from simple to serious",
    lesson: "Lesson",
    settingsEyebrow: "app panel",
    settingsTitle: "Settings",
    languageTitle: "App language",
    languageDialogEyebrow: "language selection",
    languageDialogTitle: "Choose language",
    themeTitle: "Theme",
    themeSwitchLabel: "Dark theme",
    effectsTitle: "Sound and vibration",
    soundSwitchLabel: "Button sound",
    vibrationSwitchLabel: "Button vibration",
    installTitle: "Install and updates",
    iphoneInstallButton: "iPhone install guide",
    androidInstallButton: "Android install guide",
    shareAppButton: "Share app",
    checkUpdateButton: "Check update",
    installInfoText: "Choose an action: the instruction will appear here.",
    iphoneInstallText:
      "iPhone: open the app in Safari, tap Share, choose Add to Home Screen, then tap Add. The CodeMaster 4 icon will appear on the home screen.",
    androidInstallText:
      "Android/Samsung: open the app in Chrome or Samsung Internet, tap the menu, choose Add to Home screen or Install app. The CodeMaster 4 icon will appear on the phone screen.",
    shareFallbackText: "App link copied.",
    updateCheckedText: "Update check complete. If GitHub shows the latest commit, you have the current version.",
    aboutProgramTitle: "About the program",
    aboutProgramText:
      "Application name: CodeMaster 4\nApplication description: CodeMaster 4 teaches websites and applications: read the basics, write code, repeat tasks, check results and grow into professional development.",
    aboutDeveloperTitle: "About the developer",
    aboutDeveloperText: "Developer\nDeveloper name: Adam Margoev, 2026\nApplication version: 2.0",
    footerText: "Developer\nDeveloper name: Adam Margoev, 2026\nApplication version: 2.0",
  },
  da: {
    brand: "CodeMaster 4",
    heroEyebrow: "HTML, CSS, JavaScript, Java og professionel praksis",
    heroTitle: "Fra begynder til professionel udvikler af apps og websites",
    heroText:
      "Læs grundlaget, se eksempler, lav mange opgaver og træn hænderne. Kurset går fra de første tags til logik, interfaces, Java, test og arkitektur.",
    lessonsMetric: "lektioner gennemført",
    tasksMetric: "opgaver markeret",
    progressMetric: "kursusfremskridt",
    introOneTitle: "Sådan virker kurset",
    introOneText: "Hver lektion har kort teori, kodeeksempel og mange opgaver. Øvelse starter med det samme.",
    introTwoTitle: "Det lærer du",
    introTwoText: "HTML, CSS, responsivt design, JavaScript, Java, data, API, Git, test og ingeniørtænkning.",
    introThreeTitle: "Hovedregel",
    introThreeText: "Professionelle færdigheder vokser gennem gentagelse: mange små opgaver, kontrol og forbedring.",
    planLabel: "Plan",
    planTitle: "Stor program",
    readingTitle: "Læs grundlaget",
    codeTitle: "Mini-eksempel",
    understandTitle: "Forstå",
    practiceTitle: "Praksis",
    qualityTitle: "Kriterium",
    tasksLabel: "Opgaver",
    tasksTitle: "Meget øvelse til denne lektion",
    doneLesson: "Lektion færdig",
    markLesson: "Jeg forstår",
    clearLesson: "Ryd lektionens opgaver",
    projectsLabel: "Projekter",
    projectsTitle: "Portfolio fra simpelt til seriøst",
    lesson: "Lektion",
    settingsEyebrow: "app-panel",
    settingsTitle: "Indstillinger",
    languageTitle: "App-sprog",
    languageDialogEyebrow: "sprogvalg",
    languageDialogTitle: "Vælg sprog",
    themeTitle: "Tema",
    themeSwitchLabel: "Mørkt tema",
    effectsTitle: "Lyd og vibration",
    soundSwitchLabel: "Knaplyd",
    vibrationSwitchLabel: "Knapvibration",
    installTitle: "Installation og opdateringer",
    iphoneInstallButton: "iPhone-vejledning",
    androidInstallButton: "Android-vejledning",
    shareAppButton: "Del app",
    checkUpdateButton: "Tjek opdatering",
    installInfoText: "Vælg en handling: vejledningen vises her.",
    iphoneInstallText:
      "iPhone: åbn appen i Safari, tryk Del, vælg Føj til hjemmeskærm, og tryk Tilføj. CodeMaster 4-ikonet vises på hjemmeskærmen.",
    androidInstallText:
      "Android/Samsung: åbn appen i Chrome eller Samsung Internet, tryk menuen, vælg Føj til startskærm eller Installer app. CodeMaster 4-ikonet vises på telefonen.",
    shareFallbackText: "App-link kopieret.",
    updateCheckedText: "Opdatering tjekket. Hvis GitHub viser seneste commit, har du den aktuelle version.",
    aboutProgramTitle: "Om programmet",
    aboutProgramText:
      "Appnavn: CodeMaster 4\nAppbeskrivelse: CodeMaster 4 lærer dig at bygge websites og apps: læse grundlag, skrive kode, gentage opgaver, kontrollere resultater og vokse mod professionel udvikling.",
    aboutDeveloperTitle: "Om udvikleren",
    aboutDeveloperText: "Udvikler\nUdviklernavn: Adam Margoev, 2026\nAppversion: 2.0",
    footerText: "Udvikler\nUdviklernavn: Adam Margoev, 2026\nAppversion: 2.0",
  },
  ka: {
    brand: "CodeMaster 4",
    heroEyebrow: "HTML, CSS, JavaScript, Java და პროფესიული პრაქტიკა",
    heroTitle: "დამწყებიდან პროფესიონალ აპებისა და საიტების დეველოპერამდე",
    heroText:
      "წაიკითხე საფუძველი, ნახე მაგალითები, შეასრულე ბევრი დავალება და ივარჯიშე. კურსი იწყება პირველი ტეგებით და მიდის ლოგიკამდე, Java-მდე, ტესტირებამდე და არქიტექტურამდე.",
    lessonsMetric: "გავლილი გაკვეთილი",
    tasksMetric: "მონიშნული დავალება",
    progressMetric: "კურსის პროგრესი",
    introOneTitle: "როგორ მუშაობს კურსი",
    introOneText: "ყოველ გაკვეთილში არის მოკლე ახსნა, კოდის მაგალითი და ბევრი დავალება. პრაქტიკა იწყება თავიდანვე.",
    introTwoTitle: "რას ისწავლი",
    introTwoText: "HTML, CSS, ადაპტიური დიზაინი, JavaScript, Java, მონაცემები, API, Git, ტესტირება და ინჟინრული აზროვნება.",
    introThreeTitle: "მთავარი წესი",
    introThreeText: "პროფესიონალიზმი იზრდება გამეორებით: ბევრი პატარა დავალება, შემოწმება და გაუმჯობესება.",
    planLabel: "გეგმა",
    planTitle: "დიდი პროგრამა",
    readingTitle: "წაიკითხე საფუძველი",
    codeTitle: "მინი მაგალითი",
    understandTitle: "გაგება",
    practiceTitle: "პრაქტიკა",
    qualityTitle: "კრიტერიუმი",
    tasksLabel: "დავალებები",
    tasksTitle: "ბევრი პრაქტიკა ამ გაკვეთილისთვის",
    doneLesson: "გაკვეთილი დასრულდა",
    markLesson: "გავიგე",
    clearLesson: "დავალებების გასუფთავება",
    projectsLabel: "პროექტები",
    projectsTitle: "პორტფოლიო მარტივიდან სერიოზულამდე",
    lesson: "გაკვეთილი",
    settingsEyebrow: "აპის პანელი",
    settingsTitle: "პარამეტრები",
    languageTitle: "აპის ენა",
    languageDialogEyebrow: "ენის არჩევა",
    languageDialogTitle: "აირჩიე ენა",
    themeTitle: "თემა",
    themeSwitchLabel: "მუქი თემა",
    effectsTitle: "ხმა და ვიბრაცია",
    soundSwitchLabel: "ღილაკის ხმა",
    vibrationSwitchLabel: "ღილაკის ვიბრაცია",
    installTitle: "დაყენება და განახლებები",
    iphoneInstallButton: "iPhone ინსტრუქცია",
    androidInstallButton: "Android ინსტრუქცია",
    shareAppButton: "აპის გაზიარება",
    checkUpdateButton: "განახლების შემოწმება",
    installInfoText: "აირჩიე მოქმედება: ინსტრუქცია აქ გამოჩნდება.",
    iphoneInstallText:
      "iPhone: გახსენი აპი Safari-ში, დააჭირე Share, აირჩიე Add to Home Screen და შემდეგ Add. CodeMaster 4-ის ხატულა გამოჩნდება მთავარ ეკრანზე.",
    androidInstallText:
      "Android/Samsung: გახსენი აპი Chrome-ში ან Samsung Internet-ში, დააჭირე მენიუს, აირჩიე Add to Home screen ან Install app. CodeMaster 4-ის ხატულა გამოჩნდება ტელეფონზე.",
    shareFallbackText: "აპის ბმული დაკოპირდა.",
    updateCheckedText: "განახლება შემოწმდა. თუ GitHub აჩვენებს ბოლო commit-ს, გაქვს მიმდინარე ვერსია.",
    aboutProgramTitle: "პროგრამის შესახებ",
    aboutProgramText:
      "აპის სახელი: CodeMaster 4\nაპის აღწერა: CodeMaster 4 გასწავლის საიტებისა და აპების შექმნას: საფუძვლის წაკითხვას, კოდის წერას, დავალებების გამეორებას, შედეგის შემოწმებას და პროფესიულ განვითარებას.",
    aboutDeveloperTitle: "დეველოპერის შესახებ",
    aboutDeveloperText: "დეველოპერი\nდეველოპერის სახელი: ადამ მარგოევი, 2026\nაპის ვერსია: 2.0",
    footerText: "დეველოპერი\nდეველოპერის სახელი: ადამ მარგოევი, 2026\nაპის ვერსია: 2.0",
  },
  de: {
    brand: "CodeMaster 4",
    heroEyebrow: "HTML, CSS, JavaScript, Java und professionelle Praxis",
    heroTitle: "Vom Anfänger zum professionellen Entwickler für Apps und Websites",
    heroText:
      "Lies die Grundlagen, studiere Beispiele, erledige viele Aufgaben und trainiere Routine. Der Kurs führt von ersten Tags zu Logik, Interfaces, Java, Tests und Architektur.",
    lessonsMetric: "Lektionen abgeschlossen",
    tasksMetric: "Aufgaben markiert",
    progressMetric: "Kursfortschritt",
    introOneTitle: "So funktioniert der Kurs",
    introOneText: "Jede Lektion hat kurze Theorie, Codebeispiel und viele Aufgaben. Praxis beginnt sofort.",
    introTwoTitle: "Was du lernst",
    introTwoText: "HTML, CSS, responsives Design, JavaScript, Java, Daten, APIs, Git, Tests und Engineering-Denken.",
    introThreeTitle: "Hauptregel",
    introThreeText: "Professionalität wächst durch Wiederholung: viele kleine Aufgaben, Prüfen und Verbessern.",
    planLabel: "Plan",
    planTitle: "Großes Programm",
    readingTitle: "Grundlage lesen",
    codeTitle: "Mini-Beispiel",
    understandTitle: "Verstehen",
    practiceTitle: "Praxis",
    qualityTitle: "Kriterium",
    tasksLabel: "Aufgaben",
    tasksTitle: "Viel Praxis für diese Lektion",
    doneLesson: "Lektion abgeschlossen",
    markLesson: "Ich verstehe",
    clearLesson: "Aufgaben löschen",
    projectsLabel: "Projekte",
    projectsTitle: "Portfolio von einfach bis ernst",
    lesson: "Lektion",
    settingsEyebrow: "App-Panel",
    settingsTitle: "Einstellungen",
    languageTitle: "App-Sprache",
    languageDialogEyebrow: "Sprachauswahl",
    languageDialogTitle: "Sprache wählen",
    themeTitle: "Theme",
    themeSwitchLabel: "Dunkles Theme",
    effectsTitle: "Ton und Vibration",
    soundSwitchLabel: "Tastenton",
    vibrationSwitchLabel: "Tastenvibration",
    installTitle: "Installation und Updates",
    iphoneInstallButton: "iPhone-Anleitung",
    androidInstallButton: "Android-Anleitung",
    shareAppButton: "App teilen",
    checkUpdateButton: "Update prüfen",
    installInfoText: "Wähle eine Aktion: Die Anleitung erscheint hier.",
    iphoneInstallText:
      "iPhone: Öffne die App in Safari, tippe Teilen, wähle Zum Home-Bildschirm, dann Hinzufügen. Das CodeMaster 4-Symbol erscheint auf dem Home-Bildschirm.",
    androidInstallText:
      "Android/Samsung: Öffne die App in Chrome oder Samsung Internet, tippe das Menü, wähle Zum Startbildschirm hinzufügen oder App installieren. Das CodeMaster 4-Symbol erscheint auf dem Telefon.",
    shareFallbackText: "App-Link kopiert.",
    updateCheckedText: "Update-Prüfung abgeschlossen. Wenn GitHub den letzten Commit zeigt, hast du die aktuelle Version.",
    aboutProgramTitle: "Über das Programm",
    aboutProgramText:
      "App-Name: CodeMaster 4\nApp-Beschreibung: CodeMaster 4 lehrt Websites und Anwendungen: Grundlagen lesen, Code schreiben, Aufgaben wiederholen, Ergebnisse prüfen und professionell wachsen.",
    aboutDeveloperTitle: "Über den Entwickler",
    aboutDeveloperText: "Entwickler\nEntwicklername: Adam Margoev, 2026\nApp-Version: 2.0",
    footerText: "Entwickler\nEntwicklername: Adam Margoev, 2026\nApp-Version: 2.0",
  },
};

const lessonSeeds = [
  ["developer-thinking", "Мышление разработчика", "Developer thinking", "Udviklertænkning", "დეველოპერის აზროვნება", "Entwicklerdenken", "idea -> screen -> data -> action -> check"],
  ["html-basics", "HTML: основа страницы", "HTML: page foundation", "HTML: sidens grundlag", "HTML: გვერდის საფუძველი", "HTML: Seitengrundlage", "<h1>Title</h1>\n<button>Start</button>"],
  ["html-forms", "HTML: формы и ввод", "HTML: forms and input", "HTML: formularer og input", "HTML: ფორმები და შეყვანა", "HTML: Formulare und Eingaben", "<form>\n  <input placeholder=\"Task\">\n  <button>Add</button>\n</form>"],
  ["css-basics", "CSS: стиль и отступы", "CSS: style and spacing", "CSS: stil og afstand", "CSS: სტილი და დაშორება", "CSS: Stil und Abstände", "button {\n  padding: 12px 16px;\n  border-radius: 8px;\n}"],
  ["css-layout", "CSS: сетки и адаптивность", "CSS: grids and responsiveness", "CSS: grids og responsivitet", "CSS: ბადეები და ადაპტაცია", "CSS: Grids und Responsivität", ".cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}"],
  ["js-basics", "JavaScript: переменные и условия", "JavaScript: variables and conditions", "JavaScript: variabler og betingelser", "JavaScript: ცვლადები და პირობები", "JavaScript: Variablen und Bedingungen", "let count = 0;\nif (count === 0) {\n  console.log(\"empty\");\n}"],
  ["js-dom", "JavaScript: DOM и события", "JavaScript: DOM and events", "JavaScript: DOM og events", "JavaScript: DOM და მოვლენები", "JavaScript: DOM und Events", "button.addEventListener(\"click\", () => {\n  title.textContent = \"Done\";\n});"],
  ["js-data", "JavaScript: массивы, объекты, хранение", "JavaScript: arrays, objects, storage", "JavaScript: arrays, objekter, lagring", "JavaScript: მასივები, ობიექტები, შენახვა", "JavaScript: Arrays, Objekte, Speicher", "const user = { name: \"Adam\", level: 1 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));"],
  ["api", "API и асинхронность", "APIs and async code", "API og asynkron kode", "API და ასინქრონული კოდი", "APIs und asynchroner Code", "const res = await fetch(\"/api/items\");\nconst data = await res.json();"],
  ["testing-git", "Тестирование, Git и качество", "Testing, Git and quality", "Test, Git og kvalitet", "ტესტირება, Git და ხარისხი", "Tests, Git und Qualität", "git status\ngit add .\ngit commit -m \"Improve app\""],
  ["java-basics", "Java: от новичка к основам ООП", "Java: from beginner to OOP basics", "Java: fra begynder til OOP", "Java: დამწყებიდან OOP-მდე", "Java: vom Anfänger zu OOP", "public class App {\n  public static void main(String[] args) {\n    System.out.println(\"Hello Java\");\n  }\n}"],
  ["professional", "Профессиональная разработка", "Professional development", "Professionel udvikling", "პროფესიული დეველოპმენტი", "Professionelle Entwicklung", "plan -> build -> test -> refactor -> deploy"],
];

const lessonTexts = {
  ru: {
    reading: (name) => `${name} - это важная часть пути разработчика. Сначала пойми смысл, затем повтори пример, потом сделай много маленьких заданий. Не пропускай практику: профессиональный навык появляется через десятки повторений.`,
    practice: "Сделай простую версию, проверь её на компьютере, планшете и смартфоне, затем улучши один конкретный элемент.",
    quality: "Ты можешь объяснить код, повторить его без подсказки и найти ошибку, если результат не работает.",
    skills: ["смысл темы", "код руками", "проверка результата", "адаптивность", "чистота кода"],
    taskPrefix: "Задание",
    tasks: [
      "прочитай основу и выпиши 5 ключевых слов",
      "перепиши пример кода вручную",
      "измени текст, цвет или значение в примере",
      "создай похожий пример с другой темой",
      "добавь понятный заголовок",
      "добавь кнопку или поле ввода",
      "сделай состояние ошибки",
      "проверь пустой ввод",
      "сделай вариант для смартфона",
      "сделай вариант для планшета",
      "объясни код вслух по строкам",
      "найди и исправь одну ошибку",
      "переименуй переменные понятно",
      "убери лишний повтор",
      "добавь комментарий только там, где сложно",
      "проверь работу после обновления страницы",
      "запиши, что получилось и что непонятно",
      "собери мини-экран на эту тему",
      "улучши внешний вид без изменения логики",
      "сравни первый и улучшенный вариант",
    ],
  },
  en: {
    reading: (name) => `${name} is an important part of the developer path. First understand the idea, then repeat the example, then complete many small tasks. Do not skip practice: professional skill appears through repeated work.`,
    practice: "Build a simple version, test it on desktop, tablet and phone, then improve one specific part.",
    quality: "You can explain the code, repeat it without hints and find a bug when the result fails.",
    skills: ["topic meaning", "hand-written code", "result checking", "responsiveness", "clean code"],
    taskPrefix: "Task",
    tasks: [
      "read the basics and write 5 keywords",
      "rewrite the example by hand",
      "change text, color or value in the example",
      "create a similar example with another topic",
      "add a clear heading",
      "add a button or input",
      "create an error state",
      "check empty input",
      "make a phone version",
      "make a tablet version",
      "explain the code line by line",
      "find and fix one bug",
      "rename variables clearly",
      "remove one repetition",
      "add a comment only where it helps",
      "check after page reload",
      "write what worked and what is unclear",
      "build a mini screen for this topic",
      "improve visual design without changing logic",
      "compare the first and improved version",
    ],
  },
  da: {
    reading: (name) => `${name} er en vigtig del af udviklervejen. Forstå først ideen, gentag eksemplet, og lav derefter mange små opgaver. Spring ikke praksis over: professionel kunnen kommer gennem gentagelse.`,
    practice: "Byg en enkel version, test den på computer, tablet og telefon, og forbedr derefter én konkret del.",
    quality: "Du kan forklare koden, gentage den uden hjælp og finde en fejl, når resultatet ikke virker.",
    skills: ["emnets mening", "kode i hånden", "kontrol af resultat", "responsivitet", "ren kode"],
    taskPrefix: "Opgave",
    tasks: [
      "læs grundlaget og skriv 5 nøgleord",
      "skriv eksemplet om i hånden",
      "ændr tekst, farve eller værdi i eksemplet",
      "lav et lignende eksempel med et andet emne",
      "tilføj en tydelig overskrift",
      "tilføj en knap eller et inputfelt",
      "lav en fejltilstand",
      "kontroller tom input",
      "lav en telefonversion",
      "lav en tabletversion",
      "forklar koden linje for linje",
      "find og ret én fejl",
      "omdøb variabler tydeligt",
      "fjern én gentagelse",
      "tilføj kun kommentar hvor det hjælper",
      "kontroller efter genindlæsning",
      "skriv hvad der virkede og hvad der er uklart",
      "byg en miniskærm til emnet",
      "forbedr design uden at ændre logik",
      "sammenlign første og forbedret version",
    ],
  },
  ka: {
    reading: (name) => `${name} დეველოპერის გზის მნიშვნელოვანი ნაწილია. ჯერ გაიგე აზრი, შემდეგ გაიმეორე მაგალითი და მერე შეასრულე ბევრი პატარა დავალება. პრაქტიკა არ გამოტოვო: პროფესიული უნარი გამეორებით ჩნდება.`,
    practice: "ააწყე მარტივი ვერსია, შეამოწმე კომპიუტერზე, პლანშეტზე და ტელეფონზე, შემდეგ გააუმჯობესე ერთი ნაწილი.",
    quality: "შეგიძლია კოდის ახსნა, გამეორება მინიშნების გარეშე და შეცდომის პოვნა, როცა შედეგი არ მუშაობს.",
    skills: ["თემის აზრი", "კოდის ხელით წერა", "შედეგის შემოწმება", "ადაპტაცია", "სუფთა კოდი"],
    taskPrefix: "დავალება",
    tasks: [
      "წაიკითხე საფუძველი და დაწერე 5 საკვანძო სიტყვა",
      "გადაწერე მაგალითი ხელით",
      "შეცვალე ტექსტი, ფერი ან მნიშვნელობა",
      "შექმენი მსგავსი მაგალითი სხვა თემით",
      "დაამატე გასაგები სათაური",
      "დაამატე ღილაკი ან input",
      "შექმენი შეცდომის მდგომარეობა",
      "შეამოწმე ცარიელი შეყვანა",
      "გააკეთე ტელეფონის ვერსია",
      "გააკეთე პლანშეტის ვერსია",
      "ახსენი კოდი ხაზ-ხაზ",
      "იპოვე და გაასწორე ერთი შეცდომა",
      "გადაარქვი ცვლადებს გასაგები სახელები",
      "მოაშორე ერთი გამეორება",
      "კომენტარი დაამატე მხოლოდ რთულ ადგილას",
      "შეამოწმე გვერდის განახლების შემდეგ",
      "დაწერე რა გამოვიდა და რა გაუგებარია",
      "ააწყე მინი ეკრანი ამ თემაზე",
      "გააუმჯობესე დიზაინი ლოგიკის შეცვლის გარეშე",
      "შეადარე პირველი და გაუმჯობესებული ვერსია",
    ],
  },
  de: {
    reading: (name) => `${name} ist ein wichtiger Teil des Entwicklerwegs. Verstehe zuerst die Idee, wiederhole dann das Beispiel und erledige viele kleine Aufgaben. Überspringe Praxis nicht: professionelle Fähigkeit entsteht durch Wiederholung.`,
    practice: "Baue eine einfache Version, teste sie auf Desktop, Tablet und Smartphone und verbessere dann einen konkreten Teil.",
    quality: "Du kannst den Code erklären, ohne Hilfe wiederholen und einen Fehler finden, wenn das Ergebnis nicht funktioniert.",
    skills: ["Sinn des Themas", "Code per Hand", "Ergebnis prüfen", "Responsivität", "sauberer Code"],
    taskPrefix: "Aufgabe",
    tasks: [
      "lies die Grundlage und notiere 5 Schlüsselwörter",
      "schreibe das Beispiel per Hand ab",
      "ändere Text, Farbe oder Wert im Beispiel",
      "erstelle ein ähnliches Beispiel mit anderem Thema",
      "füge eine klare Überschrift hinzu",
      "füge Button oder Eingabe hinzu",
      "erstelle einen Fehlerzustand",
      "prüfe leere Eingabe",
      "erstelle eine Smartphone-Version",
      "erstelle eine Tablet-Version",
      "erkläre den Code Zeile für Zeile",
      "finde und behebe einen Fehler",
      "benenne Variablen klar um",
      "entferne eine Wiederholung",
      "füge Kommentar nur dort hinzu, wo er hilft",
      "prüfe nach Neuladen der Seite",
      "notiere was funktioniert und was unklar ist",
      "baue einen Mini-Screen zu diesem Thema",
      "verbessere Design ohne Logik zu ändern",
      "vergleiche erste und verbesserte Version",
    ],
  },
};

const projectsByLang = {
  ru: [["Личная страница", "HTML, структура, адаптивность", "HTML"], ["Список дел", "DOM, события, хранение", "JS"], ["Финансы", "формы, расчёты, фильтры", "Логика"], ["Java CLI", "классы, методы, коллекции", "Java"]],
  en: [["Personal page", "HTML, structure, responsiveness", "HTML"], ["Todo list", "DOM, events, storage", "JS"], ["Finance app", "forms, calculations, filters", "Logic"], ["Java CLI", "classes, methods, collections", "Java"]],
  da: [["Personlig side", "HTML, struktur, responsivitet", "HTML"], ["Opgaveliste", "DOM, events, lagring", "JS"], ["Finansapp", "formularer, beregning, filtre", "Logik"], ["Java CLI", "klasser, metoder, collections", "Java"]],
  ka: [["პირადი გვერდი", "HTML, სტრუქტურა, ადაპტაცია", "HTML"], ["დავალებების სია", "DOM, მოვლენები, შენახვა", "JS"], ["ფინანსების აპი", "ფორმები, გამოთვლა, ფილტრები", "ლოგიკა"], ["Java CLI", "კლასები, მეთოდები, კოლექციები", "Java"]],
  de: [["Persönliche Seite", "HTML, Struktur, Responsivität", "HTML"], ["Todo-Liste", "DOM, Events, Speicher", "JS"], ["Finanz-App", "Formulare, Berechnung, Filter", "Logik"], ["Java CLI", "Klassen, Methoden, Collections", "Java"]],
};

const state = loadState();
let active = state.active || 0;

const $ = (id) => document.querySelector(`#${id}`);

function loadState() {
  const defaults = {
    done: [],
    tasks: {},
    lang: "ru",
    theme: "light",
    sound: false,
    vibration: false,
    active: 0,
  };
  try {
    return { ...defaults, ...(JSON.parse(localStorage.getItem("developerPathState")) || {}) };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem("developerPathState", JSON.stringify({ ...state, active }));
}

function text() {
  return ui[state.lang] || ui.ru;
}

function lessons() {
  const t = lessonTexts[state.lang] || lessonTexts.ru;
  const langIndex = { ru: 1, en: 2, da: 3, ka: 4, de: 5 }[state.lang] || 1;
  return lessonSeeds.map((seed) => ({
    id: seed[0],
    title: seed[langIndex],
    reading: t.reading(seed[langIndex]),
    code: seed[6],
    skills: t.skills,
    practice: t.practice,
    quality: t.quality,
    tasks: t.tasks.map((task, index) => `${t.taskPrefix} ${index + 1}: ${task}.`),
  }));
}

function checkedTaskIds() {
  return Object.values(state.tasks).flat();
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  $("themeToggle").checked = state.theme === "dark";
}

function feedback() {
  if (state.vibration && navigator.vibrate) navigator.vibrate(28);
  if (state.sound) {
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      const audio = new Audio();
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.frequency.value = 520;
      gain.gain.value = 0.04;
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start();
      osc.stop(audio.currentTime + 0.045);
    } catch {
      state.sound = false;
    }
  }
}

function renderStaticText() {
  const t = text();
  document.documentElement.lang = state.lang;
  document.title = t.brand;
  Object.entries(t).forEach(([key, value]) => {
    const node = $(key);
    if (node) node.textContent = value;
  });
}

function renderLanguages() {
  const current = languages.find(([code]) => code === state.lang) || languages[0];
  $("languageButtonLabel").textContent = current[1];
  $("languageGrid").innerHTML = languages
    .map(([code, label]) => `<button class="language-choice" data-lang="${code}" aria-pressed="${state.lang === code}">${label}</button>`)
    .join("");
}

function renderLessons() {
  const items = lessons();
  $("lessonList").innerHTML = items
    .map((lesson, index) => {
      const done = state.done.includes(lesson.id);
      return `
        <button class="lesson-button" type="button" data-index="${index}" aria-current="${index === active}">
          <span class="lesson-index">${index + 1}</span>
          <span>${lesson.title}</span>
          <span class="lesson-done">${done ? "✓" : ""}</span>
        </button>`;
    })
    .join("");
}

function renderModule() {
  const t = text();
  const lesson = lessons()[active];
  const checked = state.tasks[lesson.id] || [];
  $("moduleLabel").textContent = `${t.lesson} ${active + 1}`;
  $("moduleTitle").textContent = lesson.title;
  $("moduleReading").textContent = lesson.reading;
  $("moduleCode").textContent = lesson.code;
  $("moduleSkills").innerHTML = lesson.skills.map((skill) => `<li>${skill}</li>`).join("");
  $("modulePractice").textContent = lesson.practice;
  $("moduleQuality").textContent = lesson.quality;
  $("toggleDone").textContent = state.done.includes(lesson.id) ? t.doneLesson : t.markLesson;
  $("taskList").innerHTML = lesson.tasks
    .map((task, index) => {
      const id = `${lesson.id}-${index}`;
      return `
        <label class="task-item">
          <input type="checkbox" data-task-id="${id}" ${checked.includes(id) ? "checked" : ""} />
          <span>${task}</span>
        </label>`;
    })
    .join("");
}

function renderStats() {
  const allLessons = lessons();
  const totalTasks = allLessons.length * lessonTexts[state.lang].tasks.length;
  const doneTasks = checkedTaskIds().length;
  $("completedCount").textContent = state.done.length;
  $("taskCount").textContent = doneTasks;
  $("focusScore").textContent = `${Math.round(((state.done.length + doneTasks / lessonTexts[state.lang].tasks.length) / allLessons.length) * 100)}%`;
  $("tasksMetric").title = `${doneTasks}/${totalTasks}`;
}

function renderProjects() {
  $("projectGrid").innerHTML = projectsByLang[state.lang]
    .map(
      ([title, text, tag]) => `
        <article class="project-card">
          <span class="tag">${tag}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`,
    )
    .join("");
}

function render() {
  renderStaticText();
  renderLanguages();
  renderLessons();
  renderModule();
  renderStats();
  renderProjects();
  applyTheme();
  $("soundToggle").checked = state.sound;
  $("vibrationToggle").checked = state.vibration;
  saveState();
}

function openSettings() {
  $("settingsModal").classList.add("is-open");
  $("settingsModal").setAttribute("aria-hidden", "false");
}

function closeSettings() {
  $("settingsModal").classList.remove("is-open");
  $("settingsModal").setAttribute("aria-hidden", "true");
  closeLanguage();
}

function openLanguage() {
  $("languageModal").classList.add("is-open");
  $("languageModal").setAttribute("aria-hidden", "false");
}

function closeLanguage() {
  $("languageModal").classList.remove("is-open");
  $("languageModal").setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) feedback();

  const lessonButton = event.target.closest("button[data-index]");
  if (lessonButton) {
    active = Number(lessonButton.dataset.index);
    render();
  }

  const langButton = event.target.closest("button[data-lang]");
  if (langButton) {
    state.lang = langButton.dataset.lang;
    closeLanguage();
    render();
  }

  if (event.target.matches("[data-close-settings]")) closeSettings();
  if (event.target.matches("[data-close-language]")) closeLanguage();
});

$("settingsOpen").addEventListener("click", openSettings);
$("settingsClose").addEventListener("click", closeSettings);
$("languageOpen").addEventListener("click", openLanguage);
$("languageClose").addEventListener("click", closeLanguage);

$("toggleDone").addEventListener("click", () => {
  const id = lessons()[active].id;
  state.done = state.done.includes(id) ? state.done.filter((item) => item !== id) : [...state.done, id];
  render();
});

$("clearLessonTasks").addEventListener("click", () => {
  const id = lessons()[active].id;
  state.tasks[id] = [];
  render();
});

$("taskList").addEventListener("change", (event) => {
  if (!event.target.matches("input[type='checkbox']")) return;
  const lessonId = lessons()[active].id;
  const taskId = event.target.dataset.taskId;
  const current = state.tasks[lessonId] || [];
  state.tasks[lessonId] = event.target.checked ? [...new Set([...current, taskId])] : current.filter((id) => id !== taskId);
  feedback();
  renderStats();
  saveState();
});

$("themeToggle").addEventListener("change", (event) => {
  state.theme = event.target.checked ? "dark" : "light";
  applyTheme();
  saveState();
});

$("soundToggle").addEventListener("change", (event) => {
  state.sound = event.target.checked;
  saveState();
});

$("vibrationToggle").addEventListener("change", (event) => {
  state.vibration = event.target.checked;
  saveState();
});

$("iphoneInstallButton").addEventListener("click", () => {
  $("installInfoText").textContent = text().iphoneInstallText;
});

$("androidInstallButton").addEventListener("click", () => {
  $("installInfoText").textContent = text().androidInstallText;
});

$("shareAppButton").addEventListener("click", async () => {
  const shareData = {
    title: "CodeMaster 4",
    text: text().heroTitle,
    url: location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      $("installInfoText").textContent = text().installInfoText;
    }
    return;
  }

  if (navigator.clipboard) {
    await navigator.clipboard.writeText(location.href);
  }
  $("installInfoText").textContent = text().shareFallbackText;
});

$("checkUpdateButton").addEventListener("click", () => {
  $("installInfoText").textContent = `${text().updateCheckedText} ${new Date().toLocaleString()}`;
});

$("resetProgress").addEventListener("click", () => {
  state.done = [];
  state.tasks = {};
  active = 0;
  render();
});

render();
