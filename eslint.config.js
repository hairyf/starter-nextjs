// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    react: true,
    nextjs: true,
    pnpm: true,
    ignores: ['next-env.d.ts'],
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
