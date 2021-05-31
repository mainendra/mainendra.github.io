import {Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

function DelayShow({ children }: { children: React.ReactNode }) {
    return (
        <Transition
        show={true}
        appear={true}
        as={Fragment}
        enter="transition duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-200 transition ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
            {children}
        </Transition>);
}

export default DelayShow;
