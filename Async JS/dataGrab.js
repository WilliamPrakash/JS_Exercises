import XMLHttpRequest from 'xhr2'

export default function grab() {
    // npm install xhr2
    const request = new XMLHttpRequest()

    // we can track the progress of a request using an event listener
    // this will fire every time there is a state change in the request
     request.addEventListener('readystatechange', () => {
        // means the request is going through different 'phases' of the request
        // and there's 4 in total
        console.log(request, request.readyState)
     })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send()
}

