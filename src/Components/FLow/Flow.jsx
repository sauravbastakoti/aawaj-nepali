import React from 'react'

const Flow = ({ topColor = '#1a0841', waveColor = '#ffffff', height = 400 }) => {
	return (
	// pull the waves up a bit to overlap the hero and reduce visible gap
	<div className="w-full overflow-hidden" style={{ background: topColor, marginTop: '-40px' }}>
			<svg
				viewBox="0 0 2400 260"
				preserveAspectRatio="none"
				className="w-full"
				style={{ height }}
				xmlns="http://www.w3.org/2000/svg"
			>
			

				{/* Soft translucent band (blurred for marble feel) - duplicated for a seamless loop */}
				{/* Parallax-style gentle waves using a single path duplicated side-by-side to produce a continuous, gap-free loop */}
				<defs>
					<path id="gentle-wave" d="M0,150 C400,90 800,190 1200,150 C1600,110 2000,190 2400,150 L2400,260 L0,260 Z" />
				</defs>

				{/* layer 1 - furthest, slowest, faint */}
				<g>
					<g className="ripple ripple-2">
						{/* use translucent white so ripples blend with the white categories background */}
						<use href="#gentle-wave" x="-1" y="0" fill="rgba(255,255,255,0.06)" />
						<use href="#gentle-wave" x="2399" y="0" fill="rgba(255,255,255,0.06)" />
					</g>
					<animateTransform attributeName="transform" attributeType="XML" type="translate" from="-1 0" to="-2400 0" dur="26s" repeatCount="indefinite" />
				</g>

				{/* layer 2 */}
				<g>
					<g className="ripple ripple-2">
						<use href="#gentle-wave" x="0" y="6" fill="rgba(255,255,255,0.10)" />
						<use href="#gentle-wave" x="2400" y="6" fill="rgba(255,255,255,0.10)" />
					</g>
					<animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-2400 0" dur="20s" repeatCount="indefinite" />
				</g>

				{/* layer 3 */}
				<g>
					<g className="ripple ripple-3">
						<use href="#gentle-wave" x="0" y="10" fill="rgba(255,255,255,0.16)" />
						<use href="#gentle-wave" x="2400" y="10" fill="rgba(255,255,255,0.16)" />
					</g>
					<animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-2400 0" dur="14s" repeatCount="indefinite" />
				</g>

				{/* layer 4 - front, fastest, most opaque */}
				<g>
					<g className="ripple ripple-4">
						<use href="#gentle-wave" x="0" y="14" fill="rgba(255,255,255,0.22)" />
						<use href="#gentle-wave" x="2400" y="14" fill="rgba(255,255,255,0.22)" />
					</g>
					<animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-2400 0" dur="10s" repeatCount="indefinite" />
				</g>

				{/* Inline CSS for vertical ripple on inner groups (applied to child groups so SMIL X-translation still works on parent) */}
				<style>{`
					.ripple-1 { animation: ripple1 6s ease-in-out infinite; }
					.ripple-2 { animation: ripple2 5s ease-in-out infinite; }
					.ripple-3 { animation: ripple3 4.5s ease-in-out infinite; }
					.ripple-4 { animation: ripple4 4s ease-in-out infinite; }

					@keyframes ripple1 { 0%{transform:translateY(0)}25%{transform:translateY(-14px)}50%{transform:translateY(0)}75%{transform:translateY(10px)}100%{transform:translateY(0)} }
					@keyframes ripple2 { 0%{transform:translateY(0)}25%{transform:translateY(-12px)}50%{transform:translateY(0)}75%{transform:translateY(8px)}100%{transform:translateY(0)} }
					@keyframes ripple3 { 0%{transform:translateY(0)}25%{transform:translateY(-10px)}50%{transform:translateY(0)}75%{transform:translateY(6px)}100%{transform:translateY(0)} }
					@keyframes ripple4 { 0%{transform:translateY(0)}25%{transform:translateY(-8px)}50%{transform:translateY(0)}75%{transform:translateY(4px)}100%{transform:translateY(0)} }
				`}</style>
			</svg>
		</div>
	)
}

export default Flow

