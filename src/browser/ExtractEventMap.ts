import type { TypedEventTarget } from "./TypedEventTarget";
import type { EventMap } from "./EventMap";

export type ExtractEventMap<T extends TypedEventTarget<EventMap<string>>> = T extends TypedEventTarget<infer U> ? U : never;
