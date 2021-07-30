/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Teddy Katz
 */
"use strict";

module.exports = {
    extends: ["./default.yml"],
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": { vars: "all", args: "after-used", argsIgnorePattern: "^_" },
      "@typescript-eslint/no-shadow": [
        "error"
      ],
      "jsdoc/check-tag-names": "off",
    },
    overrides: [
        {
          // enable the rule specifically for TypeScript files
          "files": ["*.ts", "*.tsx"],
          "rules": {
            "@typescript-eslint/explicit-member-accessibility": ["error"]
          }
        }
    ]
};
