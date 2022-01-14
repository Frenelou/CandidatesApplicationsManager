export const filterBy = (array: any[], filters: any) =>
    array.filter((item) => {
        let hasMatch = true
        for (let filterName in filters) {
            hasMatch = item[filterName].toLowerCase().includes(filters[filterName].toLowerCase())
            if (!hasMatch) break
        }
        return hasMatch
    })

export const sortBy = (array: any[], key: any, asc: boolean) => {
    let sortedArray = array.sort((a, b) => (a[key] > b[key]) ? 1 : -1)
    return !asc ? sortedArray : sortedArray.reverse()
}