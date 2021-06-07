export const required = (value) => {
    if (value) {
        return null
    } else {
        return 'Поле не должно быть пустым.';
    }
}