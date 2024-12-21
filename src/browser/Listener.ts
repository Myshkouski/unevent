import type { ExtractEventMap } from "./ExtractEventMap";
import type { ExtractKey } from "./ExtractKey";
import type { TypedEventTarget } from "./TypedEventTarget";

export type Listener<
  E extends TypedEventTarget<any>,
  K extends ExtractKey<M>,
  M extends ExtractEventMap<E> = ExtractEventMap<E>,
> = (...args: M[K]) => void;
