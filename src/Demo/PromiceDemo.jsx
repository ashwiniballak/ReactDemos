// what is async and await in javascript
// async and await are used to handle the promises in javascript
// async is used to make a function asynchronous
// await is used to wait for the promise to resolve
// async function returns a promise
// await can only be used inside an async function

// Simulate an asynchronous task with a promise
const PromiceDemo=()=>{
function asyncTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
     console.log(`Task ${name} completed.`)
      resolve(`Result of ${name}`)
    }, delay)
  })
}

// Stack to keep track of the promises (tasks)
let tasks = []

// Adding tasks to the stack
tasks.push(asyncTask('Task 1', 1000))
tasks.push(asyncTask('Task 2', 500))
tasks.push(asyncTask('Task 3', 1500))
console.log(tasks, 'tasks')

// Function to execute the tasks in FILO order
async function executeTasksInFILOOrder(tasks) {
  while (tasks.length > 0) {
    // Pop the last task added (FILO)
    const task = tasks.pop()
    console.log(tasks.length, 'tasks length')
    // Await its completion before moving on to the next
    const result = await task
    console.log(result)
  }
}

// Execute the tasks
executeTasksInFILOOrder(tasks)
}
export default PromiceDemo