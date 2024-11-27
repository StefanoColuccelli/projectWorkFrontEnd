const getImpianti = async () => {
  const response = await fetch('/api/plants', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch plants');
  }
  return await response.json();
};

let impiantoId = 0

const addImpianto = async (impianto) => {
  const response = await fetch(`/api/impianti/${impiantoId++}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(impianto),
  });
  if (!response.ok) {
    throw new Error("Errore nell'inserimento dell'impianto.");
  }
  return await response.json();
};

export default { getImpianti, addImpianto };