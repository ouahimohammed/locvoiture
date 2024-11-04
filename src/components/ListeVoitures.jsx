import { useState } from 'react';
import AjouterVoiture from './ajouterVoiture';
import Modal from './Modal';

const ListeVoitures = () => {
  const [voitures, setVoitures] = useState([
    { id: 'v1', Marque: 'Dacia Logan', TypeCarburant: 'Diesel', PrixLocation: 200, image: 'v1.jpg' },
    { id: 'v2', Marque: 'Peugeot 208', TypeCarburant: 'Essence', PrixLocation: 400, image: 'v2.jpg' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ajouterVoiture = (nouvelleVoiture) => {
    setVoitures([...voitures, nouvelleVoiture]);
    setIsModalOpen(false);
  };

  const supprimerVoiture = (id) => {
    setVoitures(voitures.filter((voiture) => voiture.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
    Voitures de Location
  </h1>

  <button
    onClick={() => setIsModalOpen(true)}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
  >
    Ajouter une voiture +
  </button>

  <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
    
    <AjouterVoiture ajouterVoiture={ajouterVoiture} />
  </Modal>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left font-semibold">ID</th>
          <th className="py-3 px-6 text-left font-semibold">Marque</th>
          <th className="py-3 px-6 text-left font-semibold">Type de Carburant</th>
          <th className="py-3 px-6 text-left font-semibold">Prix de Location (DH/Jour)</th>
          <th className="py-3 px-6 text-left font-semibold">Image</th>
          <th className="py-3 px-6 text-center font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-900 dark:text-gray-100">
        {voitures.map((voiture) => (
          <tr key={voiture.id} className="border-b border-gray-200 dark:border-gray-700">
            <td className="py-3 px-6">{voiture.id}</td>
            <td className="py-3 px-6">{voiture.Marque}</td>
            <td className="py-3 px-6">{voiture.TypeCarburant}</td>
            <td className="py-3 px-6">{voiture.PrixLocation}</td>
            <td className="py-3 px-6">
              <img src={voiture.image} alt={voiture.Marque} className="w-10 h-10 rounded-full" />
            </td>
            <td className="py-3 px-6 text-center">
              <button
                onClick={() => supprimerVoiture(voiture.id)}
                className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

   
  );
};

export default ListeVoitures;
