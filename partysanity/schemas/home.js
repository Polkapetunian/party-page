export default {
  name: 'home',
  title: 'Välkomsttext',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Författare',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Huvudbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Tidpunkt för publicering',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Brödtext',
      type: 'blockContent',
    },
    {
      name: 'document',
      title: 'Dokument',
      type: 'file',
      fields: [
        {
          name: 'titel',
          type: 'string',
          title: 'Titel'
        }
      ]

    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
