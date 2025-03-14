// FETCH DATA TRADITION WAY
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))


// FETCH DATA TRAY CATCH
try {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => console.log(data))
} catch (error) {
    console.log(error.message)
};


// FETCH DATA USING ASYNC AWAIT
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name)
    } catch (error) {
        console.log(error)
    }
};
fetchData();
