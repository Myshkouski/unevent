import { EventEmitter } from "events";
import type { ExtractEventMap } from "./ExtractEventMap";

export function addEventListener<
  E extends EventEmitter<any> = EventEmitter<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends keyof M = keyof M,
>(
  target: E,
  name: K,
  listener: (...args: M[K]) => void,
): void {
  target.addListener(name, listener)
}
