export const required = (value) => {
    if (value) {
        return
    } else {
        return 'Поле не должно быть пустым.';
    }
}