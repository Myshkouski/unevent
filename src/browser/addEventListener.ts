import { L } from "vitest/dist/chunks/reporters.D7Jzd9GS.js";
import { eventsSymbol } from "./eventsSymbol";
import type { ExtractEventMap } from "./ExtractEventMap";
import type { ExtractKey } from "./ExtractKey";
import type { Listener } from "./Listener";
import type { TypedEventTarget } from "./TypedEventTarget";

export function addEventListener<
  E extends TypedEventTarget<any> = TypedEventTarget<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends ExtractKey<M> = ExtractKey<M>
>(
  target: E,
  name: K,
  listener: Listener<E, K, M>
): void {
  const callback = addCallback(target, name, listener)
  target.addEventListener(name, callback)
}

function addCallback<
  E extends TypedEventTarget<any> = TypedEventTarget<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends ExtractKey<M> = ExtractKey<M>
>(target: E, name: K, listener: Listener<E, K, M>) {
  function callback(event: Event) {
    if ("data" in event && Array.isArray(event.data))
      listener(...event.data as M[K])
  }
  let callbacks = target[eventsSymbol].get(name)
  if (!callbacks) {
    callbacks = new Map()
    target[eventsSymbol].set(name, callbacks)
  }
  callbacks.set(listener, callback)
  return callback
}
