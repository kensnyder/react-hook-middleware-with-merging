import React, { useState } from 'react';
import './WhatIsThis.css';

export default function WhatIsThis() {
	const [isExpanded, setExpanded] = useState(false);

	return (
		<div className="WhatIsThis">
			<a
				href={null}
				className="about-badge clickable"
				onClick={setExpanded.bind(0, true)}
			>
				<span className="about-icon">🧐</span>
				<span className="about-label">What is this demo about?</span>
			</a>
			{isExpanded && (
				<div className="about-text-area">
					<div className="about-text">
						<a
							href={null}
							className="about-close clickable"
							onClick={setExpanded.bind(0, false)}
						>
							&times;
						</a>
						<h3>
							This project demonstrates a withMerging() middleware
							function that modifies React's useState() hook.
						</h3>
						<p>
							By middleware, I mean that a function that takes an
							array of <code>[state, setState]</code> and returns
							an array of <code>[newState, newSetState]</code>{' '}
							such that any number of middleware functions may be
							applied.
						</p>
						<p>
							In this example, the state object contains a numeric
							count and a boolean indicating if changes are
							enabled. The decrement() and increment() functions
							both return an object containing only a count
							property. withMerging() ensures that object gets
							merged with the main object. It basically makes
							using the setState() callback simpler.
						</p>
						<p>
							Have a look at ./with/withMerging.js for the
							implementation
						</p>
						<h3>Tell me more about this hooks thing!</h3>
						<p>
							Hooks are an feature that lets you use state and
							other React features without writing a class.
							They’re available as of in React v16.8.
						</p>
						<p>
							Check out the{' '}
							<a href="https://reactjs.org/docs/hooks-intro.html">
								official docs
							</a>{' '}
							and this{' '}
							<a href="https://www.youtube.com/watch?v=dpw9EHDh2bM">
								intro video
							</a>
							.
						</p>
						<p>
							The concept is not unique to React. Check out
							experiments of these React-style hooks in{' '}
							<a href="https://www.npmjs.com/package/vue-hooks">
								Vue
							</a>{' '}
							or{' '}
							<a href="https://github.com/getify/tng-hooks">
								vanilla JavaScript
							</a>
							.
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
