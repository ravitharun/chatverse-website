import React from "react";

function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Create Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Pic
              </label>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="User_pic"
                  className="block text-sm font-mono text-gray-700"
                >
                  Upload Profile Picture
                </label>

                <label
                  htmlFor="User_pic"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition"
                >
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16v-4m0 0V8m0 4h10m-4-4l4 4-4 4"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-blue-600">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-xs text-gray-400">
                      PNG, JPG, JPEG up to 5MB
                    </p>
                  </div>
                </label>

                <input
                  id="User_pic"
                  type="file"
                  name="Profile_pic"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const fileName =
                      e.target.files[0]?.name || "No file chosen";
                    alert(`Selected: ${fileName}`);
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
