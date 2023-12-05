import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import type { ToastStore } from './types';

const MAX_TOASTS = 5;

const useToastStore = create<ToastStore>((set, get) => ({
    toasts: [],
    toast(message, options) {
        const { toasts } = get();

        const copy = toasts.slice(1 - MAX_TOASTS);

        set({
            toasts: [
                ...copy,
                {
                    message,
                    options: {
                        ...options,
                        id: options?.id || uuidv4(),
                    },
                },
            ],
        });
    },
    removeToast(id: string) {
        const { toasts } = get();

        set({
            toasts: toasts.filter((toast) => toast.options.id !== id),
        });
    },
}));

export default useToastStore;
