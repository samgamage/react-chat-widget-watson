import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import iconPaths from "./iconPaths";
import { createComponentMessage, createNewMessage } from "./messages";
import { createReducer } from "./store";

export const assignRef = (ref, value) => {
  if (ref == null) return;
  if (typeof ref === "function") {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
};

const focusableElList = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "embed",
  "iframe",
  "input:not([disabled])",
  "object",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];

const focusableElSelector = focusableElList.join();

export function getFocusables(element, keyboardOnly = false) {
  let focusableEls = Array.from(element.querySelectorAll(focusableElSelector));

  // filter out elements with display: none
  focusableEls = focusableEls.filter(
    focusableEl => window.getComputedStyle(focusableEl).display !== "none"
  );

  if (keyboardOnly === true) {
    focusableEls = focusableEls.filter(
      focusableEl => focusableEl.getAttribute("tabindex") !== "-1"
    );
  }

  return focusableEls;
}

export function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useForkRef(refA, refB) {
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

export function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {}
  );
}

export const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const wrapEvent = (theirHandler, ourHandler) => event => {
  if (theirHandler) {
    theirHandler(event);
  }

  if (!event.defaultPrevented) {
    return ourHandler(event);
  }
};

export const isReducedMotion = () => {
  const { matches } = window.matchMedia("(prefers-reduced-motion: reduce)");
  return matches;
};

export const prefersReducedMotion = () => ({
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
    transition: "none"
  }
});

export const isObject = input =>
  input != null && typeof input === "object" && Object.keys(input).length > 0;

export const inputProps = [
  "name",
  "type",
  "autoFocus",
  "size",
  "form",
  "pattern",
  "placeholder",
  "onBlur",
  "onChange",
  "onKeyDown",
  "onKeyUp",
  "onKeyPress",
  "onFocus",
  "id",
  "autoFocus",
  "aria-label",
  "aria-describedby",
  "aria-labelledby",
  "min",
  "max",
  "maxLength",
  "minLength",
  "step",
  "defaultValue",
  "value",
  "isReadOnly",
  "isFullWidth",
  "isDisabled",
  "isInvalid",
  "isRequired"
];

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export { createComponentMessage, createNewMessage, createReducer, iconPaths };
