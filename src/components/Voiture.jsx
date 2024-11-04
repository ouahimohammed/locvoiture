
const Voiture = ({ voiture, supprimerVoiture }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-4 px-6 text-left text-red-500">{voiture.id}</td>
      <td className="py-4 px-6 text-left text-red-500">{voiture.Marque}</td>
      <td className="py-4 px-6 text-left text-red-500">{voiture.TypeCarburant}</td>
      <td className="py-4 px-6 text-left text-red-500">{voiture.PrixLocation}</td>
      <td className="py-4 px-6 text-center text-red-500">
        <img src={voiture.image} alt={voiture.Marque} className="w-10 h-10 rounded-full object-cover" />
      </td>
      <td className="py-4 px-6 text-center">
        <button
          onClick={supprimerVoiture}
          className="text-red-500 hover:text-red-700 font-semibold"
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default Voiture;
