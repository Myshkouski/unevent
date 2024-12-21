import { addEventListener, dispatchEvent, removeEventListener, toTyped } from "."
import { describe, test, assert } from "vitest"
import type { Listener } from "./Listener"
import { eventsSymbol } from "./eventsSymbol"

describe(() => {
  const et = toTyped<{
    "hello": [name: string]
  }>(new EventTarget())

  let helloListener: Listener<typeof et, "hello">

  test(async () => {
    const { resolve, promise } = Promise.withResolvers<string>()

    helloListener = function (name) {
      resolve(name)
    }

    addEventListener(et, "hello", helloListener)

    dispatchEvent(et, "hello", "world")

    const actual = await promise

    assert(actual === "world")
  })

  test(async() => {
    removeEventListener(et, "hello", helloListener)
    assert(false === et[eventsSymbol].has("hello"))
  })
})
