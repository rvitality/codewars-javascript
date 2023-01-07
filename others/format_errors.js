// Credits: https://www.udemy.com/course/javascript-interview-questions-coding-interview/

// Format backend validation message to frontend format

const backendErrors = {
    email: {
        errors: [
            {
                message: "Can't be blank",
            },
        ],
    },
    password: {
        errors: [
            {
                message: "Must contain symbols in different case",
            },
            {
                message: "Must be at least 8 symbols length",
            },
        ],
    },
    passwordConfirmation: {
        errors: [
            {
                message: "Must match with password",
            },
        ],
    },
};

// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

// const formattedErrors = Object.keys(backendErrors).map(error_key => {
//     const errorMsg = backendErrors[error_key].errors
//         .reduce((acc, item) => acc.concat(item.message), [])
//         .join(", ");

//     return `${error_key[0].toUpperCase() + error_key.slice(1).toLowerCase()}: ${errorMsg}`;
// });

const formattedErrors = Object.entries(backendErrors).map(([key, value]) => {
    const errorMessage = value.errors.map(error => error.message).join(", ");
    return `${key[0].toUpperCase() + key.slice(1).toLowerCase()}: ${errorMessage}`;
});
