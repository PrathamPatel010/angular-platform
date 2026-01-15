import Aura from '@primeng/themes/aura';
import { FilterMatchMode } from 'primeng/api';
import { PrimeNGConfigType } from 'primeng/config';

export const primengConfig: PrimeNGConfigType = {
  inputVariant: 'filled',
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.my-app-dark',
      cssLayer: {
        name: 'primeng',
        order: 'tailwind-base, primeng, tailwind-utilities',
      },
    },
  },
  csp: {
    nonce: '...',
  },
  zIndex: {
    modal: 1100, // dialog, sidebar
    overlay: 1000, // dropdown, overlaypanel
    menu: 1000, // overlay menus
    tooltip: 1100, // tooltip
  },
  filterMatchModeOptions: {
    text: [
      FilterMatchMode.STARTS_WITH,
      FilterMatchMode.CONTAINS,
      FilterMatchMode.NOT_CONTAINS,
      FilterMatchMode.ENDS_WITH,
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS,
    ],
    numeric: [
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS,
      FilterMatchMode.LESS_THAN,
      FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
      FilterMatchMode.GREATER_THAN,
      FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
    ],
    date: [
      FilterMatchMode.DATE_IS,
      FilterMatchMode.DATE_IS_NOT,
      FilterMatchMode.DATE_BEFORE,
      FilterMatchMode.DATE_AFTER,
    ],
  },
};
