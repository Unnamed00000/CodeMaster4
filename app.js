const languages = [
  ["ru", "Русский"],
  ["en", "English"],
  ["da", "Dansk"],
  ["ka", "ქართული"],
  ["de", "Deutsch"],
];

const APP_VERSION = "2.1";

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
    trackGeneral: "Общий курс",
    trackBuildApp: "Создать CodeMaster 4",
    trackRecommendEyebrow: "рекомендация перед стартом",
    trackRecommendTitle: "Сначала пройди полный курс",
    trackRecommendText:
      "Я настоятельно рекомендую сначала пройти общий программный путь: HTML, CSS, JavaScript, Java, адаптивность, данные, тестирование и Git. После этого путь «Создать CodeMaster 4» будет намного понятнее, и ты сможешь построить такое приложение с нуля до публикации.",
    trackReturnGeneral: "Вернуться к общему курсу",
    trackContinueBuild: "Всё равно начать сборку",
    readingTitle: "Прочитай основу",
    codeTitle: "Мини-пример",
    toolsTitle: "Чем работать",
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
    forceUpdateButton: "Форс обновление",
    installInfoText: "Выбери действие: инструкция появится здесь.",
    iphoneInstallText:
      "iPhone: открой приложение в Safari, нажми кнопку Поделиться, выбери На экран Домой, затем нажми Добавить. Иконка CodeMaster 4 появится на рабочем столе.",
    androidInstallText:
      "Android/Samsung: открой приложение в Chrome или Samsung Internet, нажми меню, выбери Добавить на главный экран или Установить приложение. Иконка CodeMaster 4 появится на экране телефона.",
    shareFallbackText: "Ссылка на приложение скопирована.",
    forceUpdateText: "Форс обновление запущено. Приложение сейчас перезагрузится и запросит свежую версию файлов.",
    updateCheckedText:
      "CodeMaster 4 v2.1\n1. Добавлена учебная линия создания CodeMaster 4 с нуля.\n2. Добавлены рекомендации инструментов в каждом уроке.\n3. Добавлены иконки приложения для iPhone и Android.\n4. Добавлены инструкции установки, поделиться и проверка обновлений.\n5. Улучшена адаптация заголовка и текста под телефон, планшет и компьютер.\n6. Добавлена кнопка форс обновления.",
    aboutProgramTitle: "О программе",
    aboutProgramText:
      "Имя приложения: CodeMaster 4\nОписание приложения: CodeMaster 4 учит создавать сайты и приложения, читать основу, писать код, повторять задания, проверять результат и расти до профессиональной разработки.",
    aboutDeveloperTitle: "О разработчике",
    aboutDeveloperText: "Разработчик\nИмя разработчика: Адам Маргоев, 2026\nВерсия приложения: 2.1",
    footerText: "Разработчик\nИмя разработчика: Адам Маргоев, 2026\nВерсия приложения: 2.1",
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
    trackGeneral: "General course",
    trackBuildApp: "Build CodeMaster 4",
    trackRecommendEyebrow: "recommended before starting",
    trackRecommendTitle: "Finish the full course first",
    trackRecommendText:
      "I strongly recommend completing the general programming path first: HTML, CSS, JavaScript, Java, responsiveness, data, testing and Git. After that, the “Build CodeMaster 4” path will be much clearer, and you will be able to build this kind of app from zero to publication.",
    trackReturnGeneral: "Return to general course",
    trackContinueBuild: "Start building anyway",
    readingTitle: "Read the basics",
    codeTitle: "Mini example",
    toolsTitle: "What to use",
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
    forceUpdateButton: "Force update",
    installInfoText: "Choose an action: the instruction will appear here.",
    iphoneInstallText:
      "iPhone: open the app in Safari, tap Share, choose Add to Home Screen, then tap Add. The CodeMaster 4 icon will appear on the home screen.",
    androidInstallText:
      "Android/Samsung: open the app in Chrome or Samsung Internet, tap the menu, choose Add to Home screen or Install app. The CodeMaster 4 icon will appear on the phone screen.",
    shareFallbackText: "App link copied.",
    forceUpdateText: "Force update started. The app will reload and request fresh files.",
    updateCheckedText:
      "CodeMaster 4 v2.1\n1. Added the path for building CodeMaster 4 from zero.\n2. Added tool recommendations in every lesson.\n3. Added iPhone and Android app icons.\n4. Added install guides, share and update check actions.\n5. Improved responsive title and text for phone, tablet and desktop.\n6. Added the force update button.",
    aboutProgramTitle: "About the program",
    aboutProgramText:
      "Application name: CodeMaster 4\nApplication description: CodeMaster 4 teaches websites and applications: read the basics, write code, repeat tasks, check results and grow into professional development.",
    aboutDeveloperTitle: "About the developer",
    aboutDeveloperText: "Developer\nDeveloper name: Adam Margoev, 2026\nApplication version: 2.1",
    footerText: "Developer\nDeveloper name: Adam Margoev, 2026\nApplication version: 2.1",
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
    trackGeneral: "Generelt kursus",
    trackBuildApp: "Byg CodeMaster 4",
    trackRecommendEyebrow: "anbefaling før start",
    trackRecommendTitle: "Gennemfør hele kurset først",
    trackRecommendText:
      "Jeg anbefaler kraftigt først at gennemføre den generelle programmeringsvej: HTML, CSS, JavaScript, Java, responsivitet, data, test og Git. Derefter bliver “Byg CodeMaster 4” meget tydeligere, og du kan bygge en sådan app fra nul til udgivelse.",
    trackReturnGeneral: "Tilbage til generelt kursus",
    trackContinueBuild: "Start alligevel",
    readingTitle: "Læs grundlaget",
    codeTitle: "Mini-eksempel",
    toolsTitle: "Hvad du bruger",
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
    forceUpdateButton: "Force-opdater",
    installInfoText: "Vælg en handling: vejledningen vises her.",
    iphoneInstallText:
      "iPhone: åbn appen i Safari, tryk Del, vælg Føj til hjemmeskærm, og tryk Tilføj. CodeMaster 4-ikonet vises på hjemmeskærmen.",
    androidInstallText:
      "Android/Samsung: åbn appen i Chrome eller Samsung Internet, tryk menuen, vælg Føj til startskærm eller Installer app. CodeMaster 4-ikonet vises på telefonen.",
    shareFallbackText: "App-link kopieret.",
    forceUpdateText: "Force-opdatering startet. Appen genindlæses og henter friske filer.",
    updateCheckedText:
      "CodeMaster 4 v2.1\n1. Tilføjet læringsvej til at bygge CodeMaster 4 fra nul.\n2. Tilføjet værktøjsanbefalinger i hver lektion.\n3. Tilføjet appikoner til iPhone og Android.\n4. Tilføjet installationsvejledning, deling og opdateringstjek.\n5. Forbedret responsiv titel og tekst til telefon, tablet og computer.\n6. Tilføjet force-opdateringsknap.",
    aboutProgramTitle: "Om programmet",
    aboutProgramText:
      "Appnavn: CodeMaster 4\nAppbeskrivelse: CodeMaster 4 lærer dig at bygge websites og apps: læse grundlag, skrive kode, gentage opgaver, kontrollere resultater og vokse mod professionel udvikling.",
    aboutDeveloperTitle: "Om udvikleren",
    aboutDeveloperText: "Udvikler\nUdviklernavn: Adam Margoev, 2026\nAppversion: 2.1",
    footerText: "Udvikler\nUdviklernavn: Adam Margoev, 2026\nAppversion: 2.1",
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
    trackGeneral: "საერთო კურსი",
    trackBuildApp: "CodeMaster 4-ის შექმნა",
    trackRecommendEyebrow: "რეკომენდაცია დაწყებამდე",
    trackRecommendTitle: "ჯერ გაიარე სრული კურსი",
    trackRecommendText:
      "მტკიცედ გირჩევ ჯერ გაიარო საერთო პროგრამირების გზა: HTML, CSS, JavaScript, Java, ადაპტაცია, მონაცემები, ტესტირება და Git. ამის შემდეგ “CodeMaster 4-ის შექმნა” ბევრად გასაგები იქნება და შეძლებ ასეთი აპის ნულიდან გამოქვეყნებამდე აწყობას.",
    trackReturnGeneral: "საერთო კურსზე დაბრუნება",
    trackContinueBuild: "მაინც დაწყება",
    readingTitle: "წაიკითხე საფუძველი",
    codeTitle: "მინი მაგალითი",
    toolsTitle: "რით იმუშაო",
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
    forceUpdateButton: "ძალის განახლება",
    installInfoText: "აირჩიე მოქმედება: ინსტრუქცია აქ გამოჩნდება.",
    iphoneInstallText:
      "iPhone: გახსენი აპი Safari-ში, დააჭირე Share, აირჩიე Add to Home Screen და შემდეგ Add. CodeMaster 4-ის ხატულა გამოჩნდება მთავარ ეკრანზე.",
    androidInstallText:
      "Android/Samsung: გახსენი აპი Chrome-ში ან Samsung Internet-ში, დააჭირე მენიუს, აირჩიე Add to Home screen ან Install app. CodeMaster 4-ის ხატულა გამოჩნდება ტელეფონზე.",
    shareFallbackText: "აპის ბმული დაკოპირდა.",
    forceUpdateText: "ძალის განახლება დაიწყო. აპი გადაიტვირთება და ახალ ფაილებს მოითხოვს.",
    updateCheckedText:
      "CodeMaster 4 v2.1\n1. დაემატა CodeMaster 4-ის ნულიდან შექმნის სასწავლო გზა.\n2. დაემატა ხელსაწყოების რეკომენდაციები ყველა გაკვეთილში.\n3. დაემატა iPhone და Android აპის ხატულები.\n4. დაემატა დაყენების ინსტრუქციები, გაზიარება და განახლების შემოწმება.\n5. გაუმჯობესდა სათაურისა და ტექსტის ადაპტაცია ტელეფონზე, პლანშეტზე და კომპიუტერზე.\n6. დაემატა ძალის განახლების ღილაკი.",
    aboutProgramTitle: "პროგრამის შესახებ",
    aboutProgramText:
      "აპის სახელი: CodeMaster 4\nაპის აღწერა: CodeMaster 4 გასწავლის საიტებისა და აპების შექმნას: საფუძვლის წაკითხვას, კოდის წერას, დავალებების გამეორებას, შედეგის შემოწმებას და პროფესიულ განვითარებას.",
    aboutDeveloperTitle: "დეველოპერის შესახებ",
    aboutDeveloperText: "დეველოპერი\nდეველოპერის სახელი: ადამ მარგოევი, 2026\nაპის ვერსია: 2.1",
    footerText: "დეველოპერი\nდეველოპერის სახელი: ადამ მარგოევი, 2026\nაპის ვერსია: 2.1",
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
    trackGeneral: "Allgemeiner Kurs",
    trackBuildApp: "CodeMaster 4 bauen",
    trackRecommendEyebrow: "Empfehlung vor dem Start",
    trackRecommendTitle: "Schließe zuerst den vollen Kurs ab",
    trackRecommendText:
      "Ich empfehle dringend, zuerst den allgemeinen Programmierweg abzuschließen: HTML, CSS, JavaScript, Java, Responsivität, Daten, Tests und Git. Danach wird “CodeMaster 4 bauen” viel klarer, und du kannst so eine App von null bis zur Veröffentlichung erstellen.",
    trackReturnGeneral: "Zurück zum allgemeinen Kurs",
    trackContinueBuild: "Trotzdem starten",
    readingTitle: "Grundlage lesen",
    codeTitle: "Mini-Beispiel",
    toolsTitle: "Womit arbeiten",
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
    forceUpdateButton: "Force-Update",
    installInfoText: "Wähle eine Aktion: Die Anleitung erscheint hier.",
    iphoneInstallText:
      "iPhone: Öffne die App in Safari, tippe Teilen, wähle Zum Home-Bildschirm, dann Hinzufügen. Das CodeMaster 4-Symbol erscheint auf dem Home-Bildschirm.",
    androidInstallText:
      "Android/Samsung: Öffne die App in Chrome oder Samsung Internet, tippe das Menü, wähle Zum Startbildschirm hinzufügen oder App installieren. Das CodeMaster 4-Symbol erscheint auf dem Telefon.",
    shareFallbackText: "App-Link kopiert.",
    forceUpdateText: "Force-Update gestartet. Die App lädt neu und fordert frische Dateien an.",
    updateCheckedText:
      "CodeMaster 4 v2.1\n1. Lernpfad zum Erstellen von CodeMaster 4 von null hinzugefügt.\n2. Werkzeugempfehlungen in jeder Lektion hinzugefügt.\n3. App-Icons für iPhone und Android hinzugefügt.\n4. Installationsanleitungen, Teilen und Update-Prüfung hinzugefügt.\n5. Responsiver Titel und Text für Smartphone, Tablet und Desktop verbessert.\n6. Force-Update-Schaltfläche hinzugefügt.",
    aboutProgramTitle: "Über das Programm",
    aboutProgramText:
      "App-Name: CodeMaster 4\nApp-Beschreibung: CodeMaster 4 lehrt Websites und Anwendungen: Grundlagen lesen, Code schreiben, Aufgaben wiederholen, Ergebnisse prüfen und professionell wachsen.",
    aboutDeveloperTitle: "Über den Entwickler",
    aboutDeveloperText: "Entwickler\nEntwicklername: Adam Margoev, 2026\nApp-Version: 2.1",
    footerText: "Entwickler\nEntwicklername: Adam Margoev, 2026\nApp-Version: 2.1",
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

