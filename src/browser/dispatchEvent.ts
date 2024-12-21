import type { TypedEventTarget } from "./TypedEventTarget";
import type { DataEvent } from "./DataEvent";
import type { ExtractEventMap } from "./ExtractEventMap";
import type { ExtractKey } from "./ExtractKey";

export function dispatchEvent<
  E extends TypedEventTarget<any> = TypedEventTarget<any>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
  K extends ExtractKey<M> = ExtractKey<M>
>(
  target: E,
  name: K,
  ...args: M[K]
) {
  const event: DataEvent<M[K]> = Object.assign(
    new Event(name),
    { data: args }
  );
  target.dispatchEvent(event);
}
