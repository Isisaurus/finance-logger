Finance logger application built using TypeScript and compiled using Webpack.

This project is a simple application created to get started with TypeScript, learn the basics and set up a development environment with Webpack.

---

To run this roject locally:

1. Clone this repository and open it in your code editor of choice

2. Run `npm run serve` script in the terminal from the root folder.

3. The website opens on localhost:8080. Make changes by editing files in the "src" folder.

4. Run `npm run build` in the terminal to bundle files into "public/bundle.js".

---

I have learned about the following concepts in TypeScript during this project:

- Compilation
- Types: number, string, boolean, array, object, function, enums, tuples
- Explicit and dynamic types (any)
- Configuring the tsconfig.json file
- Type Aliases
- Function Signitures
- DOM & Type Casting (as)
- Classes in TS
- Access Types in TS (private, public, readonly)
- TS Modules
- Interfaces
- Class Interfaces and refactoring the constructor()
- Generics
- More about Enums and Tuples

The files contain my course notes and example code for each topic (sandbox.ts).

---

For this project I have set up a development environment to bundle TypeScript modules into a single, bundle.j file with Webpack. To achieve this I have done the following:

- installed development dependencies such as: ts-loader, webpack-cli, webpack-dev-server etc.
- created a webpack.config.js file to configure Wepback
- add relative path to entry point for bundling
- add a regex rule and absolute path to resolve modules used in the project
- add source map configuration to track errors and optimize the debugging process
- configure output file and location
- added scripts for development and build in package.json

Btw TypeScript is really cool! :)