const buildAppSeeds = [
  ["build-idea", "Идея и требования CodeMaster 4", "CodeMaster 4 idea and requirements", "CodeMaster 4 idé og krav", "CodeMaster 4 იდეა და მოთხოვნები", "CodeMaster 4 Idee und Anforderungen", "goal -> audience -> features -> first version"],
  ["build-files", "Файлы проекта: HTML, CSS, JS", "Project files: HTML, CSS, JS", "Projektfiler: HTML, CSS, JS", "პროექტის ფაილები: HTML, CSS, JS", "Projektdateien: HTML, CSS, JS", "index.html\nstyles.css\napp.js\nserver.js"],
  ["build-layout", "Главный экран и адаптивный layout", "Main screen and responsive layout", "Hovedskærm og responsivt layout", "მთავარი ეკრანი და ადაპტიური layout", "Startscreen und responsives Layout", ".workspace {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n}"],
  ["build-lessons", "Данные уроков и задания", "Lesson data and tasks", "Lektionsdata og opgaver", "გაკვეთილების მონაცემები და დავალებები", "Lektionsdaten und Aufgaben", "const lessons = [{ title, reading, code, tasks }];"],
  ["build-language", "Переводы и выбор языка", "Translations and language picker", "Oversættelser og sprogvalg", "თარგმანები და ენის არჩევა", "Übersetzungen und Sprachauswahl", "state.lang = \"ru\";\nrender();"],
  ["build-settings", "Настройки: тема, звук, вибрация", "Settings: theme, sound, vibration", "Indstillinger: tema, lyd, vibration", "პარამეტრები: თემა, ხმა, ვიბრაცია", "Einstellungen: Theme, Ton, Vibration", "document.body.dataset.theme = state.theme;"],
  ["build-progress", "Прогресс, localStorage и чекбоксы", "Progress, localStorage and checkboxes", "Fremskridt, localStorage og checkbokse", "პროგრესი, localStorage და checkbox-ები", "Fortschritt, localStorage und Checkboxen", "localStorage.setItem(\"state\", JSON.stringify(state));"],
  ["build-pwa", "Иконка, manifest и установка", "Icon, manifest and installation", "Ikon, manifest og installation", "ხატულა, manifest და დაყენება", "Icon, Manifest und Installation", "<link rel=\"manifest\" href=\"site.webmanifest\">"],
  ["build-actions", "Поделиться и проверить обновление", "Share and check update", "Del og tjek opdatering", "გაზიარება და განახლების შემოწმება", "Teilen und Update prüfen", "navigator.share({ title, text, url });"],
  ["build-publish", "Публикация в GitHub", "Publish to GitHub", "Udgiv til GitHub", "GitHub-ზე გამოქვეყნება", "Auf GitHub veröffentlichen", "git add .\ngit commit -m \"Release CodeMaster 4\"\ngit push"],
];

