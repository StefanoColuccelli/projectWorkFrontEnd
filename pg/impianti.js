import React, { useEffect, useState } from 'react';
import macchinarioService from '../services/macchinarioService.js';
import Table from '../componenti/tabella.js';
import Button from '../componenti/bottone.js';
import Form from '../componenti/form.js';
import { useNavigate } from 'react-router-dom';

const Impianti = () => {
  const [impianti, setImpianti] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchImpianti = async () => {
      const data = await macchinarioService.getMacchinariByImp();
      setImpianti(data);
    };
    fetchImpianti();
  }, []);

  const handleAddMacchinario = async (impianto) => {
    await macchinarioService.addMacchinario(impianto);
    setImpianti([...impianti, impianto]);
    setShowForm(false);
  };

  function pathMacchinari(){
    navigate('/macchinari')
  }

  return (
    <div>
      <h2>Gestione degli Impianti</h2>
      <Button onClick={() => setShowForm(!showForm)}>Aggiungi Macchinario</Button>
      {showForm && (
        <Form
          onSubmit={handleAddMacchinario}
          fields={[
            { label: 'Nome', name: 'name', type: 'text', required: true },
            { label: 'Posizione', name: 'location', type: 'text', required: true },
            { label: 'Descrizione', name: 'description', type: 'text', required: true },
          ]}
        />
      )}
      
      <div>
        <button onClick={pathMacchinari}>Macchinari</button>
      </div>
    </div>
  );
};

export default Impianti;