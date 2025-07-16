export default function Profile({ user }) {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}</h1>
      <p className="text-gray-600">Email: {user.email}</p>
    </div>
  );
}
