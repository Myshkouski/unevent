import { isTyped } from "./isTyped";
import type { EventMap } from "./EventMap";
import { eventsSymbol } from "./eventsSymbol";
import type { TypedEventTarget } from "./TypedEventTarget";

export function toTyped<T extends EventMap<string>>(target: EventTarget): Readonly<TypedEventTarget<T>> {
  if (isTyped(target)) {
    return target;
  }

  if ("Proxy" in global) {
    const map: TypedEventTarget[typeof eventsSymbol] = new Map();
    return new Proxy(target, {
      get(target, p, receiver) {
        if (p === eventsSymbol) {
          return map;
        }
      },
    }) as TypedEventTarget<T>;
  }

  (target as TypedEventTarget<T>)[eventsSymbol] = new Map();
  return target as TypedEventTarget<T>;
}
