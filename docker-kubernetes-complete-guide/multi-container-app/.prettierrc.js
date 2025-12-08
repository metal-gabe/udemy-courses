export default {
   arrowParens: "avoid",
   bracketSameLine: false, // https://prettier.io/blog/2021/09/09/2.4.0.html -- used to be `jsxBracketSameLine`
   bracketSpacing: true,
   embeddedLanguageFormatting: "auto", // formats quoted code embedded in the file (e.g. markdown code blocks)
   endOfLine: "lf",
   htmlWhitespaceSensitivity: "css",
   insertPragma: false,
   jsxSingleQuote: false,
   printWidth: 120,
   proseWrap: "never", // this prevents `.md` files from being word wrapped
   quoteProps: "consistent",
   requirePragma: false,
   semi: true,
   singleQuote: true,
   tabWidth: 3,
   trailingComma: "all",
   useTabs: false,
   vueIndentScriptAndStyle: false,
   // Are the below "overrides" needed? -- https://prettier.io/docs/en/configuration.html#configuration-overrides
   overrides: [
      // {
      //    files: ".prettierrc.js",
      //    options: { parser: "js" },
      // },
      {
         files: ["*.css", "*.js", "*.jsx", "*.json", "*.md", "*.scss", "*.ts", "*.tsx", "*.yml", "*.yaml"],
         options: {
            singleQuote: true,
         },
      },
   ],
};
