import type {
    ToastProviderProps,
    ToastViewportProps,
} from '@radix-ui/react-toast';
import type { CSSProperties } from 'react';

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type VPos = 'top' | 'bottom';
export type HPos = 'left' | 'right' | 'center';

type ToastCSSVariables = {
    '--toast-bg-color'?: string;
    '--toast-text-color'?: string;
    '--toast-border-color'?: string;
};

export type ToasterProps = {
    /**
     * Sets the position of the toasts
     */
    position?: `${VPos}-${HPos}`;
    /**
     * Sets the default duration for the toasts
     */
    duration?: number;
    /**
     * Props passed to Radix's Toast.Provider component
     */
    providerProps?: ToastProviderProps;
    /**
     * Props passed to Radix's Toast.Viewport component
     */
    viewportProps?: Prettify<
        ToastViewportProps & {
            style?: CSSProperties & {
                '--toast-width': string;
            };
        }
    >;
    /**
     * Props passed down to the toasts.
     */
    toastProps?: {
        /**
         * Sets default toast styles for the given type.
         */
        style?: {
            info?: Prettify<CSSProperties & ToastCSSVariables>;
            success?: Prettify<CSSProperties & ToastCSSVariables>;
            warning?: Prettify<CSSProperties & ToastCSSVariables>;
            error?: Prettify<CSSProperties & ToastCSSVariables>;
        };
        /**
         * Sets the default `className` for the toasts.
         */
        className?: string;
    };
};

export type ToastOptions = {
    /**
     * Sets the id of the toast.
     * Defaults to a random UUID v4 string.
     */
    id?: string;
    /**
     * Sets the type of the toast.
     * Defaults to `'info'`
     */
    type?: 'success' | 'error' | 'warning' | 'info';
    /**
     * Sets the duration of the toast in milliseconds.
     * Defaults to `3000`
     */
    duration?: number;
    /**
     * Sets an additional description to the toast.
     */
    description?: string;
    /**
     * Sets styles for the toast.
     */
    style?: Prettify<CSSProperties & ToastCSSVariables>;
    /**
     * Sets the `className` for the toast.
     */
    className?: string;
};

export type ToastProps = {
    message: string;
    options: Partial<ToastOptions>;
};

export type ToastStore = {
    toasts: Map<string, ToastProps>;
    toast: (message: string, options?: ToastOptions) => void;
    removeToast: (id: string) => void;
};
