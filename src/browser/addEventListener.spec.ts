import { addEventListener, dispatchEvent, toTyped } from "."
import { test, assert } from "vitest"
import type { Listener } from "./Listener"

test(async () => {
  const et = toTyped<{
    "hello": [name: string]
  }>(new EventTarget())

  const { resolve, promise } = Promise.withResolvers<string>()

  const helloListener: Listener<typeof et, "hello"> = function (name) {
    resolve(name)
  }

  addEventListener(et, "hello", helloListener)

  dispatchEvent(et, "hello", "world")

  const actual = await promise

  assert(actual === "world")
})
