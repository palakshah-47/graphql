export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: 'test-id-1',
          title: 'Software Engineer 1',
          description: 'We are looking for a software engineer with 3 years of experience in React and Node.js',
        },
        {
          id: 'test-id-2',
          title: 'Software Engineer 2',
          description: 'We are looking for a software engineer with 3 years of experience in React and Node.js',
        },
      ];
    },
  },
};