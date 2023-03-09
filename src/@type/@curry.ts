import { Length } from "./@length";
import { Drop } from "./@drop";
import { Cast } from "./@cast";
import { Gaps } from "./@Gaps";

export type Curry<F extends (...args: any[]) => any> = <
  T extends any[],
  G = Drop<Length<T>, Parameters<F>>
>(
  ...args: Cast<T, Gaps<Parameters<F>>>
) => G extends [any, ...any[]]
  ? Curry<(...args: G) => ReturnType<F>>
  : ReturnType<F>;
