const completionSpec: Fig.Spec = {
  name: "+",
  description: "Bemmy's Commands",
  subcommands: [
    {
      icon: "🤖",
      name: "build_runner",
      description: "Starts build_runner code generator",
      insertValue:
        "\b\bdart run build_runner watch --delete-conflicting-outputs\n",
    },
    {
      icon: "🤖",
      name: "import_sorter",
      description: "Starts import_sorter",
      insertValue: "\b\bdart run import_sorter:main\n",
    },
    {
      icon: "▶️",
      name: "serve",
      description: "Run serve.sh script under scripts folder",
      insertValue: "\b\bzsh scripts/serve.zsh",
    },
    {
      icon: "➡️",
      name: ["switch", "s"],
      description: "Switch firebase or flutter config",
      subcommands: [
        {
          name: ["app", "a"],
          description: "Switch flutter config",
          options: [
            {
              name: ["--prod", "-p"],
              description: "Switch app config to production",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/prod.firebase-config.js web/firebase-config.js\ncp lib/generated/prod.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/prod.secrets.dart lib/core/domain/secrets.dart\ncp android/app/prod.google-services.json android/app/google-services.json\ncp ios/Runner/prod.GoogleService-Info.plist ios/Runner/GoogleService-Info.plist\ncp ios/Flutter/prod.Secrets.xcconfig ios/Flutter/Secrets.xcconfig\n",
            },
            {
              name: ["--stg", "-s"],
              description: "Switch app config to staging",
              insertValue:
                "\b\b\b\b\b\b\b\bcp web/stg.firebase-config.js web/firebase-config.js\ncp lib/generated/stg.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/stg.secrets.dart lib/core/domain/secrets.dart\ncp android/app/stg.google-services.json android/app/google-services.json\ncp ios/Runner/stg.GoogleService-Info.plist ios/Runner/GoogleService-Info.plist\ncp ios/Flutter/stg.Secrets.xcconfig ios/Flutter/Secrets.xcconfig\n",
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
                    "\b\b\b\b\b\b\b\b\b\b\b\bcp web/prod.firebase-config.js web/firebase-config.js\ncp lib/generated/prod.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/prod.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\nrm -rf ../firebase/public/**\ncp -r ./build/web/. ../firebase/public\ncd ../firebase\ncp prod.firebase.json firebase.json\nfirebase deploy -P prod --only hosting:production && cd ../app\n",
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
                    "\b\b\b\b\b\b\b\b\b\b\b\bcp web/stg.firebase-config.js web/firebase-config.js\ncp lib/generated/stg.firebase_options.dart lib/generated/firebase_options.dart\ncp lib/core/domain/stg.secrets.dart lib/core/domain/secrets.dart\nflutter build web --web-renderer canvaskit\nrm -rf ../firebase/public/**\ncp -r ./build/web/. ../firebase/public\ncd ../firebase\ncp stg.firebase.json firebase.json\nfirebase deploy -P stg --only hosting:staging && cd ../app\n",
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
