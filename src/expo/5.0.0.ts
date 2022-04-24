import { _gen } from "./generators";
const completion: Fig.Subcommand = {
  name: "expo",
  icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
  description:
    "Tools for creating, running, and deploying Universal Expo and React Native apps",
  options: [
    {
      name: ["-h", "--help"],
      priority: 1,
      description: "Output usage information",
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
    },
    {
      name: ["-V", "--version"],
      description: "Output the version number",
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
      priority: 1,
    },
  ],
  subcommands: [
    {
      name: ["login", "signin"],
      hidden: false,
      description: "Login to an Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-u", "--username"],
          description: "Username",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--password"],
          description: "Password",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--otp",
          description: "One-time password from your 2FA device",
          args: {
            name: "string",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/login.png",
    },
    {
      name: "logout",
      hidden: false,
      description: "Logout of an Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/logout.png",
    },
    {
      name: "register",
      hidden: false,
      description: "Sign up for a new Expo account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/register.png",
    },
    {
      name: ["whoami", "w"],
      hidden: false,
      description: "Return the currently authenticated account",
      priority: 63,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
    },
    {
      name: ["build:ios", "bi"],
      hidden: false,
      description: "Superseded by eas build in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear all credentials stored on Expo servers",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-dist-cert",
          description: "Remove Distribution Certificate stored on Expo servers",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-push-key",
          description: "Remove Push Notifications Key stored on Expo servers",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-push-cert",
          description:
            "Remove Push Notifications Certificate stored on Expo servers. Use of Push Notifications Certificates is deprecated",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--clear-provisioning-profile",
          description: "Remove Provisioning Profile stored on Expo servers",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: ["-r", "--revoke-credentials"],
          description:
            "Revoke credentials on developer.apple.com, select appropriate using --clear-* options",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--apple-id",
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable)",
          args: {
            name: "login",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [archive|simulator]",
          args: {
            name: "archive|simulator",
            suggestions: [
              {
                name: "archive",
              },
              {
                name: "simulator",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--release-channel",
          description: "Pull from specified release channel",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--no-publish",
          description: "Disable automatic publishing before building",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-wait",
          description: "Exit immediately after scheduling build",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--team-id",
          description: "Apple Team ID",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--dist-p12-path",
          description:
            "Path to your Distribution Certificate P12 (set password as EXPO_IOS_DIST_P12_PASSWORD environment variable)",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--push-id",
          description: "Push Key ID (ex: 123AB4C56D)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--push-p8-path",
          description: "Path to your Push Key .p8 file",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--provisioning-profile-path",
          description: "Path to your Provisioning Profile",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--skip-credentials-check",
          description: "Skip checking credentials",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--skip-workflow-check",
          description:
            "Skip warning about build service bare workflow limitations",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: ["build:android", "ba"],
      hidden: false,
      description: "Superseded by eas build in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear stored credentials",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--release-channel",
          description: "Pull from specified release channel",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--no-publish",
          description: "Disable automatic publishing before building",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-wait",
          description: "Exit immediately after triggering build",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--keystore-path",
          description: "Path to your Keystore: *.jks",
          args: {
            name: "path",
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--keystore-alias",
          description: "Keystore Alias",
          args: {
            name: "alias",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--generate-keystore",
          description: "[deprecated] Generate Keystore if one does not exist",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--skip-workflow-check",
          description:
            "Skip warning about build service bare workflow limitations",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [app-bundle|apk]",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "build:web",
      hidden: false,
      description: "Build the web app for production",
      priority: 58,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear all cached build files and assets",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--no-pwa",
          description:
            "Prevent webpack from generating the manifest.json and injecting meta into the index.html head",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: ["-d", "--dev"],
          description: "Turns dev flag on before bundling",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webpack.png",
    },
    {
      name: ["build:status", "bs"],
      hidden: false,
      description: "Superseded by eas build:list in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/info.png",
    },
    {
      name: "credentials:manager",
      hidden: false,
      description: "Manage your credentials",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-p", "--platform"],
          description: "Platform: [android|ios]",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/list.png",
    },
    {
      name: "customize:web",
      hidden: false,
      description: "Eject the default web files for customization",
      priority: 60,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-f", "--force"],
          description: "Allows replacing existing files",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/force.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/customize.png",
    },
    {
      name: "eject",
      hidden: false,
      description: "Superseded by expo prebuild",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages and CocoaPods",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=npm",
        },
        {
          name: ["-p", "--platform"],
          description: "Platforms to sync: ios, android, all. Default: all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/eject.png",
    },
    {
      name: "prebuild",
      hidden: false,
      description:
        "Create native iOS and Android project files before building natively. Learn more: https://docs.expo.dev/workflow/customizing/",
      priority: 60,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages and CocoaPods",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--clean",
          description:
            "Delete the native folders and regenerate them before applying changes",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=npm",
        },
        {
          name: "--template",
          description:
            "Project template to clone from. File path pointing to a local tar file or a github repo",
          args: {
            name: "template",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: ["-p", "--platform"],
          description: "Platforms to sync: ios, android, all. Default: all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--skip-dependency-update",
          description:
            "Preserves versions of listed packages in package.json (comma separated list)",
          args: {
            name: "dependencies",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/prebuild.png",
    },
    {
      name: "bundle-assets",
      hidden: true,
      description:
        "Bundle assets for a detached app. This command should be executed from xcode or gradle",
      priority: 52,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--dest",
          description: "Destination directory for assets",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--platform",
          description: "Detached project platform",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
    },
    {
      name: "prepare-detached-build",
      hidden: true,
      description: "Prepare a detached project for building",
      priority: 52,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--platform",
          description: "Detached project platform",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--skipXcodeConfig",
          description: "[iOS only] if true, do not configure Xcode project",
          args: {
            name: "bool",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
    },
    {
      name: "export",
      hidden: false,
      description:
        "Export the static files of the app for hosting it on a web server",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--platform",
          description: "Platforms: android, ios, all",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "all",
              },
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--public-url"],
          description:
            "The public url that will host the static files (required)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--output-dir",
          description: "The directory to export the static files to",
          args: {
            name: "dir",
            template: "folders",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: ["-a", "--asset-url"],
          description:
            "The absolute or relative url that will host the asset files",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-d", "--dump-assetmap"],
          description: "Dump the asset map for further processing",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: "--dev",
          description:
            "Configure static files for developing locally using a non-https server",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: ["-s", "--dump-sourcemap"],
          description: "Dump the source map for debugging the JS bundle",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/quiet.png",
        },
        {
          name: ["-t", "--target"],
          description: "Target environment for which this export is intended",
          args: {
            name: "managed|bare",
            suggestions: [
              {
                name: "managed",
              },
              {
                name: "bare",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
        {
          name: "--merge-src-dir",
          description: "A repeatable source dir to merge in",
          args: {
            name: "dir",
            template: "folders",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--merge-src-url",
          description: "A repeatable source tar.gz file URL to merge in",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen[`max-workers`],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--experimental-bundle",
          description: "Export bundles for use with EAS updates",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
    },
    {
      name: "fetch:ios:certs",
      hidden: false,
      description:
        "Download the project's iOS standalone app signing credentials",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "fetch:android:keystore",
      hidden: false,
      description: "Download the project's Android keystore",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "fetch:android:hashes",
      hidden: false,
      description: "Compute and log the project's Android key hashes",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "fetch:android:upload-cert",
      hidden: false,
      description: "Download the project's Android keystore",
      priority: 57,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "config",
      hidden: false,
      description: "Show the project config",
      priority: 61,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-t", "--type"],
          description: "Type of config to show",
          args: {
            name: "public|prebuild|introspect",
            suggestions: [
              {
                name: "public",
              },
              {
                name: "prebuild",
              },
              {
                name: "introspect",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--full",
          description: "Include all project config data",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--json",
          description: "Output in JSON format",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/config.png",
    },
    {
      name: "doctor",
      hidden: false,
      description: "Diagnose issues with the project",
      priority: 61,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--fix-dependencies",
          description: "Fix incompatible dependency versions",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/doctor.png",
    },
    {
      name: ["upgrade", "update"],
      hidden: false,
      description:
        "Upgrade the project packages and config for the given SDK version",
      priority: 61,
      args: {
        isOptional: true,
        name: "sdk-version",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=npm",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/upgrade.png",
    },
    {
      name: ["init", "i"],
      hidden: false,
      description: "Create a new Expo project",
      priority: 64,
      args: {
        isOptional: true,
        name: "name",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-t", "--template"],
          description:
            'Specify which template to use. Valid options are "blank", "tabs", "bare-minimum" or a package on npm (e.g. "expo-template-bare-minimum") that includes an Expo project template',
          args: {
            name: "name",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/export.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=npm",
        },
        {
          name: "--no-install",
          description: "Skip installing npm packages or CocoaPods",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--name",
          description: "Deprecated: Use expo init [name] instead",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--yes",
          description:
            'Use default options. Same as "expo init . --template blank',
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/true.png",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when Yarn is installed)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/init.png",
    },
    {
      name: ["install", "add"],
      hidden: false,
      description: "Install a module or other package to a project",
      priority: 64,
      args: {
        generators: _gen[`npm`],
        isOptional: true,
        isVariadic: true,
        name: "packages",
        debounce: true,
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--npm",
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=npm",
        },
        {
          name: "--yarn",
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "fig://icon?type=yarn",
        },
      ],
      icon: "fig://icon?type=npm",
    },
    {
      name: ["publish", "p"],
      hidden: false,
      description: "Deploy a project to Expo hosting",
      priority: 59,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output from the Metro bundler",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/quiet.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "A phone number or email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: ["-t", "--target"],
          description:
            "Target environment for which this publish is intended. Options are `managed` or `bare`",
          args: {
            name: "managed|bare",
            suggestions: [
              {
                name: "managed",
              },
              {
                name: "bare",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen[`max-workers`],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--release-channel",
          description:
            "The release channel to publish to. Default is 'default'",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:set", "ps"],
      hidden: false,
      description: "Specify the channel to serve a published release",
      priority: 59,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--release-channel"],
          description: "The channel to set the published release. (Required)",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--publish-id"],
          description:
            "The id of the published release to serve from the channel. (Required)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:rollback", "pr"],
      hidden: false,
      description: "Undo an update to a channel",
      priority: 59,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--channel-id",
          description: "This flag is deprecated",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-c", "--release-channel"],
          description: "The channel to rollback from. (Required)",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-s", "--sdk-version"],
          description: "The sdk version to rollback. (Required)",
          args: {
            name: "version",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
        },
        {
          name: ["-p", "--platform"],
          description: "The platform to rollback",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish-rollback.png",
    },
    {
      name: ["publish:history", "ph"],
      hidden: false,
      description: "Log the project's releases",
      priority: 59,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-c", "--release-channel"],
          description:
            "Filter by release channel. If this flag is not included, the most recent publications will be shown",
          args: {
            name: "name",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--count",
          description: "Number of logs to view, maximum 100, default 5",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: ["-p", "--platform"],
          description:
            "Filter by platform, android or ios. Defaults to both platforms",
          args: {
            name: "platform",
            suggestions: [
              {
                name: "android",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
              },
              {
                name: "ios",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-s", "--sdk-version"],
          description: "Filter by SDK version e.g. 35.0.0",
          args: {
            name: "version",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/expo.png",
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: ["publish:details", "pd"],
      hidden: false,
      description: "Log details of a published release",
      priority: 59,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--publish-id",
          description: "Publication id. (Required)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/publish.png",
    },
    {
      name: "push:android:upload",
      hidden: false,
      description: "Upload an FCM key for Android push notifications",
      priority: 56,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--api-key",
          description: "Server API key for FCM",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push.png",
    },
    {
      name: "push:android:show",
      hidden: false,
      description:
        "Log the value currently in use for FCM notifications for this project",
      priority: 56,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push.png",
    },
    {
      name: "push:android:clear",
      hidden: false,
      description: "Delete a previously uploaded FCM credential",
      priority: 56,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/push-clear.png",
    },
    {
      name: "run:android",
      hidden: false,
      description: "Run the Android app binary locally",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-bundler",
          description: "Skip starting the Metro bundler",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/metro.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name to build the app on",
          args: {
            name: "device",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Metro bundler on. Default: 8081",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--variant",
          description: "(Android) build variant",
          args: {
            name: "name",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: "run:ios",
      hidden: false,
      description: "Run the iOS app binary locally",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-build-cache",
          description: "Clear the native derived data before building",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-install",
          description: "Skip installing dependencies",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-bundler",
          description: "Skip starting the Metro bundler",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/metro.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name or UDID to build the app on",
          args: {
            generators: _gen[`xcode-devices`],
            name: "device",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Metro bundler on. Default: 8081",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--scheme",
          description: "Scheme to build",
          args: {
            generators: _gen[`xcode-scheme`],
            name: "scheme",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--configuration",
          description:
            "Xcode configuration to use. Debug or Release. Default: Debug",
          args: {
            generators: _gen[`xcode-configuration`],
            name: "configuration",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "send",
      hidden: false,
      description: "Share the project's URL to an email address",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "Email address to send the URL to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
    },
    {
      name: ["start", "r"],
      hidden: false,
      description: "Start a local dev server for the app",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "An email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/clear.png",
        },
        {
          name: "--max-workers",
          description: "Maximum number of tasks to allow Metro to spawn",
          args: {
            generators: _gen[`max-workers`],
            name: "Number of workers",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--no-dev",
          description: "Turn development mode off",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--minify",
          description: "Minify code",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/minify.png",
        },
        {
          name: "--https",
          description: "To start webpack with https protocol",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--force-manifest-type",
          description: "Override auto detection of manifest type",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--port"],
          description:
            "Port to start the native Metro bundler on (does not apply to web or tunnel). Default: 19000",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--dev",
          description: "Deprecated: Dev mode is used by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--no-minify",
          description: "Deprecated: Minify is disabled by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-https",
          description: "Deprecated: https is disabled by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play.png",
    },
    {
      name: ["start:web", "web"],
      hidden: false,
      description: "Start a Webpack dev server for the web app",
      priority: 64,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--no-dev",
          description: "Turn development mode off",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--minify",
          description: "Minify code",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/minify.png",
        },
        {
          name: "--https",
          description: "To start webpack with https protocol",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--force-manifest-type",
          description: "Override auto detection of manifest type",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start the Webpack bundler on. Default: 19006",
          args: {
            name: "port",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/number.png",
        },
        {
          name: ["-s", "--send-to"],
          description: "An email address to send a link to",
          args: {
            name: "dest",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/send.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--dev",
          description: "Deprecated: Dev mode is used by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--no-minify",
          description: "Deprecated: Minify is disabled by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--no-https",
          description: "Deprecated: https is disabled by default",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/skip.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
    },
    {
      name: ["upload:android", "ua"],
      hidden: false,
      description: "Superseded by eas submit in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--verbose",
          description: "Migrate to eas submit --verbose",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/verbose.png",
        },
        {
          name: "--latest",
          description: "Migrate to eas submit --latest",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
        {
          name: "--id",
          description: "Migrate to eas submit --id <id>",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--path",
          description: "Migrate to eas submit --path <path>",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--url",
          description: "Migrate to eas submit --url <url>",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--android-package",
          description:
            "Migrate to eas submit (android-package is auto inferred)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: "--type",
          description: "Migrate to eas submit (type is auto inferred)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--key",
          description: "Migrate to eas.json's serviceAccountKeyPath property",
          args: {
            name: "key",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/key.png",
        },
        {
          name: "--track",
          description: "Migrate to eas.json's track property",
          args: {
            name: "track",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--release-status",
          description: "Migrate to eas.json's releaseStatus property",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play-store.png",
    },
    {
      name: ["upload:ios", "ui"],
      hidden: false,
      description: "Superseded by eas submit in eas-cli",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--verbose",
          description: "Migrate to eas submit --verbose",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/verbose.png",
        },
        {
          name: "--latest",
          description: "Migrate to eas submit --latest",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
        {
          name: "--id",
          description: "Migrate to eas submit --id <id>",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--path",
          description: "Migrate to eas submit --path <path>",
          args: {
            name: "path",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/path.png",
        },
        {
          name: "--url",
          description: "Migrate to eas submit --url <url>",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--apple-id",
          description: "Migrate to eas.json's appleId property",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: "--itc-team-id",
          description: "Migrate to eas.json's appleTeamId property",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--app-name",
          description: "Migrate to eas.json's appName property",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--company-name",
          description: "Migrate to eas.json's companyName property",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--sku",
          description: "Migrate to eas.json's sku property",
          args: {
            name: "sku",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--language",
          description: "Migrate to eas.json's language property",
          args: {
            name: "language",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/app-store.png",
    },
    {
      name: "client:ios",
      hidden: false,
      description: "Superseded by Expo Dev Clients",
      priority: 51,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--apple-id",
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable)",
          args: {
            name: "login",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/download.png",
    },
    {
      name: "client:install:ios",
      hidden: false,
      description: "Install Expo Go for iOS on the simulator",
      priority: 62,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--latest",
          description:
            "Install the latest version of Expo Go, ignoring the current project version",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
    },
    {
      name: "client:install:android",
      hidden: false,
      description:
        "Install Expo Go for Android on a connected device or emulator",
      priority: 62,
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: ["-d", "--device"],
          description: "Device name to install the client on",
          args: {
            name: "device",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/devices.png",
        },
        {
          name: "--latest",
          description:
            "Install the latest version of Expo Go, ignore the current project version",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/latest.png",
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
    },
    {
      name: ["url", "u"],
      hidden: false,
      description: "Log a URL for opening the project in Expo Go",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--dev-client",
          description:
            "Experimental: Starts the bundler for use with the expo-development-client",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/dev.png",
        },
        {
          name: "--scheme",
          description: "Custom URI protocol to use with a development build",
          args: {
            name: "scheme",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/scheme.png",
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo Go on a connected Android device",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/android.png",
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo Go in a currently running iOS simulator on your computer",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/apple.png",
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/web.png",
        },
        {
          name: ["-m", "--host"],
          description:
            'Lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "mode",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--tunnel",
          description: "Same as --host tunnel",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/tunnel.png",
        },
        {
          name: "--lan",
          description: "Same as --host lan",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lan.png",
        },
        {
          name: "--localhost",
          description: "Same as --host localhost",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/localhost.png",
        },
        {
          name: "--offline",
          description: "Allows this command to run while offline",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/offline.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/url.png",
    },
    {
      name: "url:ipa",
      hidden: false,
      description: "Log the download URL for the standalone iOS binary",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/app-store.png",
    },
    {
      name: "url:apk",
      hidden: false,
      description: "Log the download URL for the standalone Android binary",
      priority: 55,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--public-url",
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/play-store.png",
    },
    {
      name: "webhooks",
      hidden: false,
      description: "List all webhooks for a project",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook.png",
    },
    {
      name: "webhooks:add",
      hidden: false,
      description: "Add a webhook to a project",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--url",
          description: "URL to request. (Required)",
          args: {
            name: "url",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--event",
          description:
            "Event type that triggers the webhook. [build] (Required)",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "secret",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-add.png",
    },
    {
      name: "webhooks:remove",
      hidden: false,
      description: "Delete a webhook",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--id",
          description: "ID of the webhook to remove",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-remove.png",
    },
    {
      name: "webhooks:update",
      hidden: false,
      description: "Update an existing webhook",
      priority: 54,
      args: {
        isOptional: true,
        template: "folders",
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          priority: 1,
          description: "Output usage information",
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/help.png",
        },
        {
          name: "--id",
          description: "ID of the webhook to update",
          args: {
            name: "id",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--url",
          description: "URL the webhook will request",
          args: {
            name: "url",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--event",
          description: "Event type that triggers the webhook. [build]",
          args: {
            name: "boolean",
            suggestions: [
              {
                name: "true",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/true.png",
              },
              {
                name: "false",
                icon: "https://raw.githubusercontent.com/expo/expo-cli/master/assets/fig/false.png",
              },
            ],
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/string.png",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "secret",
            isOptional: true,
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/lock.png",
        },
        {
          name: "--config",
          description:
            "Deprecated: Use app.config.js to switch config files instead",
          args: {
            name: "file",
            isOptional: true,
            template: "filepaths",
          },
          icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/block.png",
          priority: 2,
        },
      ],
      icon: "https://raw.githubusercontent.com/expo/expo-cli/main/assets/fig/webhook-update.png",
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["5.3.2"] = {};

export { versions };
export default completion;
