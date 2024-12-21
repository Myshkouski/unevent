import { eventsSymbol } from "./eventsSymbol";
import type { TypedEventTarget } from "./TypedEventTarget";


export function isTyped(target: EventTarget): target is TypedEventTarget {
  return target instanceof EventTarget && eventsSymbol in target && target[eventsSymbol] instanceof WeakMap;
}
