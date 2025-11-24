const SignupFormFields = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            {["firstName", "lastName", "email", "password", "confirmPassword"].map((field, idx) => (
                <div key={field}>
                    <label htmlFor={field} className="sr-only">
                        {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                        id={field}
                        name={field}
                        type={field.toLowerCase().includes("password") ? "password"
                            : field === "email" ? "email"
                                : "text"}
                        autoComplete={field}
                        required
                        placeholder={field.replace(/([A-Z])/g, " $1")}
                        className={`appearance-none my-1 rounded-none relative block w-full px-3 py-2 border 
              border-gray-300 placeholder-gray-500 text-gray-900 
              ${idx === 0 ? "rounded-t-md" : ""} 
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        value={formData[field]}
                        onChange={handleChange}
                    />

                </div>
            ))}
        </>
    );
};

export default SignupFormFields;
