import type { ComponentProps } from 'react';

import type { ToastOptions } from './types';

type SVGProps = ComponentProps<'svg'>;

export function SuccessIcon(props: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--toast-text-color)"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path stroke="var(--toast-bg-color)" d="m9 12 2 2 4-4" />
        </svg>
    );
}

export function ErrorIcon(props: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--toast-text-color)"
            stroke="var(--toast-bg-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle stroke="var(--toast-text-color)" cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
        </svg>
    );
}

export function WarningIcon(props: SVGProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="var(--toast-text-color)"
            stroke="var(--toast-bg-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path
                stroke="currentColor"
                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
            />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    );
}

export default function Icon({
    type,
    iconProps,
}: {
    type: ToastOptions['type'];
    iconProps?: SVGProps;
}) {
    switch (type) {
        case 'error':
            return <ErrorIcon {...iconProps} />;
        case 'warning':
            return <WarningIcon {...iconProps} />;
        case 'success':
            return <SuccessIcon {...iconProps} />;
        default:
            return null;
    }
}
