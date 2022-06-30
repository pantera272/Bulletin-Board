const initialState = {
  annoucments : [
    {
      id: '1',
      title: 'Title 1',
      text: 'Lorem iplum 1',
      publicationDate: '21-6-2022',
      modyficationDate: '22-6-2022',
      email: 'krzysiek.kosek@gmail.com',
      status: 'published',
    },
    {
      id : '2',
      title : 'Title 2',
      text : 'Lorem iplum 2',
      publicationDate: '22-6-2022',
      modyficationDate: '',
      email: 'xyz@gmail.com',
      status: 'draft',
    },
    {
      id : '3',
      title : 'Title 3',
      text : 'Lorem iplum 3',
      publicationDate: '22-6-2022',
      modyficationDate: '22-6-2022',
      email: 'xyz@wp.pl',
      status: 'draft',
    },
    {
      id : '4',
      title : 'Title 4',
      text : 'Lorem iplum 4',
      publicationDate: '22-6-2022',
      modyficationDate: '22-6-2022',
      email: 'xyz@wp.pl',
      status: 'published',
    },
  ],

  user : {
    userRights : 'admin',
    email : 'xyz@wp.pl',
  },
};

export default initialState;