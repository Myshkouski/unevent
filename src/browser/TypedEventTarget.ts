import type { EventMap } from "./EventMap";
import type { eventsSymbol } from "./eventsSymbol";
import type { ExtractKey } from "./ExtractKey";

export interface TypedEventTarget<
  T extends EventMap<string> = EventMap<string>,
  K extends ExtractKey<T> = ExtractKey<T>,
> extends EventTarget {
  [eventsSymbol]: Map<string, Map<Function, (event: Event) => void>>;
  addEventListener(name: K, listener: (event: Event) => void): void;
  removeEventListener(name: K, listener: (event: Event) => void): void;
}
