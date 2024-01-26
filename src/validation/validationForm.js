/* eslint-disable prettier/prettier */
import { Regex } from "../constants/regex";
import { Message } from "../constants/messages";
import { Field } from "../constants/fields";

export const ValidationLogin = (userData) => {
    let fieldCheck = []

    const userCheck = {
        username: userData.username,
        password: userData.password,
    }

    for (const key in userCheck) {
        const value = userCheck[key]

        let isValidField = true

        let messageRequired = ""
        let messageInvalid = ""

        if (key === Field.username) {
            isValidField = Regex.username.test(value)
            messageRequired = Message.usernameRequired
            messageInvalid = Message.invalidEmail
        }
        if (key === Field.password) {
            isValidField = Regex.password.test(value)
            messageRequired = Message.passwordRequired
            messageInvalid = Message.invalidPassword
        }

        if (value.trim() === "") {
            fieldCheck.push({
                field: key,
                isValidField: false,
                message: messageRequired,
            })
        } else if (!isValidField) {
            fieldCheck.push({
                field: key,
                isValidField: false,
                message: messageInvalid,
            })
        } else {
            fieldCheck.push({
                field: key,
                isValidField: true,
            })
        }
    }

    return fieldCheck
}

export const ValidationRegister = (data) => {

    let fieldCheck = []

    const dataCheck = {
        username: data.username,
        password: data.password,
        confirmPassword: data.confirmPassword,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
    }

    for (const key in dataCheck) {
        const value = dataCheck[key]

        let isValidField = true

        let passwordCurrent = dataCheck[Field.password]

        let messageRequired = ""
        let messageInvalid = ""

        if (key === Field.username) {
            isValidField = Regex.username.test(value)
            messageRequired = Message.usernameRequired
            messageInvalid = Message.invalidUsername
        }

        if (key === Field.email) {
            isValidField = Regex.email.test(value)
            messageRequired = Message.emailRequired
            messageInvalid = Message.invalidEmail
        }
        if (key === Field.password) {
            isValidField = Regex.password.test(value)
            messageRequired = Message.passwordRequired
            messageInvalid = Message.invalidPassword
        }

        if (key === Field.confirmPassword) {
            messageRequired = Message.confirmPasswordRequired
            messageInvalid = Message.invalidConfirmPassword

            let confirmData = dataCheck[key]

            confirmData === passwordCurrent ? isValidField = true : isValidField = false
        }

        if (key === Field.first_name) {
            isValidField = Regex.first_name.test(value)
            messageRequired = Message.firstNameRequired
            messageInvalid = Message.invalidFirstName
        }

        if (key === Field.last_name) {
            isValidField = Regex.last_name.test(value)
            messageRequired = Message.lastNameRequired
            messageInvalid = Message.invalidLastName
        }

        if (value.trim() === "") {
            fieldCheck.push({
                field: key,
                isValidField: false,
                message: messageRequired,
            })
        } else if (!isValidField) {
            fieldCheck.push({
                field: key,
                isValidField: false,
                message: messageInvalid,
            })
        } else {
            fieldCheck.push({
                field: key,
                isValidField: true,
            })
        }
    }

    return fieldCheck
};
