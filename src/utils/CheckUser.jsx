

export default function CheckUser({ user, doctor }) {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (userData.isStaff) {
        return doctor
    }

    return user
}

