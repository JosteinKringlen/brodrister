# Brødrister

> _Norwegian for "toaster"._

A simple toast component for React. Built with Radix UI, Framer Motion and Zustand.

## Installation

```bash
npm install brodrister
```

## Usage

Add `<Toaster />` to your app, at the place where you want the toast to render (usually at the root of the app). Then, you can use the `toast()` function to trigger a toast from anywhere in the app.

```jsx
import { Toaster, toast } from 'brodrister';

// ...

export default function App() {
    return (
        <div>
            <button 
                onClick={() => {
                    toast('Yummy toast! 🍞')
                }}
            >
                Toast
            </button>
            <Toaster />
        </div>
    );
}
```

## Features / roadmap(ish)

- [X] Render toasts with message and optional description
- [X] Render toasts with different types (`success`, `info`, `warning`, `error`)
- [X] Customizable toasts (duration, styling, placement)
- [ ] Dismissable toasts
- [ ] Async toasts (with progress bar)
- [ ] Customizable icons

--

- [ ] Tests
- [ ] Demo app

## API

### <Toaster {toasterProps?} />

#### toasterProps?

Type: `object`

```ts
{
    /**
     * Where the toasts should be displayed.
     * Defaults to 'bottom-right'
     */ 
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    /**
     * The default duration of all the toasts, in milliseconds.
     * Defaults to 3000
     */
    duration?: number;
    /**
     * Props passed to Radix's `Toast.Provider` component.
     * See https://www.radix-ui.com/primitives/docs/components/toast#provider
     */
    providerProps?: ToastProviderProps;
    /**
     * Props passed to Radix's `Toast.Viewport` component.
     * See https://www.radix-ui.com/primitives/docs/components/toast#viewport
     */
    viewportProps?: ToastViewportProps;
    /**
     * Props passed down to the toast.
     */
    toastProps?: {
        /**
         * The default styles for the toasts.
         */
        style?: {
            success: React.CSSProperties & {
                '--toast-bg-color'?: string;
                '--toast-text-color'?: string;
                '--toast-border-color'?: string;
            };
            info: same as success
            warning: same as success
            error: same as success
        };
        /**
         * Additional classes to pass to the toast.
         */
        className?: string;
    };
}

```

### toast(message, options?)

#### message

Type: `string`

The main message of the toast.

#### options?

Type: `object`

```ts
{
    /**
     * ID of the toast.
     * Defaults to a random UUID v4 string.
     */
    id?: string;
    /**
     * The type of the toast.
     * Defaults to 'info'
     */
    type?: 'success' | 'info' | 'warn' | 'error';
    /**
     * How long the toast should be displayed, in milliseconds.
     * Defaults to `toasterProps.duration``
     */
    duration?: number;
    /**
     * Additional description for the toast
     */
    description?: string;
    /**
     * Styling of that toast. You can use the CSS variables to override the default styling.
     */
    style?: React.CSSProperties & {
        '--toast-bg-color'?: string;
        '--toast-text-color'?: string;
        '--toast-border-color'?: string;
    };
    /**
     * Additional classes to pass to the toast.
     */
    className?: string;
}
```

### toast.info(message, options?)

Same as `toast(message, options?)`, minus `options.type?`.

### toast.success(message, options?)

Same as `toast(message, options?)`, minus `options.type?`.

### toast.warn(message, options?)

Same as `toast(message, options?)`, minus `options.type?`.

### toast.error(message, options?)

Same as `toast(message, options?)`, minus `options.type?`.
