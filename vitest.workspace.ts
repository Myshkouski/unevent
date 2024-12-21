import { defineWorkspace } from "vitest/config"

export default defineWorkspace([
  {
    test: {
      name: "node",
      include: [
        'src/node/**/*.{test,spec}.ts',
      ],
    },
  },
  {
    test: {
      name: "browser",
      include: [
        'src/browser/**/*.{test,spec}.ts',
      ],
      browser: {
        name: "webkit",
        headless: true
      },
    },
  }
])
