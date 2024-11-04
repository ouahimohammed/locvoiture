
import { useState } from 'react';

const AjouterVoiture = ({ ajouterVoiture }) => {
  const [nouvelleVoiture, setNouvelleVoiture] = useState({
    id: '',
    Marque: '',
    TypeCarburant: '',
    PrixLocation: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNouvelleVoiture({ ...nouvelleVoiture, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ajouterVoiture(nouvelleVoiture);
    setNouvelleVoiture({ id: '', Marque: '', TypeCarburant: '', PrixLocation: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 dark:text-black">
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-black ">ID</label>
        <input
          name="id"
          placeholder="ID unique de la voiture"
          value={nouvelleVoiture.id}
          onChange={handleChange}
          className="w-full p-2 border rounded text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 "
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 dark:text-black">Marque</label>
        <input
          name="Marque"
          placeholder="Ex: Renault, Peugeot, etc."
          value={nouvelleVoiture.Marque}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-800 text-gray-700 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100 dark:text-black">Type de Carburant</label>
        <select
          name="TypeCarburant"
          value={nouvelleVoiture.TypeCarburant}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        >
          <option value="">Sélectionnez le type de carburant</option>
          <option value="Essence">Essence</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold dark:text-black ">Prix de Location</label>
        <input
          name="PrixLocation"
          type="number"
          placeholder="Ex: 50"
          value={nouvelleVoiture.PrixLocation}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold dark:text-black">URL de l'image</label>
        <input
          name="image"
          placeholder="https://exemple.com/image-voiture.jpg"
          value={nouvelleVoiture.image}
          onChange={handleChange}
          className="w-full p-2 border rounded text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 "
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => ajouterVoiture(null)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enregistrer la voiture
        </button>
      </div>
    </form>
  );
};

export default AjouterVoiture;
