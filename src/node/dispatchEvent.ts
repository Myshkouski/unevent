import type { EventEmitter } from "events";
import type { ExtractEventMap } from "./ExtractEventMap";

export function dispatchEvent<
  E extends EventEmitter<any> = EventEmitter<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends keyof M = keyof M
>(
  target: E,
  name: K,
  ...args: M[K]
) {
  target.emit(name, ...args);
}
