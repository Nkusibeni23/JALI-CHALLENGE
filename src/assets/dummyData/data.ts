export const dummyData = {
  users: [
    {
      id: 1,
      role: 'admin',
      telephone: '+250781234567',
      password: 'adminPassword123',
      name: 'Admin User',
    },
    {
      id: 2,
      role: 'enduser',
      telephone: '+250788765432',
      password: 'endUserPass1',
      name: 'John Doe',
    },
    {
      id: 3,
      role: 'enduser',
      telephone: '+250784567890',
      password: 'endUserPass2',
      name: 'Jane Smith',
    },
  ],
  loans: [
    {
      loan_id: 101,
      user_id: 2,
      amount: 50000,
      status: 'approved',
      created_at: '2024-12-01',
    },
    {
      loan_id: 102,
      user_id: 2,
      amount: 100000,
      status: 'pending',
      created_at: '2024-12-05',
    },
    {
      loan_id: 103,
      user_id: 3,
      amount: 20000,
      status: 'declined',
      created_at: '2024-12-03',
    },
    {
      loan_id: 104,
      user_id: 3,
      amount: 75000,
      status: 'approved',
      created_at: '2024-12-07',
    },
    {
      loan_id: 105,
      user_id: 2,
      amount: 150000,
      status: 'declined',
      created_at: '2024-12-10',
    },
  ],
};
