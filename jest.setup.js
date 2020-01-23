import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  process.env.DOCUMENT_TITLE = 'IDEA Anniversary';
  document.title = process.env.DOCUMENT_TITLE;
});

afterEach(cleanup);
