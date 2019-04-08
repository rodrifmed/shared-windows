export interface CustomerValidationState {
    send: boolean;

    waiting: boolean;

    cancelled: boolean;

    accepted: boolean;
    denied: boolean;
}

export const initializeCustomerValidationState = () => {
    return {
        send: false,

        waiting: false,

        cancelled: false,

        accepted: false,
        denied: false
    };
};
