import { describe, it, expect } from 'vitest';
import { generateSlug } from '../src/lib/utils/slug';

describe('generateSlug', () => {
  it('converts a simple title to a slug', () => {
    expect(generateSlug('Hello World')).toBe('hello-world');
  });

  it('converts special characters to hyphens', () => {
    expect(generateSlug('My Test Post!')).toBe('my-test-post');
  });

  it('removes leading and trailing hyphens', () => {
    expect(generateSlug('  Spaces and Punctuation!!!  ')).toBe('spaces-and-punctuation');
  });

  it('handles multiple spaces and mixed case', () => {
    expect(generateSlug('The    Quick   Brown   Fox')).toBe('the-quick-brown-fox');
  });

  it('removes non-alphanumeric characters', () => {
    expect(generateSlug('What? Is this... a test?')).toBe('what-is-this-a-test');
  });
});
