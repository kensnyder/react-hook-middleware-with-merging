/**
 * @param {Array} usedState - a [state, setState] pair from a useState() call
 * @return {Array} usedState
 * @property {*} usedState[0] - the unaltered state object
 * @property {Function} usedState[1] - a new function to set state
 */
export function withMerging(usedState) {
	const [state, setState] = usedState;
	function newSetState(handler) {
		if (typeof handler !== 'function') {
			handler = () => handler;
		}
		return setState(lastState => {
			const newFragment = handler(lastState);
			if (typeof lastState !== 'object') {
				throw new Error(
					'withMerged() requires previous state to be an object.',
				);
			}
			if (typeof newFragment !== 'object') {
				throw new Error(
					'withMerged() requires new state to be an object.',
				);
			}
			return { ...lastState, ...newFragment };
		});
	}
	// we return the original state with minimum applied
	// and the original setState function
	return [state, newSetState];
}
