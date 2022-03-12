import { css } from "styled-components";

export default css`
  :root {
    --bg-1: #fafaf9;
    --bg-2: #f5f5f4;
    --bg-3: #e7e5e4;
    --fg-3: #a8a29e;
    --fg-2: #7a756e;
    --fg-1: #292524;
    --yellow-1: #facc15;
    --yellow-2: #cf9f0d;
    --yellow-3: #854d0e;
    --green-1: #a3e635;
    --green-2: #7bc929;
    --green-3: #365314;
    --accent: var(--yellow-1);
    --selection: #facc158f;
    --bg-t-1: #fafaf9c5;

    --worksans: "Work Sans", sans-serif;
    --inter: "Inter", sans-serif;

    --fs-xxs: 0.75rem;
    --fs-xs: 0.8rem;
    --fs-sm: 0.875rem;
    --fs-md: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-xxl: 1.75rem;
    --fs-heading: 2rem;

    --scrollbar-thumb: inset 99px 0px 99px rgba(0, 0, 0, 0.2);
    --scrollbar-thumb-hover: inset 99px 0px 99px rgba(0, 0, 0, 0.3);
    --scrollbar-thumb-moz: rgba(0, 0, 0, 0.25);

    --filters-h: 8rem;

    --rounded: 0.25rem;
    --rounded-md: 0.375rem;
    --rounded-lg: 0.5rem;
    --rounded-xl: 0.75rem;

    --transition: all 0.175s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-colors: color background-color border-color 0.175s
      cubic-bezier(0.645, 0.045, 0.355, 1);

    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  [data-theme="dark"] {
    --bg-1: #171717;
    --bg-2: #202020;
    --bg-3: #404040;
    --fg-3: #616060;
    --fg-2: #acacac;
    --fg-1: #f5f5f5;
    --bg-t-1: #171717c5;
    --yellow-1: #facc15;
    --yellow-2: #eab308;
    --yellow-3: #854d0e;
    --green-1: #a3e635;
    --green-2: #7bc929;
    --green-3: #365314;
    --selection: #facc158f;

    --scrollbar-thumb: inset 99px 0px 99px rgba(255, 255, 255, 0.2);
    --scrollbar-thumb-hover: inset 99px 0px 99px rgba(255, 255, 255, 0.3);
    --scrollbar-thumb-moz: rgba(255, 255, 255, 0.25);
  }
`;
