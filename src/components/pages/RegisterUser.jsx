import Input from "../common/Input";
import Button from "../common/Button";

export default function RegisterUser() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register Here!
        </h2>
        <div className="space-y-4">
          <Input type="text" label="First Name" />
          <Input type="text" label="Last Name" />
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          <Input type="password" label="Re-enter Password" />
        </div>
        <div className="mt-6 flex justify-center">
          <Button variant="info">Register</Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button className="text-blue-500 hover:text-blue-700">
              Login here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
