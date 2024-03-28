const axios = window.axios ;

// Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
        const response = await axios.get('https://dummyjson.com/todos');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Task 04: Chaining Async/Await
async function asyncFunction1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 1');
}

async function asyncFunction2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 2');
}

async function asyncFunction3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async Function 3');
}

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            axios.get('https://dummyjson.com/todos'),
            axios.get('https://dummyjson.com/todos')
        ]);
        console.log('Response 1:', response1.data);
        console.log('Response 2:', response2.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => axios.get(url)));
        responses.forEach((response, index) => {
            console.log(`Response ${index + 1}:`, response.data);
        });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Usage examples
awaitCall(); // Task 03
chainedAsyncFunctions(); // Task 04
concurrentRequests(); // Task 05
parallelCalls(['https://dummyjson.com/todos', 'https://dummyjson.com/todos']); // Task 06
