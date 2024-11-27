import "./dashboard.css";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Table from '../componenti/tabella.js';
import Button from '../componenti/bottone.js';
import Form from '../componenti/form.js';
import impiantiService from "../services/impiantiService.js";



function Dashboard() {
    const [impianti, setImpianti] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchImpianti = async () => {
            const data = await impiantiService.getImpianti();
            setImpianti(data);
        };
        fetchImpianti();
    }, []);

    const handleAddImpianto = async (impianto) => {
        await impiantiService.addImpianto(impianto);
        setImpianti([...impianti, impianto]);
        setShowForm(false);
      };

    function pathImpianti(){
        navigate('/impianti')
    }
    
    return (
        <div className="container">
                <h1>Dashboard</h1>
                <p>Benvenuto nella tua Dashboard</p>
                <div className="add-button">
                    <Button onClick={() => setShowForm(!showForm)}>Aggiungi Impianto</Button>
                    {showForm && (
                        <Form
                        onSubmit={handleAddImpianto} 
                        fields={[
                            { label: 'Nome', name: 'name', type: 'text', required: true },
                            { label: 'Posizione', name: 'location', type: 'text', required: true },
                            { label: 'Descrizione', name: 'description', type: 'text', required: true },
                        ]}
                        />
                    )}
                </div>
                <ul>
                    {impianti.map((impianti) => (
                        <li key={impianti.id}>
                            {impianti.name} - {impianti.location} - {impianti.machineryCount} macchinari
                        </li>))}
                <div className="btns">
                    <button  onClick={pathImpianti}> <h3>Primo impianto</h3> <Table
                     headers={['Nome', 'Posizione', 'Descrizione', 'Numero di Macchinari']}
                     data={impianti.map((impianto) => ({
                       name: impianto.name,
                       location: impianto.location,
                       description: impianto.description,
                       machineryCount: impianto.machineryCount,
                     }))}
                /></button>
                    <button  onClick={pathImpianti}> <h3>Secondo impianto</h3> <Table
                     headers={['Nome', 'Posizione', 'Descrizione', 'Numero di Macchinari']}
                     data={impianti.map((impianto) => ({
                       name: impianto.name,
                       location: impianto.location,
                       description: impianto.description,
                       machineryCount: impianto.machineryCount,
                     }))}
                /></button>
                    <button onClick={pathImpianti}> <h3>Terzo impianto</h3> <Table
                     headers={['Nome', 'Posizione', 'Descrizione', 'Numero di Macchinari']}
                     data={impianti.map((impianto) => ({
                       name: impianto.name,
                       location: impianto.location,
                       description: impianto.description,
                       machineryCount: impianto.machineryCount,
                     }))}
                /></button>
                    <button onClick={pathImpianti}> <h3>Quarto impianto</h3> <Table
                     headers={['Nome', 'Posizione', 'Descrizione', 'Numero di Macchinari']}
                     data={impianti.map((impianto) => ({
                       name: impianto.name,
                       location: impianto.location,
                       description: impianto.description,
                       machineryCount: impianto.machineryCount,
                     }))}
                /></button>
            </div> 
        </ul>          
    </div>
    );
}

export default Dashboard;



