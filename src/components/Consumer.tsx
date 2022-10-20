import { createQuery } from "@tanstack/solid-query"

export default function Consumer() {

  const query = createQuery(() => ['stuff'], async () => {
    const res = await fetch('https://swapi.dev/api/people/1')
    return res.json()
  })

  return (
    <div>
      <p>query consumer</p>
      <pre>{query.data}</pre>
    </div>
  )
}
