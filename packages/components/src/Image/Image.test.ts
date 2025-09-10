import { Theme, theme } from '@t3n/theme';

import {
  generateFastlySrc,
  generatePlaceholderSrc,
  generateSizesAttribute,
  generateSrcSet,
  testIsFastlyUrl,
  transparentPlaceholderImageDataUrl,
} from './Image';

const cdnConfiguration = {
  hostname: 'cdn.t3n.de',
  originHostnames: ['storage.googleapis.com', 'images.t3n.de', 'assets.t3n.de'],
};

describe('testIsFastlyUrl', () => {
  it('should return true for fastly compatible origin urls', () => {
    expect(
      testIsFastlyUrl(
        'https://storage.googleapis.com/bucket/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe(true);
    expect(
      testIsFastlyUrl(
        'https://images.t3n.de/bucket/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe(true);
    expect(
      testIsFastlyUrl(
        'https://assets.t3n.de/bucket/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe(true);
    expect(
      testIsFastlyUrl(
        'https://cdn.t3n.de/bucket/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe(true);
  });

  it('should return false for non fastly compatible origin urls', () => {
    expect(
      testIsFastlyUrl('https://example.com/path/example.jpg', cdnConfiguration),
    ).toBe(false);
    expect(
      testIsFastlyUrl('https://t3n.de/path/example.jpg', cdnConfiguration),
    ).toBe(false);
    expect(testIsFastlyUrl('invalid-url', cdnConfiguration)).toBe(false);
  });

  it('should return false for relative urls', () => {
    expect(testIsFastlyUrl('/path/example.jpg', cdnConfiguration)).toBe(false);
    expect(testIsFastlyUrl('path/example.jpg', cdnConfiguration)).toBe(false);
  });
});

describe('generateFastlySrc', () => {
  it('should generate the correct Fastly src URL', () => {
    expect(
      generateFastlySrc(
        'https://storage.googleapis.com/bucket/path/example.jpg',
        'default',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?class=default');
    expect(
      generateFastlySrc(
        'https://images.t3n.de/bucket/path/example.jpg',
        'responsive-medium',
        cdnConfiguration,
      ),
    ).toBe(
      'https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-medium',
    );
    expect(
      generateFastlySrc(
        'https://assets.t3n.de/bucket/path/example.jpg',
        'responsive-large',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-large');
    expect(
      generateFastlySrc(
        'https://cdn.t3n.de/bucket/path/example.jpg',
        'responsive-small',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-small');
  });

  it('should retain existing query parameters when generating Fastly src URL', () => {
    expect(
      generateFastlySrc(
        'https://storage.googleapis.com/bucket/path/example.jpg?foo=bar',
        'default',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?foo=bar&class=default');
  });

  it('should overwrite existing class query parameter when generating Fastly src URL', () => {
    expect(
      generateFastlySrc(
        'https://storage.googleapis.com/bucket/path/example.jpg?class=oldclass',
        'default',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?class=default');
  });

  it('should return the original src for non fastly compatible origin urls', () => {
    expect(
      generateFastlySrc(
        'https://example.com/path/example.jpg',
        'default',
        cdnConfiguration,
      ),
    ).toBe('https://example.com/path/example.jpg');
  });

  it('should return the original src for relative urls', () => {
    expect(
      generateFastlySrc('/path/example.jpg', 'default', cdnConfiguration),
    ).toBe('/path/example.jpg');
    expect(
      generateFastlySrc(
        'path/example.jpg',
        'responsive-medium',
        cdnConfiguration,
      ),
    ).toBe('path/example.jpg');
  });
});

describe('generatePlaceholderSrc', () => {
  it('should generate the correct placeholder src for fastly compatible origin urls', () => {
    expect(
      generatePlaceholderSrc(
        'https://storage.googleapis.com/bucket/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe('https://cdn.t3n.de/bucket/path/example.jpg?class=blur');
  });

  it('should return transparent placeholder for non fastly compatible origin urls', () => {
    expect(
      generatePlaceholderSrc(
        'https://example.com/path/example.jpg',
        cdnConfiguration,
      ),
    ).toBe(transparentPlaceholderImageDataUrl);
  });

  it('should return transparent placeholder for relative urls', () => {
    expect(generatePlaceholderSrc('/path/example.jpg', cdnConfiguration)).toBe(
      transparentPlaceholderImageDataUrl,
    );
    expect(generatePlaceholderSrc('path/example.jpg', cdnConfiguration)).toBe(
      transparentPlaceholderImageDataUrl,
    );
  });
});

describe('generateSrcSet', () => {
  const optimizationClassMapping = {
    '240': 'responsive-extrasmall',
    '420': 'responsive-small',
    '640': 'responsive-medium',
    '980': 'responsive-default',
    '1280': 'responsive-large',
    '1620': 'responsive-extralarge',
  };

  it('should generate the correct srcSet for fastly compatible origin urls', () => {
    expect(
      generateSrcSet(
        'https://storage.googleapis.com/bucket/path/example.jpg',
        optimizationClassMapping,
        cdnConfiguration,
      ),
    ).toBe(
      'https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-extrasmall 240w, https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-small 420w, https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-medium 640w, https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-default 980w, https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-large 1280w, https://cdn.t3n.de/bucket/path/example.jpg?class=responsive-extralarge 1620w',
    );
  });

  it('should return undefined for non fastly compatible origin urls', () => {
    expect(
      generateSrcSet(
        'https://example.com/path/example.jpg',
        optimizationClassMapping,
        cdnConfiguration,
      ),
    ).toBeUndefined();
  });

  it('should return undefined for relative urls', () => {
    expect(
      generateSrcSet(
        '/path/example.jpg',
        optimizationClassMapping,
        cdnConfiguration,
      ),
    ).toBeUndefined();
    expect(
      generateSrcSet(
        'path/example.jpg',
        optimizationClassMapping,
        cdnConfiguration,
      ),
    ).toBeUndefined();
  });
});

describe('generateSizesAttribute', () => {
  const customTheme: Theme = {
    ...theme,
    breakpoints: ['600px', '900px', '1200px', '1800px'],
  };

  it('should return the sizes string if sizes is a string', () => {
    expect(
      generateSizesAttribute('(max-width: 600px) 480px, 800px', customTheme),
    ).toBe('(max-width: 600px) 480px, 800px');
  });

  it('should return undefined if sizes is undefined', () => {
    expect(generateSizesAttribute(undefined, customTheme)).toBeUndefined();
  });

  it('should generate the correct sizes attribute from array of strings and numbers', () => {
    expect(generateSizesAttribute([480, 640, 960, 1080], customTheme)).toBe(
      '(min-width: 1200px) 1080px, (min-width: 900px) 960px, (min-width: 600px) 640px, 480px',
    );

    expect(
      generateSizesAttribute(
        ['480px', '640px', '960px', '1080px'],
        customTheme,
      ),
    ).toBe(
      '(min-width: 1200px) 1080px, (min-width: 900px) 960px, (min-width: 600px) 640px, 480px',
    );
  });

  it('should generate the correct sizes attribute from mixed array of strings and numbers', () => {
    expect(
      generateSizesAttribute([480, '640px', 960, '1080px'], customTheme),
    ).toBe(
      '(min-width: 1200px) 1080px, (min-width: 900px) 960px, (min-width: 600px) 640px, 480px',
    );
  });

  it('should handle arrays shorter than the number of breakpoints', () => {
    expect(generateSizesAttribute([480, 640], customTheme)).toBe(
      '(min-width: 600px) 640px, 480px',
    );
    expect(generateSizesAttribute([480], customTheme)).toBe('480px');
    expect(generateSizesAttribute([], customTheme)).toBe('');
  });

  it('should handle arrays longer than the number of breakpoints', () => {
    expect(
      generateSizesAttribute([480, 640, 960, 1080, 1280], customTheme),
    ).toBe(
      '(min-width: 1800px) 1280px, (min-width: 1200px) 1080px, (min-width: 900px) 960px, (min-width: 600px) 640px, 480px',
    );
  });
});
