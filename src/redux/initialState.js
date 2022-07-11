const initialState = {
  annoucments: {
    data: [],
    loading: {
      active: false,
      error: false,
      success: false,
    },
  },

  user : {
    userRights : 'admin',
    email : 'xyz@wp.pl',
  },
};

export default initialState;