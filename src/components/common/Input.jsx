export default function Input({ label, type }) {
  return (
    <p className="flex flex-col mb-4">
      <label className="mb-2 text-gray-700 font-semibold">{label}</label>
      <input
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        type={type}
      />
    </p>
  );
}
