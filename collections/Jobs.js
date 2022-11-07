
export default {
  slug: 'jobs',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'posted_by',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        readOnly: true,
      },
      defaultValue: ({user}) => user.id,
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name:'industry',
      type: 'text',
      required: true,
    },
    {
      name: 'employment_type',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'job_function',
      type: 'text',
    },
    {
      name:'application_method',
      type: 'text',
    },
    {
      name: 'no_of_views',
      type: 'number',
    },
    {
      name: 'no_of_clicks',
      type: 'number',
    },
  ],
  admin: {
    useAsTitle: 'title',
  },
  hooks: {}
}
