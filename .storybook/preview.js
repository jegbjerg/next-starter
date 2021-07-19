import '~/styles/main.css';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  backgrounds: {
    default: 'light',
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
