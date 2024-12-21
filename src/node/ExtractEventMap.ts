import type { EventEmitter } from "events";

export type ExtractEventMap<
  T extends EventEmitter<any>
> = T extends EventEmitter<infer U> ? U : never;
