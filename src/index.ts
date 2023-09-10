import useToastStore from './store';
import Toaster from './toaster';
import type { ToastOptions, ToastStore } from './types';

type ToastOptionsWithoutType = Omit<ToastOptions, 'type'>;

function toast(...args: Parameters<ToastStore['toast']>) {
    return useToastStore.getState().toast(...args);
}

toast.success = (message: string, options?: ToastOptionsWithoutType) => {
    return useToastStore
        .getState()
        .toast(message, { ...options, type: 'success' });
};

toast.warn = (message: string, options?: ToastOptionsWithoutType) => {
    return useToastStore
        .getState()
        .toast(message, { ...options, type: 'warning' });
};

toast.error = (message: string, options?: ToastOptionsWithoutType) => {
    return useToastStore
        .getState()
        .toast(message, { ...options, type: 'error' });
};

toast.info = (message: string, options?: ToastOptionsWithoutType) => {
    return useToastStore
        .getState()
        .toast(message, { ...options, type: 'info' });
};

function removeToast(...args: Parameters<ToastStore['removeToast']>) {
    return useToastStore.getState().removeToast(...args);
}
export type { ToastOptions };
export { removeToast, toast, Toaster };
