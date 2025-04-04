const jsdocExplain = [
  {
    comment:
      "/**\n * Concatenate fist and last name\n * @param {string} firstName\n * @param {string} lastNAme\n * @returns {string}\n * @feature This is a special feature of the function.\n * @feature This is another special feature of the function.\n */",
    meta: {
      range: [236, 315],
      filename: "index.js",
      lineno: 9,
      columnno: 0,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000002",
        name: "NameJs",
        type: "FunctionDeclaration",
        paramnames: ["firstName", "lastNAme"],
      },
    },
    description:
      "Concatenate fist and last name\n<br />\n<br />\n<strong>Features:</strong>\n<ul>\n    <li>This is a special feature of the function.</li>\n    <li>This is another special feature of the function.</li>\n</ul>",
    params: [
      {
        type: {
          names: ["string"],
        },
        name: "firstName",
      },
      {
        type: {
          names: ["string"],
        },
        name: "lastNAme",
      },
    ],
    returns: [
      {
        type: {
          names: ["string"],
        },
      },
    ],
    features: [
      "This is a special feature of the function.",
      "This is another special feature of the function.",
    ],
    tags: [
      {
        title: "feature",
        value: "This is a special feature of the function.",
      },
      {
        title: "feature",
        value: "This is another special feature of the function.",
      },
    ],
    name: "NameJs",
    longname: "NameJs",
    kind: "function",
    scope: "global",
  },
  {
    comment:
      "/**\n * This function does something important.\n * @feature This is a special feature of the function.\n * @feature This is another special feature of the function.\n */",
    meta: {
      range: [484, 547],
      filename: "index.js",
      lineno: 18,
      columnno: 0,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000014",
        name: "importantFunction",
        type: "FunctionDeclaration",
        paramnames: [],
      },
    },
    description:
      "This function does something important.\n<br />\n<br />\n<strong>Features:</strong>\n<ul>\n    <li>This is a special feature of the function.</li>\n    <li>This is another special feature of the function.</li>\n</ul>",
    features: [
      "This is a special feature of the function.",
      "This is another special feature of the function.",
    ],
    tags: [
      {
        title: "feature",
        value: "This is a special feature of the function.",
      },
      {
        title: "feature",
        value: "This is another special feature of the function.",
      },
    ],
    name: "importantFunction",
    longname: "importantFunction",
    kind: "function",
    scope: "global",
    params: [],
  },
  {
    comment:
      "/**\n * Interface for user data\n * @feature Supports both first and last name\n * @feature Includes optional email field\n * @interface User\n */",
    meta: {
      filename: "typescript-code.ts",
      lineno: 17,
      columnno: 0,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {},
    },
    description:
      "Interface for user data\n<br />\n<br />\n<strong>Features:</strong>\n<ul>\n    <li>Supports both first and last name</li>\n    <li>Includes optional email field</li>\n</ul>",
    features: [
      "Supports both first and last name",
      "Includes optional email field",
    ],
    tags: [
      {
        title: "feature",
        value: "Supports both first and last name",
      },
      {
        title: "feature",
        value: "Includes optional email field",
      },
    ],
    kind: "interface",
    name: "User",
    longname: "User",
    scope: "global",
  },
  {
    comment: "",
    meta: {
      range: [6, 16],
      filename: "typescript-code.ts",
      lineno: 1,
      columnno: 6,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000020",
        name: "_____a",
        type: "Literal",
        value: 1,
      },
    },
    undocumented: true,
    name: "_____a",
    longname: "_____a",
    kind: "constant",
    scope: "global",
    params: [],
  },
  {
    comment:
      "/**\n* Creates a new user\n* @feature Input validation included\n* @feature Returns strongly typed User object\n* @param firstName The user's first name\n* @param lastName The user's last name\n* @returns A User object\n*/",
    meta: {
      range: [234, 334],
      filename: "typescript-code.ts",
      lineno: 10,
      columnno: 0,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000023",
        name: "createUser",
        type: "FunctionDeclaration",
        paramnames: ["firstName", "lastName"],
      },
    },
    description:
      "Creates a new user\n<br />\n<br />\n<strong>Features:</strong>\n<ul>\n    <li>Input validation included</li>\n    <li>Returns strongly typed User object</li>\n</ul>",
    features: [
      "Input validation included",
      "Returns strongly typed User object",
    ],
    tags: [
      {
        title: "feature",
        value: "Input validation included",
      },
      {
        title: "feature",
        value: "Returns strongly typed User object",
      },
    ],
    params: [
      {
        description: "The user's first name",
        name: "firstName",
      },
      {
        description: "The user's last name",
        name: "lastName",
      },
    ],
    returns: [
      {
        description: "A User object",
      },
    ],
    name: "createUser",
    longname: "createUser",
    kind: "function",
    scope: "global",
  },
  {
    comment: "",
    meta: {
      range: [298, 307],
      filename: "typescript-code.ts",
      lineno: 12,
      columnno: 8,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000030",
        name: "firstName",
        type: "Identifier",
        value: "firstName",
      },
    },
    undocumented: true,
    name: "firstName",
    longname: "firstName",
    kind: "member",
    scope: "global",
  },
  {
    comment: "",
    meta: {
      range: [317, 325],
      filename: "typescript-code.ts",
      lineno: 13,
      columnno: 8,
      path: "/Users/przemek/Git/_no-git/jsdoc-test/src",
      code: {
        id: "astnode100000032",
        name: "lastName",
        type: "Identifier",
        value: "lastName",
      },
    },
    undocumented: true,
    name: "lastName",
    longname: "lastName",
    kind: "member",
    scope: "global",
  },
  {
    kind: "package",
    longname: "package:undefined",
    files: [
      "/Users/przemek/Git/_no-git/jsdoc-test/src/index.js",
      "/Users/przemek/Git/_no-git/jsdoc-test/src/typescript-code.ts",
    ],
  },
];

const functionNames = jsdocExplain.flatMap((item) =>
  item.kind === "function" ? item.name : []
)

console.log(functionNames);
