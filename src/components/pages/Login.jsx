import Button from "../common/Button";
import Input from "../common/Input";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>
        <div className="space-y-4">
          <Input type="text" label="Username" />
          <Input type="password" label="Password" />
        </div>
        <div className="mt-6 flex justify-center">
          <Button>Login</Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <button className="text-blue-500 hover:text-blue-700">
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
