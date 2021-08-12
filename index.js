/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Nico Hülscher
 */
"use strict";

module.exports = {
    extends: ["./default.yml"],
    rules: {
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/no-shadow": [
        "error"
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-method",
            "protected-method",
            "private-method",
            "static-method",
            "instance-method",
            "abstract-method",
            "decorated-method",
            "method"
          ]
        }
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
