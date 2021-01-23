const getData = async (url) => {
    try {
        const res = await fetch(url);
        const response = await res.json();
        return response;
    } catch (err) {
        console.error(err);    
    }
    
}

export default getData; 