export const getTodos = async () => {
    try {
        const res = await fetch('https://dummyjson.com/users')

        const { users } = await res.json();

        return users;
    } catch (error) {
        console.error(error)
    }
}