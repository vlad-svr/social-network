import React, {Suspense} from 'react';
import Preloader from '../components/common/Preloader/Preloader';

export function withSuspensePreloader(WrappedComponent) {
    return (props) => {
        return (
            <Suspense fallback={<Preloader />}>
                <WrappedComponent {...props} />
            </Suspense>
        )
    }
}
