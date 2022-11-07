export default{
  slug: 'applications',
  fields: [
    {
      name:'first_name',
      type: 'text',
      required: true,
    },
    {
      name:'last_name',
      type: 'text',
      required: true,
    },
    {
      name:'address',
      type: 'text',
      required: true,
    },
    {
      name:'city',
      type: 'text',
      required: true,
    },
    {
      name:'phone_number',
      type: 'number',
      required: true,
    },
    {
      name:'how_did_they_hear_about_us',
      type: 'text',

    },
    {
      name:'diversity_question',
      type: 'text',
    },
    {
      name:'sponsorship_question',
      type: 'text',

    },
    {
      name:'disability_question',
      type: 'text',
    },
    {
      name: 'applicant_email',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
    }
  ],
  admin: {
    useAsTitle: 'title',
  },
  hooks: {}
}
