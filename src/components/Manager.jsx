import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const savePassword = () => {
    const newPasswordArray = isEditing
      ? passwordArray.map((entry, index) => (index === editIndex ? form : entry))
      : [...passwordArray, form];
    setPasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    setForm({ site: "", username: "", password: "" });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const deletePassword = (index) => {
    const newPasswordArray = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(newPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
  };

  const editPassword = (index) => {
    setForm(passwordArray[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div className="mx-auto p-16 max-w-4xl">
        <h1 className="font-bold">
          <div className="logo text-4xl text-center font-bold">
            <span className="text-green-500"> &lt;</span>
            Pass
            <span className="text-green-500">OP / &gt;</span>
          </div>
        </h1>
        <p className="text-green-900 text-center text-lg">
          Your own password manager
        </p>
        <div className="text-white flex gap-3 flex-col items-center p-4">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full w-full border-2 text-black py-1 px-4 border-green-500"
            type="text"
            name="site"
            placeholder="Enter website"
          />
          <div className="flex w-full gap-2">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full w-full border-2 text-black py-1 px-4 border-green-500"
              type="text"
              name="username"
              placeholder="Enter username"
            />
            <div className="relative w-full">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full w-full border-2 text-black py-1 px-4 border-green-500 pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black" />
                ) : (
                  <FaEye className="text-black" />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="hover:bg-white cursor-pointer flex gap-2 bg-green-400 text-black border-black border-2 w-fit justify-center items-center p-2 px-6 rounded-full"
          >
            <lord-icon
              className=""
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            {isEditing ? "Update Password" : "Add Password"}
          </button>
        </div>
        <div className="mt-8">
          {passwordArray.length ? (
            <h2 className="text-2xl font-bold text-center text-green-900">
              Saved Passwords
            </h2>
          ) : (
            <h1>No passwords to show</h1>
          )}
          <div className="mt-4 space-y-4">
            {passwordArray.map((passwordEntry, index) => (
              <div key={index} className="p-4 flex justify-between items-center border-2 border-green-500 rounded-md">
                <div className="flex gap-3 items-center">
                  <div className="flex items-center">
                    <p className="mr-2" ><strong>Website:</strong> {passwordEntry.site}</p>
                    <lord-icon 
                      src="https://cdn.lordicon.com/depeqmsz.json"
                      trigger="hover"
                      colors="primary:#16c79e"
                      style={{ width: '20px', height: '20px' }}
                      onClick={() => copyToClipboard(passwordEntry.site)}
                      className="cursor-pointer ml-2"
                    ></lord-icon>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2"><strong>Username:</strong> {passwordEntry.username}</p>
                    <lord-icon
                      src="https://cdn.lordicon.com/depeqmsz.json"
                      trigger="hover"
                      colors="primary:#16c79e"
                      style={{ width: '20px', height: '20px' }}
                      onClick={() => copyToClipboard(passwordEntry.username)}
                      className="cursor-pointer ml-2"
                    ></lord-icon>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2"><strong>Password:</strong> {passwordEntry.password}</p>
                    <lord-icon
                      src="https://cdn.lordicon.com/depeqmsz.json"
                      trigger="hover"
                      colors="primary:#16c79e"
                      style={{ width: '20px', height: '20px' }}
                      onClick={() => copyToClipboard(passwordEntry.password)}
                      className="cursor-pointer ml-2"
                    ></lord-icon>
                  </div>
                </div>
                <div className="flex gap-4">
                  <lord-icon
                    src="https://cdn.lordicon.com/skkahier.json"
                    trigger="hover"
                    style={{ width: '20px', height: '20px' }}
                    onClick={() => deletePassword(index)}
                    className="cursor-pointer"
                  ></lord-icon>
                  <lord-icon
                    src="https://cdn.lordicon.com/depeqmsz.json"
                    trigger="hover"
                    style={{ width: '20px', height: '20px' }}
                    onClick={() => editPassword(index)}
                    className="cursor-pointer"
                  ></lord-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
