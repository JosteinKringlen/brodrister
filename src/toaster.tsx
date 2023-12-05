import './styles.css';

import * as RadixToast from '@radix-ui/react-toast';
import clsx from 'clsx';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

import Icon from './icons';
import useToastStore from './store';
import type { HPos, ToasterProps, VPos } from './types';

const DEFAULT_DURATION = 3000;

const variants = {
    top: {
        initial: {
            opacity: 0,
            height: 0,
            scale: 0.95,
            y: '-100%',
        },
        animate: {
            opacity: 1,
            height: 'auto',
            scale: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            height: 0,
            scale: 0.95,
            y: -32,
        },
    } satisfies Variants,

    bottom: {
        initial: {
            opacity: 0,
            height: 0,
            scale: 0.95,
        },
        animate: {
            opacity: 1,
            height: 'auto',
            scale: 1,
        },
        exit: {
            opacity: 0,
            height: 0,
            scale: 0.95,
        },
    } satisfies Variants,
};

export default function Toaster(props: ToasterProps) {
    const {
        position = 'bottom-right',
        providerProps,
        toastProps,
        duration = DEFAULT_DURATION,
    } = props;
    const { toasts, removeToast } = useToastStore();
    const [vpos, hpos] = position.split('-') as [VPos, HPos];

    const { className: viewPortClassName, ...viewportProps } =
        props.viewportProps || {};

    return (
        <RadixToast.Provider
            swipeDirection={vpos === 'top' ? 'up' : 'down'}
            {...providerProps}
        >
            <AnimatePresence>
                {toasts.map(({ message, options }) => (
                    <RadixToast.Root
                        asChild
                        forceMount
                        open
                        onOpenChange={() => {
                            removeToast(options.id);
                        }}
                        duration={options?.duration || duration}
                        key={options.id}
                        id={options.id}
                        className="brodrister__toast-root"
                        data-v-pos={vpos}
                    >
                        <motion.li
                            layoutId={options.id}
                            layout
                            variants={variants[vpos]}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.15, type: 'tween' }}
                        >
                            <div
                                className={clsx(
                                    'brodrister__toast',
                                    toastProps?.classNames?.[
                                        options?.type ?? 'info'
                                    ],
                                    options?.className,
                                )}
                                data-type={options?.type}
                                data-h-pos={hpos}
                                data-v-pos={vpos}
                                style={{
                                    ...toastProps?.style?.[
                                        options?.type ?? 'info'
                                    ],
                                    ...options?.style,
                                }}
                            >
                                <Icon type={options?.type} />
                                <div className="brodrister__toast-content">
                                    <RadixToast.Title className="brodrister__toast-title">
                                        {message}
                                    </RadixToast.Title>

                                    {options?.description && (
                                        <RadixToast.Description className="brodrister__toast-description">
                                            {options.description}
                                        </RadixToast.Description>
                                    )}
                                </div>
                            </div>
                        </motion.li>
                    </RadixToast.Root>
                ))}
            </AnimatePresence>

            <RadixToast.Viewport
                className={clsx(
                    'brodrister__toast-viewport',
                    viewPortClassName,
                )}
                data-h-pos={hpos}
                data-v-pos={vpos}
                {...viewportProps}
            />
        </RadixToast.Provider>
    );
}
