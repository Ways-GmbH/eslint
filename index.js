/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Teddy Katz
 */
"use strict";

module.exports = {
    extends: ["./default.yml"],
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
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
