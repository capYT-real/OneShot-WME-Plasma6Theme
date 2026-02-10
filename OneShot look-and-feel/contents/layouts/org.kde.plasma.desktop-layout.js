var panel = new Panel
var panelScreen = panel.screen
panel.height = 66
panel.location = "bottom";
const geo = screenGeometry(panelScreen);
panel.alignment = "center";
panel.minimumLength = geo.width * 3 /4
panel.maximumLength = geo.width * 3 /4
panel.lengthMode = "custom"
panel.floating = true

// panel.addWidget("org.kde.plasma.marginsseparator")
panel.addWidget("org.kde.plasma.pager")
var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Alt+F1")

const globals = ConfigFile("kdeglobals")
globals.group = "General"
const user_browser = "file:///usr/share/applications/" + globals.readEntry("BrowserApplication")
var appsLaunch = panel.addWidget("org.kde.plasma.quicklaunch")
appsLaunch.currentConfigGroup = ["General"]
appsLaunch.writeConfig("launcherUrls", [user_browser,
                "file:///usr/share/applications/org.kde.dolphin.desktop",
                "file:///usr/share/applications/org.kde.konsole.desktop"
                ])
appsLaunch.writeConfig("maxSectionCount", 1)

panel.addWidget("org.kde.plasma.panelspacer")

var tasks = panel.addWidget("org.kde.plasma.taskmanager")
tasks.currentConfigGroup = ["General"]
tasks.writeConfig("maxStripes", "2")
tasks.writeConfig("forceStripes", true)
tasks.writeConfig("launchers", "")
tasks.writeConfig("onlyGroupWhenFull", false)

panel.addWidget("org.kde.plasma.panelspacer")

var langIds = ["as",    // Assamese
               "bn",    // Bengali
               "bo",    // Tibetan
               "brx",   // Bodo
               "doi",   // Dogri
               "gu",    // Gujarati
               "hi",    // Hindi
               "ja",    // Japanese
               "kn",    // Kannada
               "ko",    // Korean
               "kok",   // Konkani
               "ks",    // Kashmiri
               "lep",   // Lepcha
               "mai",   // Maithili
               "ml",    // Malayalam
               "mni",   // Manipuri
               "mr",    // Marathi
               "ne",    // Nepali
               "or",    // Odia
               "pa",    // Punjabi
               "sa",    // Sanskrit
               "sat",   // Santali
               "sd",    // Sindhi
               "si",    // Sinhala
               "ta",    // Tamil
               "te",    // Telugu
               "th",    // Thai
               "ur",    // Urdu
               "vi",    // Vietnamese
               "zh_CN", // Simplified Chinese
               "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}

// panel.addWidget("org.kde.plasma.trash")
var atray = panel.addWidget("org.kde.plasma.systemtray")
atray.writeConfig("iconSpacing", "1")

var aclock = panel.addWidget("org.kde.plasma.analogclock")
aclock.currentConfigGroup = ["General"]
aclock.writeConfig("showSecondHand", true)

// panel.addWidget("org.kde.plasma.lock_logout")
