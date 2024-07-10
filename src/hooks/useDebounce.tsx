import { useCallback, useRef } from "react";

type DebouncedCallback<T extends any[]> = (...args: T) => void;

export default function useDebounce<T extends any[]>(callback: DebouncedCallback<T>, delay: number) {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    console.log(timer)
    const debouncedCallback = useCallback((...args: T) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);

    return debouncedCallback;
}