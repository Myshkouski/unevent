import { eventsSymbol } from "./eventsSymbol";
import type { ExtractEventMap } from "./ExtractEventMap";
import type { ExtractKey } from "./ExtractKey";
import type { TypedEventTarget } from "./TypedEventTarget";


export function removeEventListener<
  E extends TypedEventTarget<any> = TypedEventTarget<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends ExtractKey<M> = ExtractKey<M>
>(
  target: E,
  name: K,
  listener: (...args: M[K]) => void
): void {
  const callback = removeCallback(target, name, listener)
  if (callback) {
    target.removeEventListener(name, callback);
  }
}

function removeCallback<
  E extends TypedEventTarget<any> = TypedEventTarget<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends ExtractKey<M> = ExtractKey<M>
>(
  target: E,
  name: K,
  listener: (...args: M[K]) => void
) {
  const callbacks = target[eventsSymbol].get(name)
  if (!callbacks) return;
  const callback = callbacks?.get(listener);
  if (!callback) return;
  callbacks.delete(listener);
  if (!callbacks.size) {
    target[eventsSymbol].delete(name)
  }
  return callback
}
