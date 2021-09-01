const getData = (key) => {
    return new Promise((resolve, reject) => {
        window.localStorage.getItem(key);
    })
}

const setData = (key, value) => {
    return new Promise((resolve, reject) => {
        window.getCurrentWindow().localStorage.setItem(key, value);
    })
}

const deleteData = (key) => {
    return new Promise((resolve, reject) => {
        window.removeItem(key)
    })
}

export { getData, setData, deleteData }