import type { EventMap } from "./EventMap";

export type ExtractKey<T extends EventMap<string>> = T extends EventMap<infer U> ? U : never;
