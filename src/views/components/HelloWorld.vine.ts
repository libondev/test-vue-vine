export function MyComponent({ testId, msg }: { msg?: string, testId: string }) {
  const num = ref(0)
  // const testId = vineProp<string>()

  function randomPick() {
    num.value = Math.floor(Math.random() * 10)
  }

  return vine`
    <div :data-test-id="testId">
      <button @click="randomPick">Pick</button>
      <div>{{ num }}</div>
      <div>{{ msg }}</div>
    </div>
  `
}
