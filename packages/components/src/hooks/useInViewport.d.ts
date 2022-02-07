interface InViewportState {
    inViewport: boolean;
    wasInViewport: boolean;
}
declare const useInViewport: <E extends HTMLElement>(element: E | null) => InViewportState;
export default useInViewport;
