export const titleCase = (s: string) => {
    // from https://stackoverflow.com/a/27441234
    return s
        .replace(/([^A-Z])([A-Z])/g, '$1 $2') // split cameCase
        .replace(/[_\-]+/g, ' ') // split snake_case and lisp-case
        .toLowerCase()
        .replace(/(^\w|\b\w)/g, (m: string) => m.toUpperCase()) // title case words
        .replace(/\s+/g, ' ') // collapse repeated whitespace
        .replace(/^\s+|\s+$/, ''); // remove leading/trailing whitespace
}