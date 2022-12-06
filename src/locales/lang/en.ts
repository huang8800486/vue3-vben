import { genMessage } from '../config';

const modules: Record<string, any> = import.meta.globEager('./en/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'en'),
  },
  dateLocale: null,
  dateLocaleName: 'en',
};
