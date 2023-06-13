const tooltips = document.querySelectorAll('.has-tooltip');

let activeTooltip = null;

tooltips.forEach(tooltip => {
	tooltip.addEventListener('click', event => {
		event.preventDefault();

		if (activeTooltip) {
			activeTooltip.classList.remove('tooltip_active');
			activeTooltip = null;
		}

		const tooltipElement = document.createElement('div');
		tooltipElement.className = 'tooltip';
		tooltipElement.innerHTML = tooltip.title;

		const position = tooltip.getBoundingClientRect();

		const dataPosition = tooltip.getAttribute('data-position');
		switch (dataPosition) {
			case 'top':
				tooltipElement.style.left = `${position.left}px`;
				tooltipElement.style.top = `${position.top - tooltipElement.offsetHeight}px`;
				break;
			case 'left':
				tooltipElement.style.left = `${position.left - tooltipElement.offsetWidth}px`;
				tooltipElement.style.top = `${position.top}px`;
				break;
			case 'right':
				tooltipElement.style.left = `${position.right}px`;
				tooltipElement.style.top = `${position.top}px`;
				break;
			case 'bottom':
			default:
				tooltipElement.style.left = `${position.left}px`;
				tooltipElement.style.top = `${position.bottom}px`;
				break;
		}

		document.body.appendChild(tooltipElement);
		tooltipElement.classList.add('tooltip_active');

		activeTooltip = tooltipElement;
	});
});

document.addEventListener('click', event => {
	if (activeTooltip && !event.target.classList.contains('has-tooltip')) {
		activeTooltip.classList.remove('tooltip_active');
		activeTooltip = null;
	}
});