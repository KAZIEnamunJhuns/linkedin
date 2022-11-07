const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
   fields: [
  //   {
  //   name:'firstname',
  //     type: 'text',
  // },
  // {
  //   name:'lastname',
  //   type: 'text',
  // },
  // {
  //   name:'email',
  //   type: 'text',
  // },


    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
