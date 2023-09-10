import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import type { ToastProps, ToastStore } from './types';

const MAX_TOASTS = 5;

const useToastStore = create<ToastStore>((set, get) => ({
    toasts: new Map<string, ToastProps>(),
    toast(message, options) {
        const { toasts } = get();

        const copy = new Map(toasts);
        if (copy.size + 1 > MAX_TOASTS) {
            copy.delete([...copy.keys()][0]);
        }

        copy.set(options?.id || uuidv4(), {
            message,
            options: {
                ...options,
            },
        });

        set({
            toasts: copy,
        });
    },
    removeToast(id: string) {
        const { toasts } = get();

        const copy = new Map(toasts);
        copy.delete(id);

        set({
            toasts: copy,
        });
    },
}));

export default useToastStore;
