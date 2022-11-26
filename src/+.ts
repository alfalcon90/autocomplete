const completionSpec: Fig.Spec = {
  name: "+",
  description: "Bemmy's Commands",
  subcommands: [
    {
      icon: "🤖",
      name: "build_runner",
      description: "Starts build_runner code generator",
      insertValue:
        "\b\bflutter pub run build_runner watch --delete-conflicting-outputs\n",
    },
    {
      icon: "🤖",
      name: "import_sorter",
      description: "Starts import_sorter",
      insertValue: "\b\bflutter pub run import_sorter:main\n",
    },
    {
      icon: "☁️",
      name: "serve",
      description:
        "Launches firebase emulator and starts watching for file changes",
      insertValue: `\b\bosascript \
      -e 'tell application "Code" to activate' \
      -e 'tell application "System Events" to tell process "Code" to keystroke "t" using command down' \
      -e 'delay 2.5' \
      -e 'tell application "System Events" to tell process "Code" to keystroke "node12 && npm run watch"' \
      -e 'tell application "System Events" to tell process "Code" to key code 76' && npm run stop && firebase use stg && cp ../stg.firebase.json ../firebase.json && cp src/config/stg.serviceAccount.json src/config/serviceAccount.json && node12 && npm run serve\n`,
    },
    {
      icon: "☁️",
      name: ["deploy", "d"],
      description: "Deploys firebase project",
      insertValue: "\b\bfirebase deploy\n",
      options: [
        {
          name: ["--prod", "-p"],
          description: "Deploys firebase project to production",
          insertValue:
            "\b\b\b\bcp prod.firebase.json firebase.json && cp functions/src/config/prod.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P prod\n",
        },
        {
          name: ["--stg", "-s"],
          description: "Deploys firebase project to staging",
          insertValue:
            "\b\b\b\bcp stg.firebase.json firebase.json && cp functions/src/config/stg.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P stg\n",
        },
      ],
      subcommands: [
        {
          name: ["functions", "f"],
          description: "Deploys firebase functions",
          insertValue: `\b\b\b\b\b\b\b\b\bfirebase deploy --only functions\n`,
          options: [
            {
              name: ["--prod", "-p"],
              description: "Deploys firebase functions to production",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp prod.firebase.json firebase.json && cp functions/src/config/prod.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P prod --only functions\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Deploys firebase functions to staging",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp stg.firebase.json firebase.json && cp functions/src/config/stg.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P stg --only functions\n",
            },
          ],
        },
        {
          name: ["hosting", "h"],
          description: "Deploys firebase hosting",
          insertValue: "\b\b\b\b\b\b\b\b\bfirebase deploy --only hosting\n",
          options: [
            {
              name: ["--prod", "-p"],
              description: "Deploys firebase hosting to production",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp prod.firebase.json firebase.json && firebase deploy -P prod --only hosting\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Deploys firebase hosting to staging",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp stg.firebase.json firebase.json && firebase deploy -P stg --only hosting\n",
            },
          ],
        },
        {
          name: ["firestore", "s"],
          description: "Deploys firestore rules",
          insertValue: `\b\b\b\b\b\b\b\b\bfirebase deploy --only firestore\n`,
          options: [
            {
              name: ["--prod", "-p"],
              description: "Deploys firestore rules to production",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp prod.firebase.json firebase.json && cp functions/src/config/prod.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P prod --only firestore\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Deploys firestore rules to staging",
              insertValue:
                "\b\b\b\b\b\b\b\b\bcp stg.firebase.json firebase.json && cp functions/src/config/stg.serviceAccount.json functions/src/config/serviceAccount.json && firebase deploy -P stg --only firestore\n",
            },
          ],
        },
      ],
    },
    {
      icon: "➡️",
      name: ["switch", "s"],
      description: "Switch firebase or flutter config",
      subcommands: [
        {
          name: ["cloud", "c"],
          description: "Switch firebase config",
          options: [
            {
              name: ["--prod", "-p"],
              description: "Switch firebase config to production",
              insertValue:
                "\b\b\b\bcp prod.firebase.json firebase.json && cp functions/src/config/prod.serviceAccount.json functions/src/config/serviceAccount.json && firebase use prod\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Switch firebase config to staging",
              insertValue:
                "\b\b\b\bcp stg.firebase.json firebase.json && cp functions/src/config/stg.serviceAccount.json functions/src/config/serviceAccount.json && firebase use stg\n",
            },
          ],
        },
        {
          name: ["app", "a"],
          description: "Switch flutter config",
          options: [
            {
              name: ["--prod", "-p"],
              description: "Switch app config to production",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/prod.firebase-config.js web/firebase-config.js\ncp lib/generated/prod.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/prod.secrets.dart lib/core/domain/secrets.dart\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Switch app config to staging",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/stg.firebase-config.js web/firebase-config.js\ncp lib/generated/stg.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/stg.secrets.dart lib/core/domain/secrets.dart\n",
            },
          ],
        },
      ],
    },
    {
      icon: "🧽",
      name: "clean",
      description: "Cleans flutter workspace",
      insertValue: "\b\bflutter clean && flutter pub get\n",
    },
    {
      icon: "🛠",
      name: ["build", "b"],
      description: "Builds flutter app",
      subcommands: [
        {
          name: ["android", "a"],
          description: "Build android app",
          insertValue:
            "\b\b\b\b\b\b\b\bflutter build appbundle --obfuscate --split-debug-info=build/app/outputs/symbols --bundle-sksl-path sksl/flutter_android.sksl.json \n",
        },
        {
          name: ["ios", "i"],
          description: "Build ios app",
          insertValue:
            "\b\b\b\b\b\b\b\bflutter build ipa --obfuscate --split-debug-info=build/app/outputs/symbols --bundle-sksl-path sksl/flutter_ios.sksl.json\n",
        },
        {
          name: ["web", "w"],
          description: "Build web app",
          subcommands: [
            {
              name: ["prod", "p"],
              description: "Build web app for production",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/prod.firebase-config.js web/firebase-config.js\ncp lib/generated/prod.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/prod.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\n",
              options: [
                {
                  name: ["--deploy", "-d"],
                  description: "Deploy to production website",
                  insertValue:
                    "\b\b\b\b\b\b\b\b\b\b\b\bcp web/prod.firebase-config.js web/firebase-config.js\ncp lib/generated/prod.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/prod.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\nrm -rf ../firebase/public/**\ncp -r ./build/web/. ../firebase/public\ncd ../firebase\ncp prod.firebase.json firebase.json\nfirebase deploy -P prod --only hosting:production\ncd ../app\n",
                },
              ],
            },
            {
              name: ["stg", "s"],
              description: "Build web app for staging",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/stg.firebase-config.js web/firebase-config.js\ncp lib/generated/stg.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/stg.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\n",
              options: [
                {
                  name: ["--deploy", "-d"],
                  description: "Deploy to staging website",
                  insertValue:
                    "\b\b\b\b\b\b\b\b\b\b\b\bcp web/stg.firebase-config.js web/firebase-config.js\ncp lib/generated/stg.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/stg.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\nrm -rf ../firebase/public/**\ncp -r ./build/web/. ../firebase/public\ncd ../firebase\ncp stg.firebase.json firebase.json\nfirebase deploy -P stg --only hosting:staging\ncd ../app\n",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: "▶️",
      name: ["run", "r"],
      description: "Runs flutter app",
      subcommands: [
        {
          name: ["release", "r"],
          description: "Runs flutter app in release mode",
          insertValue: "\b\b\b\b\b\b\b\bflutter run --release\n",
        },
        {
          name: ["profile", "p"],
          description: "Runs flutter app in profile mode",
          insertValue: "\b\b\b\b\b\b\b\bflutter run --profile\n",
          options: [
            {
              name: ["--sksl", "-s"],
              description: "Run SkSL warmup",
              insertValue:
                "\b\b\b\b\b\b\b\bflutter run --profile --cache-sksl --purge-persistent-cache\n",
            },
          ],
        },
      ],
    },
  ],
};
export default completionSpec;
