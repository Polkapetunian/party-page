export default {
  name: 'info',
  title: 'Informationstext',
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
      name: 'partyTime',
      title: 'Tidpunkt för fest',
      type: 'datetime',
    },
    {
      name: 'location',
      title: 'Plats',
      type: 'string',
    },
    {
      title: 'Platsens koordinater',
      name: 'coordinates',
      type: 'geopoint'
    },
    {
      name: 'body',
      title: 'Brödtext',
      type: 'blockContent',
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