const lessonTexts = {
  ru: {
    reading: (name) => `${name} - это важная часть пути разработчика. Сначала пойми смысл, затем повтори пример, потом сделай много маленьких заданий. Не пропускай практику: профессиональный навык появляется через десятки повторений.`,
    tools: () =>
      "Рекомендуется писать код в Visual Studio Code или другом простом редакторе кода. Проверяй результат в браузере Chrome или Edge, открывай DevTools клавишей F12, держи рядом CodeMaster 4 и сверяй структуру урока: основа, пример, задания, проверка.",
    buildTools: () =>
      "Работай как над настоящим проектом: открой CodeMaster 4 как образец, рядом создай свои файлы index.html, styles.css, app.js и server.js. Пиши код в Visual Studio Code, проверяй в браузере, сравнивай свой экран с этим приложением и повторяй шаги до совпадения логики.",
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
    tools: () =>
      "Use Visual Studio Code or another simple code editor. Check the result in Chrome or Edge, open DevTools with F12, keep CodeMaster 4 nearby and compare the lesson structure: basics, example, tasks and checks.",
    buildTools: () =>
      "Work like on a real project: keep CodeMaster 4 open as the reference, then create your own index.html, styles.css, app.js and server.js. Write in Visual Studio Code, test in the browser, compare your screen with this app and repeat until the logic matches.",
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
    tools: () =>
      "Brug Visual Studio Code eller en anden enkel kodeeditor. Tjek resultatet i Chrome eller Edge, åbn DevTools med F12, hold CodeMaster 4 ved siden af og sammenlign lektionens struktur: grundlag, eksempel, opgaver og kontrol.",
    buildTools: () =>
      "Arbejd som på et rigtigt projekt: åbn CodeMaster 4 som reference, og opret dine egne filer index.html, styles.css, app.js og server.js. Skriv i Visual Studio Code, test i browseren, sammenlign din skærm med denne app og gentag til logikken passer.",
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
    tools: () =>
      "გამოიყენე Visual Studio Code ან სხვა მარტივი კოდის რედაქტორი. შედეგი შეამოწმე Chrome-ში ან Edge-ში, DevTools გახსენი F12-ით, გვერდით გქონდეს CodeMaster 4 და შეადარე გაკვეთილის სტრუქტურა: საფუძველი, მაგალითი, დავალებები და შემოწმება.",
    buildTools: () =>
      "იმუშავე როგორც ნამდვილ პროექტზე: გახსენი CodeMaster 4 როგორც ნიმუში და გვერდით შექმენი შენი index.html, styles.css, app.js და server.js. წერე Visual Studio Code-ში, შეამოწმე ბრაუზერში, შეადარე შენი ეკრანი ამ აპს და გაიმეორე სანამ ლოგიკა დაემთხვევა.",
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
    tools: () =>
      "Nutze Visual Studio Code oder einen anderen einfachen Code-Editor. Prüfe das Ergebnis in Chrome oder Edge, öffne DevTools mit F12, halte CodeMaster 4 daneben offen und vergleiche die Struktur der Lektion: Grundlage, Beispiel, Aufgaben und Prüfung.",
    buildTools: () =>
      "Arbeite wie an einem echten Projekt: Öffne CodeMaster 4 als Vorlage und erstelle daneben deine eigenen Dateien index.html, styles.css, app.js und server.js. Schreibe in Visual Studio Code, teste im Browser, vergleiche deinen Bildschirm mit dieser App und wiederhole, bis die Logik passt.",
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
    track: "general",
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
  const seeds = state.track === "build" ? buildAppSeeds : lessonSeeds;
  return seeds.map((seed) => ({
    id: seed[0],
    title: seed[langIndex],
    reading: t.reading(seed[langIndex]),
    code: seed[6],
    tools: state.track === "build" ? t.buildTools(seed[langIndex]) : t.tools(seed[langIndex]),
    skills: t.skills,
    practice: t.practice,
    quality: t.quality,
    tasks: t.tasks.map((task, index) => `${t.taskPrefix} ${index + 1}: ${task}.`),
  }));
}

function generalCourseComplete() {
  return lessonSeeds.every((seed) => state.done.includes(seed[0]));
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
  const t = text();
  $("planTitle").textContent = state.track === "build" ? t.trackBuildApp : t.planTitle;
  $("trackSwitch").innerHTML = `
    <button class="track-button" type="button" data-track="general" aria-pressed="${state.track === "general"}">${t.trackGeneral}</button>
    <button class="track-button" type="button" data-track="build" aria-pressed="${state.track === "build"}">${t.trackBuildApp}</button>
  `;
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
  $("moduleTools").textContent = lesson.tools;
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
  const currentIds = new Set(allLessons.map((lesson) => lesson.id));
  const doneTasks = Object.entries(state.tasks)
    .filter(([lessonId]) => currentIds.has(lessonId))
    .flatMap(([, tasks]) => tasks).length;
  const doneLessons = allLessons.filter((lesson) => state.done.includes(lesson.id)).length;
  $("completedCount").textContent = doneLessons;
  $("taskCount").textContent = doneTasks;
  $("focusScore").textContent = `${Math.round(((doneLessons + doneTasks / lessonTexts[state.lang].tasks.length) / allLessons.length) * 100)}%`;
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

function openTrackRecommendation() {
  $("trackRecommendModal").classList.add("is-open");
  $("trackRecommendModal").setAttribute("aria-hidden", "false");
}

function closeTrackRecommendation() {
  $("trackRecommendModal").classList.remove("is-open");
  $("trackRecommendModal").setAttribute("aria-hidden", "true");
}

function switchTrack(track) {
  state.track = track;
  active = 0;
  render();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) feedback();

  const lessonButton = event.target.closest("button[data-index]");
  if (lessonButton) {
    active = Number(lessonButton.dataset.index);
    render();
  }

  const trackButton = event.target.closest("button[data-track]");
  if (trackButton) {
    const nextTrack = trackButton.dataset.track;
    if (nextTrack === "build" && state.track !== "build" && !generalCourseComplete()) {
      openTrackRecommendation();
    } else {
      switchTrack(nextTrack);
    }
  }

  const langButton = event.target.closest("button[data-lang]");
  if (langButton) {
    state.lang = langButton.dataset.lang;
    closeLanguage();
    render();
  }

  if (event.target.matches("[data-close-settings]")) closeSettings();
  if (event.target.matches("[data-close-language]")) closeLanguage();
  if (event.target.matches("[data-close-track-recommend]")) closeTrackRecommendation();
});

$("settingsOpen").addEventListener("click", openSettings);
$("settingsClose").addEventListener("click", closeSettings);
$("languageOpen").addEventListener("click", openLanguage);
$("languageClose").addEventListener("click", closeLanguage);
$("trackRecommendClose").addEventListener("click", closeTrackRecommendation);
$("trackReturnGeneral").addEventListener("click", () => {
  closeTrackRecommendation();
  switchTrack("general");
});
$("trackContinueBuild").addEventListener("click", () => {
  closeTrackRecommendation();
  switchTrack("build");
});

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
  $("installInfoText").textContent = `${text().updateCheckedText}\n\n${new Date().toLocaleString()}`;
});

$("forceUpdateButton").addEventListener("click", async () => {
  $("installInfoText").textContent = text().forceUpdateText;
  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  }
  setTimeout(() => {
    const url = new URL(location.href);
    url.searchParams.set("forceUpdate", Date.now().toString());
    location.replace(url.toString());
  }, 900);
});

$("resetProgress").addEventListener("click", () => {
  state.done = [];
  state.tasks = {};
  state.track = "general";
  active = 0;
  render();
});

render();
