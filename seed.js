const API_URL = 'http://localhost:3000/api';

async function seed() {
  // Login as admin
  const loginRes = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@clinica.com', password: 'password123' })
  });
  const loginData = await loginRes.json();
  const token = loginData.token;

  if (!token) {
    console.error('Failed to login as admin:', loginData);
    return;
  }

  const registerUser = async (email, password, name) => {
    const res = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    });
    return res.json();
  };

  const updateUserRole = async (id, role, name) => {
    await fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ role, name })
    });
  };

  // Create doctors
  const doctors = [
    { email: 'dr.house@clinica.com', name: 'Dr. Gregory House' },
    { email: 'dra.grey@clinica.com', name: 'Dra. Meredith Grey' },
    { email: 'dr.strange@clinica.com', name: 'Dr. Stephen Strange' },
  ];

  // Create or update doctors
  for (const doc of doctors) {
    let resData = await registerUser(doc.email, 'password123', doc.name);
    // Find the user if already exists
    if (!resData.user) {
      const allRes = await fetch(`${API_URL}/users`, { headers: { 'Authorization': `Bearer ${token}` } });
      const all = await allRes.json();
      resData = { user: all.find(u => u.email === doc.email) };
    }
    if (resData.user && resData.user.id) {
      await updateUserRole(resData.user.id, 'MEDICO', doc.name);
      console.log(`Updated doctor: ${doc.name}`);
    }
  }

  // Create or update patients
  const patients = [
    { email: 'paciente1@gmail.com', name: 'Juan Perez' },
    { email: 'paciente2@gmail.com', name: 'Maria Gomez' },
    { email: 'paciente3@gmail.com', name: 'Carlos Ruiz' },
  ];

  for (const pat of patients) {
    let resData = await registerUser(pat.email, 'password123', pat.name);
    // Find the user if already exists
    if (!resData.user) {
      const allRes = await fetch(`${API_URL}/users`, { headers: { 'Authorization': `Bearer ${token}` } });
      const all = await allRes.json();
      resData = { user: all.find(u => u.email === pat.email) };
    }
    if (resData.user && resData.user.id) {
      await updateUserRole(resData.user.id, 'PACIENTE', pat.name);
      console.log(`Updated patient: ${pat.name}`);
    }
  }

  // Create appointments
  const createAppointment = async (patientId, doctorId, date, status) => {
    const res = await fetch(`${API_URL}/appointments`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ patientId, doctorId, date, notes: 'Consulta de control' })
    });
    
    if (!res.ok) {
       const errText = await res.text();
       console.error(`Failed to create appt for patient ${patientId}:`, res.status, errText);
       return;
    }

    const data = await res.json();
    
    if (status !== 'SCHEDULED' && data.id) {
       await fetch(`${API_URL}/appointments/${data.id}/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
    }
  };

  // Get all users to find ids
  const usersRes = await fetch(`${API_URL}/users`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const allUsers = await usersRes.json();

  const docs = allUsers.filter(u => u.role === 'MEDICO');
  const pats = allUsers.filter(u => u.role === 'PACIENTE');

  if (docs.length > 0 && pats.length > 0) {
    const today = new Date();
    today.setHours(10, 0, 0, 0);

    const tmrw = new Date(today);
    tmrw.setDate(tmrw.getDate() + 1);

    await createAppointment(pats[0].id, docs[0].id, today.toISOString(), 'COMPLETED');
    await createAppointment(pats[1].id, docs[1].id, tmrw.toISOString(), 'SCHEDULED');
    await createAppointment(pats[2].id, docs[2].id, today.toISOString(), 'CANCELLED');
    
    console.log('Appointments created');
  }

  console.log('Seed completed successfully!');
}

seed().catch(console.error);
