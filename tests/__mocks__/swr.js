/* eslint-disable no-undef */
const mockUsers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
];
  
export default jest.fn().mockReturnValue({ data: mockUsers });
