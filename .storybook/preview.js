import '~/styles/main.css';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Design', 'Components'],
    },
  },
  backgrounds: {
    default: 'bg-gray-100',
    values: [{ name: 'bg-gray-100', value: '#f3f4f6' }],
  },
};

export const decorators = [
  (Story) => (
    <RouterContext.Provider
      value={{
        push: () => Promise.resolve(),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      }}
    >
      <Story />
    </RouterContext.Provider>
  ),
];
