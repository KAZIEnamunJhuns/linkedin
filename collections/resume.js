export default{
  slug: 'resume',
  fields: [
    {
    name: 'resume',
    type: 'text',
    // relationTo: 'collections/applications',
    required: true,
  },
  {
    name: 'cover_letter',
    type: 'text',
    //  relationTo: 'collections/applications',
    required: true,

  }
],
admin: {
    useAsTitle: 'resume',
  },
  hooks: {}
}
