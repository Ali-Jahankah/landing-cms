export const contentfulDataConfig = {
  headerOptions: {
    getEntries: {
      content_type: 'headerSection',
      'sys.id': '1aEChoorW1gpuqfxo9XJLR',
      select: [
        'fields.headerLogo',
        'fields.headerTitle',
        'fields.headerNavLinks'
      ],
      include: 10
    },
    error: 'No header section found with ID: 1aEChoorW1gpuqfxo9XJLR'
  },
  landingPageOptions: {
    getEntries: {
      content_type: 'landingPage',
      'sys.id': '41hSHrWexai4FIGY7KACGO',
      select: ['fields.hero', 'fields.features', 'fields.final'],
      include: 10
    },
    error: 'No landing page found with ID: 41hSHrWexai4FIGY7KACGO'
  },
  footerOptions: {
    getEntries: {
      content_type: 'footerSection',
      'sys.id': '6MtsuEOwl3cB38j9sLrvDy',
      select: [
        'fields.footerLogo',
        'fields.footerDescription1',
        'fields.footerDescription2',
        'fields.links',
        'fields.authorProfileLink'
      ],
      include: 10
    },
    error: 'No header section found with ID: 6MtsuEOwl3cB38j9sLrvDy'
  }
};
