import * as C from './colorTokens';

export default {
  ...C,
  background: {
    page: C.neutralColor[100],
    highlightArea: C.secondaryColor[300],
    descriptiveArea: C.neutralColor[300],
    plpNavigation: C.neutralColor[300],
    cartSection: C.neutralColor[200],
  },
  textColor: {
    heading: C.neutralColor[600],
    body: C.neutralColor[600],
    highlightArea: C.neutralColor[100],
  },
  navigation: {
    primary: `
      color: ${C.neutralColor[600]};
      &:hover {
        color: ${C.primaryColor[400]};
      }
      &:active {
        color: ${C.primaryColor[400]};
      }
    `,
    afterBackground: C.primaryColor[400],
    secondary: {
      borderBottomColor: C.neutralColor[300],
    },
  },
  cta: {
    primary: `
      background-color: ${C.primaryColor[400]};
      color: ${C.neutralColor[100]};
      &:hover {
        background-color: ${C.primaryColor[200]};
      }
      &:active {
        background-color: ${C.primaryColor[300]};
      }
      &:disabled {
        background-color: ${C.primaryColor[100]};
      }
    `,
    secondary: `
    background-color: ${C.neutralColor[100]};
    color: ${C.neutralColor[500]};
    border: 1px solid ${C.neutralColor[500]};
    &:hover {
      background-color: ${C.neutralColor[500]};
      color: ${C.neutralColor[100]};
      border: 1px solid ${C.neutralColor[500]};
    }
    &:active {
      background-color: ${C.neutralColor[600]};
      color: ${C.neutralColor[100]};
      border: 1px solid ${C.neutralColor[600]};
    }
    &:disabled {
      background-color: ${C.primaryColor[300]};
      color: ${C.neutralColor[100]};
      border: 1px solid ${C.neutralColor[300]};
    }
  `,
    ghost: `
    background-color: ${C.neutralColor[100]};
    color: ${C.secondaryColor[300]};
    &:hover {
      color: ${C.secondaryColor[200]};
    }
    &:active {
      color: ${C.secondaryColor[300]};
    }
    &:disabled {
      color: ${C.secondaryColor[100]};
    }
  `,
  },
  skip: {
    area: {
      background: C.secondaryColor[300],
    },
  },
  autofill: {
    input: {
      color: '#778899',
    },
  },
};
