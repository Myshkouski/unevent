import { EventEmitter } from "events"
import { addEventListener, dispatchEvent } from "."
import { test, assert } from "vitest"

test(async () => {
  const ee = new EventEmitter<{
    "hello": [name: string],
  }>()

  const { resolve, promise } = Promise.withResolvers<string>()

  addEventListener(ee, "hello", (name) => {
    resolve(name)
  })

  dispatchEvent(ee, "hello", "world")

  const actual = await promise
  
  assert(actual === "world")
})
