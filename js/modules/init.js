async function fetchEmployees() {
    try {
        const response = await fetch('../../data/employees.json'); 
        const data = await response.json();
        console.log(data.employees)      
        return data.employees
    } catch (error) {
        console.error(error);
    }
}

export default fetchEmployees()