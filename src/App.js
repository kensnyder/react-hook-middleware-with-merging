import React, { useState } from 'react';
import WhatIsThis from './components/WhatIsThis.js';
import { withMerging } from './with/withMerging.js';

export function App() {
	// get our modified state and our setter
	const [state, setState] = withMerging(
		useState({ count: 0, enabled: true }),
	);

	return (
		<div>
			<WhatIsThis />
			<p>
				<label>
					<input
						type="checkbox"
						onChange={toggleEnabled}
						checked={state.enabled}
					/>
					<span className="checkable">Changes enabled?</span>
				</label>
			</p>
			<p>Change me:</p>
			<p className="count-controls">
				<button onClick={decrement} disabled={!state.enabled}>
					-
				</button>
				<span className="count-display">{state.count}</span>
				<button onClick={increment} disabled={!state.enabled}>
					+
				</button>
			</p>
			<p>State object:</p>
			<pre>{JSON.stringify(state, null, 4)}</pre>
		</div>
	);

	// since functions get hoisted, we can put them down below the return
	function decrement() {
		setState(state => ({ count: state.count - 1 }));
	}

	function increment() {
		setState(state => ({ count: state.count + 1 }));
	}

	function toggleEnabled(evt) {
		setState(state => ({ enabled: !state.enabled }));
	}
}
